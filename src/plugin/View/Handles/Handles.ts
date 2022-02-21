import { RefreshIntervalPositions } from '../SelectedInterval/types';
import {
  DataForAdjustPosition,
  HandlesElementsInfo,
  StaticElementsDescription,
  HandleHideData,
  RefreshHandlesData,
  HandlesOverlaps,
} from './types';
import { RefreshData } from '../types';
import { HandlesPosition } from '../Movement/types';

export class Handles {
  readonly fromHandle: HTMLSpanElement;

  readonly toHandle: HTMLSpanElement;

  readonly fromValue: HTMLSpanElement;

  readonly toValue: HTMLSpanElement;

  public isInputChanges = false;

  readonly staticElementsDescription: StaticElementsDescription = [
    {
      cssClasses: ['goby-slider__handle', 'goby-slider__handle_type_from'],
      name: 'style',
      value: 'display: inline-block',
    },
    {
      cssClasses: ['goby-slider__handle', 'goby-slider__handle_type_to'],
      name: 'style',
      value: 'display: inline-block',
    },
    {
      cssClasses: ['goby-slider__handle-value', 'goby-slider__handle-value_type_from'],
      name: 'style',
      value: 'display: inline-block',
    },
    {
      cssClasses: ['goby-slider__handle-value', 'goby-slider__handle-value_type_to'],
      name: 'style',
      value: 'display: inline-block',
    },
  ];

  constructor() {
    this.fromHandle = Handles.createElement(this.staticElementsDescription[0]);
    this.toHandle = Handles.createElement(this.staticElementsDescription[1]);
    this.fromValue = Handles.createElement(this.staticElementsDescription[2]);
    this.toValue = Handles.createElement(this.staticElementsDescription[3]);
    this.fromHandle.append(this.fromValue);
    this.toHandle.append(this.toValue);
    this.prepareClassElements();
  }

  private prepareClassElements(): void {
    this.fromHandle.append(this.fromValue);
    this.toHandle.append(this.toValue);
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

    const isAssignValuesNeed = name && value;
    if (isAssignValuesNeed) element.setAttribute(name, value);

    return element;
  }

  private correctsHandlesOverlaps(settings: HandlesOverlaps) {
    const { positions, sliderWidth } = settings;
    const isToNotInExtra: boolean = positions.to < sliderWidth - this.toHandle.offsetWidth;

    if (isToNotInExtra) {
      this.toHandle.style.left = `${positions.from + this.fromHandle.offsetWidth}px`;
      positions.to = positions.from + this.fromHandle.offsetWidth;
    } else {
      this.fromHandle.style.left = `${positions.to - this.fromHandle.offsetWidth}px`;
      positions.from = positions.to - this.fromHandle.offsetWidth;
    }
  }

  public refreshValues(data: RefreshData, positions: HandlesOverlaps): boolean {
    const handlesData: RefreshHandlesData = data as RefreshHandlesData;
    const target: 'fromValue' | 'toValue' = `${handlesData.target}Value`;
    const isRoundUpNeed: boolean = data.isToFixed && !this.isInputChanges;
    const differenceBetweenPositions: number = positions.positions.to - positions.positions.from;
    const isExtraPosition = positions.positions.from === 0
      || positions.positions.to === positions.sliderWidth - this.fromHandle.offsetWidth;
    const isHandlesOverlaps: boolean = isExtraPosition && positions.isDouble
      && differenceBetweenPositions < this.fromHandle.offsetWidth;

    let result: boolean = true;
    if (isHandlesOverlaps) {
      this.correctsHandlesOverlaps(positions);
      result = false;
    } else {
      this[target].innerText = isRoundUpNeed ? `${Math.round(Number(data.value))}` : data.value;
      if (this.isInputChanges) this.isInputChanges = false;
    }
    return result;
  }

  public adjustPositions(dataToRefresh: DataForAdjustPosition, sliderWidth: number): RefreshIntervalPositions {
    const handleLink: 'fromHandle' | 'toHandle' = `${dataToRefresh.target}Handle`;
    const target = this[handleLink];

    function calculateNewPosition(): string {
      return String(((sliderWidth - target.offsetWidth) / dataToRefresh.totalValues)
        * (Number(dataToRefresh.value) - Number(dataToRefresh.minValue)));
    }

    const newPosition: string = calculateNewPosition();
    target.style.left = `${newPosition}px`;

    return {
      target: dataToRefresh.target,
      position: newPosition,
      sliderWidth: sliderWidth - target.offsetWidth,
      handleWidth: target.offsetWidth,
    };
  }

  private checkIsNeedToMakeVertical(isVertical: boolean): boolean {
    return (!this.fromValue.classList.contains('goby-slider__handle-value_state_vertical'))
      && (!this.toValue.classList.contains('goby-slider__handle-value_state_vertical')) && (isVertical);
  }

  private checkIsNeedToMakeHorizontally(isVertical: boolean): boolean {
    return (this.fromValue.classList.contains('goby-slider__handle-value_state_vertical'))
      && (this.toValue.classList.contains('goby-slider__handle-value_state_vertical')) && (!isVertical);
  }

  private checkIsToNeedHide(isDouble: boolean): boolean {
    return (!isDouble) && (this.toHandle.style.display === 'inline-block');
  }

  private checkIsToNeedShow(isDouble: boolean): boolean {
    return (isDouble) && (this.toHandle.style.display === 'none');
  }

  public changePlane(isVertical: boolean): void {
    function changeVerticalClass(from: HTMLSpanElement, to: HTMLSpanElement) {
      from.classList.toggle('goby-slider__handle-value_state_vertical');
      to.classList.toggle('goby-slider__handle-value_state_vertical');
    }

    switch (true) {
      case this.checkIsNeedToMakeVertical(isVertical):
        changeVerticalClass(this.fromValue, this.toValue);
        break;
      case this.checkIsNeedToMakeHorizontally(isVertical):
        changeVerticalClass(this.fromValue, this.toValue);
        break;
      default:
        break;
    }
  }

  private controlHandlesPosition(settings: HandleHideData) {
    const { sliderWidth, positions } = settings;

    const newPosition: number = sliderWidth - this.toHandle.offsetWidth;
    this.toHandle.style.left = `${newPosition}px`;
    positions.to = newPosition;
    const isWrongFromPosition = positions.from > sliderWidth - this.toHandle.offsetWidth - this.fromHandle.offsetWidth;

    if (isWrongFromPosition) {
      const extremeFromPosition = String(sliderWidth - this.toHandle.offsetWidth - this.fromHandle.offsetWidth);
      this.fromHandle.style.left = `${extremeFromPosition}px`;
      positions.from = Number(extremeFromPosition);
    }
  }

  public controlHandlesDisplay(settings: HandleHideData): void {
    const { isDouble } = settings;

    if (this.checkIsToNeedHide(isDouble)) {
      this.toHandle.style.display = 'none';
    } else if (this.checkIsToNeedShow(isDouble)) {
      this.toHandle.style.display = 'inline-block';
      this.controlHandlesPosition(settings);
    }
  }

  public hideHandleValues(isHandleValues: boolean): void {
    if (!isHandleValues) {
      this.toValue.style.display = 'none';
      this.fromValue.style.display = 'none';
    } else {
      this.toValue.style.display = 'inline-block';
      this.fromValue.style.display = 'inline-block';
    }
  }

  public selectsHandleToMove(settings: {
    targetPosition: number,
    positions: HandlesPosition,
    isDouble: boolean,
  }): HTMLSpanElement {
    const { targetPosition, positions, isDouble } = settings;
    const fromDifference = Math.abs(Number(positions.from) - Number(targetPosition));
    const toDifference = Math.abs(Number(positions.to) - Number(targetPosition));
    const isFromDifferenceLess = fromDifference < toDifference || !isDouble;

    if (isFromDifferenceLess) return this.fromHandle;
    return this.toHandle;
  }

  public acceptNewPosition(settings: {
    target: HTMLSpanElement,
    value: number,
    positions: HandlesPosition,
  }): void {
    const { target, value, positions } = settings;

    if (target === this.fromHandle) {
      this.fromHandle.style.left = `${value}px`;
      positions.from = value;
    } else {
      this.toHandle.style.left = `${value}px`;
      positions.to = value;
    }
  }
}
