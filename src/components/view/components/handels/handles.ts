'use strict';

import { RefreshData } from '../../types';
import { RefreshIntervalPositions } from '../selectedInterval/types';
import {
  DataForAdjustPosition,
  HandlesElementsInfo,
  StaticElementsDescription,
  HandleHideData,
} from './types';

export class Handles {
  readonly fromHandel: HTMLSpanElement;

  readonly toHandel: HTMLSpanElement;

  readonly fromValue: HTMLSpanElement;

  readonly toValue: HTMLSpanElement;

  readonly staticElementsDescription: StaticElementsDescription = [
    {
      cssClasses: ['cs-slider__handel', 'cs-slider__handel_from'],
      name: 'style',
      value: 'display: inline-block',
    },
    {
      cssClasses: ['cs-slider__handel', 'cs-slider__handel_to'],
      name: 'style',
      value: 'display: inline-block',
    },
    {
      cssClasses: ['cs-slider__handel-value', 'cs-slider__handel-value_from'],
      name: 'style',
      value: 'display: inline-block',
    },
    {
      cssClasses: ['cs-slider__handel-value', 'cs-slider__handel-value_to'],
      name: 'style',
      value: 'display: inline-block',
    },
  ];

  constructor() {
    this.fromHandel = Handles.createElement(this.staticElementsDescription[0]);
    this.toHandel = Handles.createElement(this.staticElementsDescription[1]);
    this.fromValue = Handles.createElement(this.staticElementsDescription[2]);
    this.toValue = Handles.createElement(this.staticElementsDescription[3]);
    this.fromHandel.append(this.fromValue);
    this.toHandel.append(this.toValue);
    this.prepareClassElements();
  }

  private prepareClassElements(): void {
    this.fromHandel.append(this.fromValue);
    this.toHandel.append(this.toValue);
  }

  static createElement(settings: HandlesElementsInfo): HTMLSpanElement {
    const {
      cssClasses = [
        'for-change',
        'for-change',
      ],
      name = 'for-change',
      value = 'for-change',
    } = settings;
    const element: HTMLSpanElement = document.createElement('span');

    cssClasses.forEach((cssClass: string) => {
      element.classList.add(cssClass);
    });

    if (name && value) element.setAttribute(name, value);

    return element;
  }

  public refreshValues(data: RefreshData): void {
    if (data.target === 'from') this.fromValue.innerText = data.value;
    if (data.target === 'to') this.toValue.innerText = data.value;
  }

  public adjustPositions(dataToRefresh: DataForAdjustPosition, sliderWidth: number): RefreshIntervalPositions {
    let target: HTMLSpanElement;

    function calculateNewPosition(): string {
      return String(((sliderWidth - target.offsetWidth) / dataToRefresh.totalValues)
        * (Number(dataToRefresh.value) - +dataToRefresh.minValue));
    }

    if (dataToRefresh.target === 'from') {
      target = this.fromHandel;
    } else {
      target = this.toHandel;
    }

    let newPosition: string = calculateNewPosition();
    target.style.left = newPosition + 'px';

    return {
      target: dataToRefresh.target,
      position: newPosition,
      sliderWidth: sliderWidth - target.offsetWidth,
      handelWidth: target.offsetWidth,
    };
  }

  private isNeedToMakeVertical(isVertical: boolean): boolean {
    return (!this.fromValue.classList.contains('cs-slider__handel-value_vertical'))
      && (!this.toValue.classList.contains('cs-slider__handel-value_vertical')) && (isVertical);
  }

  private isNeedToMakeHorizontally(isVertical: boolean): boolean {
    return (this.fromValue.classList.contains('cs-slider__handel-value_vertical'))
      && (this.toValue.classList.contains('cs-slider__handel-value_vertical')) && (!isVertical);
  }

  private isToNeedHide(isDouble: boolean): boolean {
    return (!isDouble) && (this.toHandel.style.display === 'inline-block');
  }

  private isToNeedShow(isDouble: boolean): boolean {
    return (isDouble) && (this.toHandel.style.display === 'none');
  }

  public changePlane(isVertical: boolean): void {
    function classChanger(from: HTMLSpanElement, to: HTMLSpanElement) {
      from.classList.toggle('cs-slider__handel-value_vertical');
      to.classList.toggle('cs-slider__handel-value_vertical');
    }

    if (this.isNeedToMakeVertical(isVertical)) {
      classChanger(this.fromValue, this.toValue);
    } else if (this.isNeedToMakeHorizontally(isVertical)) {
      classChanger(this.fromValue, this.toValue);
    }
  }

  public controlHandlesDisplay(settings: HandleHideData): void {
    const { isDouble, sliderWidth, positions } = settings;

    if (this.isToNeedHide(isDouble)) {
      this.toHandel.style.display = 'none';
    } else if (this.isToNeedShow(isDouble)) {
      const newPosition: number = sliderWidth - this.toHandel.offsetWidth;

      this.toHandel.style.display = 'inline-block';
      this.toHandel.style.left = String(newPosition) + 'px';
      positions.to = newPosition;

      if (positions.from > sliderWidth - this.toHandel.offsetWidth - this.fromHandel.offsetWidth) {
        const extremeFromPosition = String(sliderWidth - this.toHandel.offsetWidth - this.fromHandel.offsetWidth);
        this.fromHandel.style.left = extremeFromPosition + 'px';
        positions.from = sliderWidth - this.toHandel.offsetWidth - this.fromHandel.offsetWidth;
      }
    }
  }

  public hideHandelValues(isHandelValues: boolean): void {
    if (!isHandelValues) {
      this.toValue.style.display = 'none';
      this.fromValue.style.display = 'none';
    } else {
      this.toValue.style.display = 'inline-block';
      this.fromValue.style.display = 'inline-block';
    }
  }
}
