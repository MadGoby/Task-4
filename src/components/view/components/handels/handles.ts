'use strict';

import { RefreshData } from '../../interfaces/RefreshData';
import { HandelsPosition } from '../movement/interfaces/HandelsPosition';
import { RefreshIntervalPositions } from '../selectedInterval/interfaces.ts/RefreshIntervalPositions';
import { DataForAdjustPosition } from './interfaces/DataForAdjustPosition';

export class Handels {
  readonly fromHandel: HTMLSpanElement;

  readonly toHandel: HTMLSpanElement;

  readonly fromValue: HTMLSpanElement;

  readonly toValue: HTMLSpanElement;

  constructor() {
    function createElement(cssClases: Array<string>, attr?: { name: string, value: string }): HTMLSpanElement {
      let element: HTMLSpanElement = document.createElement('span');
      cssClases.map(function (cssClass: string) {
        element.classList.add(cssClass);
      });
      if (attr) element.setAttribute(attr.name, attr.value);
      return element;
    }
    this.fromHandel = createElement(['cs-slider__handel', 'cs-slider__handel_from'], { name: 'style', value: 'display: inline-block' });
    this.toHandel = createElement(['cs-slider__handel', 'cs-slider__handel_to'], { name: 'style', value: 'display: inline-block' });
    this.fromValue = createElement(['cs-slider__handel-value', 'cs-slider__handel-value_from'], { name: 'style', value: 'display: inline-block' });
    this.toValue = createElement(['cs-slider__handel-value', 'cs-slider__handel-value_to'], { name: 'style', value: 'display: inline-block' });
    this.fromHandel.append(this.fromValue);
    this.toHandel.append(this.toValue);
  }

  public refreshValues(data: RefreshData): void {
    if (data.target == 'from') this.fromValue.innerText = data.value;
    if (data.target == 'to') this.toValue.innerText = data.value;
  }

  public adjustPositionRelativeValue(dataToRefresh: DataForAdjustPosition, sliderWidth: number): RefreshIntervalPositions {
    function calculateNewPosition(): string {
      return String(((sliderWidth - target.offsetWidth) / dataToRefresh.totalValues) * (Number(dataToRefresh.value) - +dataToRefresh.minValue));
    }

    let target: HTMLSpanElement;
    dataToRefresh.target == 'from' ? target = this.fromHandel : target = this.toHandel;

    let newPosition: string = calculateNewPosition();
    target.style.left = newPosition + 'px';
    return {
      target: dataToRefresh.target, position: newPosition, sliderWidth: sliderWidth - target.offsetWidth, handelWidth: target.offsetWidth,
    };
  }

  private isNeedToMakeVertical(isVertical: boolean): boolean {
    return (this.fromValue.classList.contains('cs-slider__handel-value_vertical') == false)
    && (this.toValue.classList.contains('cs-slider__handel-value_vertical') == false) && (isVertical == true);
  }

  private isNeedToMakeHorizontally(isVertical: boolean): boolean {
    return (this.fromValue.classList.contains('cs-slider__handel-value_vertical') == true)
    && (this.toValue.classList.contains('cs-slider__handel-value_vertical') == true) && (isVertical == false);
  }

  private isToNeedHide(isDouble: boolean): boolean {
    return (isDouble == false) && (this.toHandel.style.display == 'inline-block');
  }

  private isToNeedShow(isDouble: boolean): boolean {
    return (isDouble == true) && (this.toHandel.style.display == 'none');
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

  public hideToHandel(isDouble: boolean, positions: HandelsPosition, sliderWidth: number): void {
    if (this.isToNeedHide(isDouble)) {
      this.toHandel.style.display = 'none';
    } else if (this.isToNeedShow(isDouble)) {
      this.toHandel.style.display = 'inline-block';
      let newPosition: number = sliderWidth - this.toHandel.offsetWidth;
      this.toHandel.style.left = String(newPosition) + 'px';
      positions.to = newPosition;
      if (positions.from > sliderWidth - this.toHandel.offsetWidth - this.fromHandel.offsetWidth) {
        this.fromHandel.style.left = String(sliderWidth - this.toHandel.offsetWidth - this.fromHandel.offsetWidth) + 'px';
        positions.from = sliderWidth - this.toHandel.offsetWidth - this.fromHandel.offsetWidth;
      }
    }
  }

  public hideHandelValues(isHandelValues: boolean): void {
    if (isHandelValues == false) {
      this.toValue.style.display = 'none';
      this.fromValue.style.display = 'none';
    } else {
      this.toValue.style.display = 'inline-block';
      this.fromValue.style.display = 'inline-block';
    }
  }
}
