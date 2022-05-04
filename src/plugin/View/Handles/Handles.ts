import { RefreshIntervalPositions } from '../SelectedInterval/types';
import {
  DataForAdjustPosition,
  HandlesElementsInfo,
  StaticElementsDescription,
  HandleHideData,
  RefreshHandlesData,
  DataToHandlesMove,
  NewPositionData,
} from './types';
import { RefreshData } from '../types';

export class Handles {
  readonly fromHandle: HTMLSpanElement;

  readonly toHandle: HTMLSpanElement;

  readonly fromValue: HTMLSpanElement;

  readonly toValue: HTMLSpanElement;

  private readonly handleClass: string = 'goby-slider__handle';

  private readonly handleValueClass: string = 'goby-slider__handle-value';

  public isInputChanges = false;

  readonly staticElementsDescription: StaticElementsDescription = [
    {
      cssClasses: [this.handleClass, `${this.handleClass}_type_from`],
    },
    {
      cssClasses: [this.handleClass, `${this.handleClass}_type_to`],
    },
    {
      cssClasses: [this.handleValueClass, `${this.handleValueClass}_type_from`],
    },
    {
      cssClasses: [this.handleValueClass, `${this.handleValueClass}_type_to`],
    },
  ];

  constructor() {
    this.fromHandle = Handles.createElement(this.staticElementsDescription[0]);
    this.toHandle = Handles.createElement(this.staticElementsDescription[1]);
    this.fromValue = Handles.createElement(this.staticElementsDescription[2]);
    this.toValue = Handles.createElement(this.staticElementsDescription[3]);

    this.collectClassElements();
  }

  private collectClassElements(): void {
    this.fromHandle.append(this.fromValue);
    this.toHandle.append(this.toValue);
  }

  static createElement(settings: HandlesElementsInfo): HTMLSpanElement {
    const {
      cssClasses = [
        'for-change',
        'for-change',
      ],
    } = settings;
    const element: HTMLSpanElement = document.createElement('span');

    cssClasses.forEach((cssClass: string) => {
      element.classList.add(cssClass);
    });

    return element;
  }

  public refreshValues(data: RefreshData): boolean {
    const refreshHandlesData: RefreshHandlesData = data as RefreshHandlesData;
    const target: 'fromValue' | 'toValue' = `${refreshHandlesData.target}Value`;
    const isRoundUpNeed: boolean = data.isToFixed && !this.isInputChanges;

    this[target].innerText = isRoundUpNeed ? `${Math.round(Number(data.value))}` : data.value;
    if (this.isInputChanges) this.isInputChanges = false;

    return true;
  }

  public adjustPositions(dataToRefresh: DataForAdjustPosition, sliderWidth: number): RefreshIntervalPositions {
    const handleName: 'fromHandle' | 'toHandle' = `${dataToRefresh.target}Handle`;
    const handleTarget: HTMLSpanElement = this[handleName];

    function calculateNewPosition(): string {
      return String(((sliderWidth - handleTarget.offsetWidth) / dataToRefresh.totalValues)
        * (Number(dataToRefresh.value) - Number(dataToRefresh.minValue)));
    }

    const newPosition: string = calculateNewPosition();
    handleTarget.style.left = `${newPosition}px`;

    return {
      target: dataToRefresh.target,
      position: newPosition,
      sliderWidth: sliderWidth - handleTarget.offsetWidth,
      handleWidth: handleTarget.offsetWidth,
    };
  }

  private checkIsNeedToMakeVertical(isVertical: boolean): boolean {
    return (!this.fromValue.classList.contains(`${this.handleValueClass}_state_vertical`))
      && (!this.toValue.classList.contains(`${this.handleValueClass}_state_vertical`)) && (isVertical);
  }

  private checkIsNeedToMakeHorizontally(isVertical: boolean): boolean {
    return (this.fromValue.classList.contains(`${this.handleValueClass}_state_vertical`))
      && (this.toValue.classList.contains(`${this.handleValueClass}_state_vertical`)) && (!isVertical);
  }

  private checkIsToNeedHide(isDouble: boolean): boolean {
    return (!isDouble) && (!this.toHandle.classList.contains(`${this.handleClass}_hidden`));
  }

  private checkIsToNeedShow(isDouble: boolean): boolean {
    return (isDouble) && (this.toHandle.classList.contains(`${this.handleClass}_hidden`));
  }

  public changePlane(isVertical: boolean): void {
    const changeVerticalClass = (from: HTMLSpanElement, to: HTMLSpanElement): void => {
      from.classList.toggle(`${this.handleValueClass}_state_vertical`);
      to.classList.toggle(`${this.handleValueClass}_state_vertical`);
    };

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

  private changeHandlesPosition(settings: HandleHideData) {
    const { sliderWidth, positions } = settings;
    const newPosition: number = sliderWidth - this.toHandle.offsetWidth;

    this.toHandle.style.left = `${newPosition}px`;
    positions.to = newPosition;
    const isFromPositionIncorrect: boolean = positions.from > (
      sliderWidth - this.toHandle.offsetWidth - this.fromHandle.offsetWidth
    );

    if (isFromPositionIncorrect) {
      const extremeFromPosition = String(sliderWidth - this.toHandle.offsetWidth - this.fromHandle.offsetWidth);
      this.fromHandle.style.left = `${extremeFromPosition}px`;
      positions.from = Number(extremeFromPosition);
    }
  }

  public changeHandlesDisplay(settings: HandleHideData): void {
    const { isDouble } = settings;

    if (this.checkIsToNeedHide(isDouble)) {
      this.toHandle.classList.add(`${this.handleClass}_hidden`);
    } else if (this.checkIsToNeedShow(isDouble)) {
      this.toHandle.classList.remove(`${this.handleClass}_hidden`);
      this.changeHandlesPosition(settings);
    }
  }

  public hideHandlesValues(isHandlesValues: boolean): void {
    if (!isHandlesValues) {
      this.toValue.classList.add(`${this.handleValueClass}_hidden`);
      this.fromValue.classList.add(`${this.handleValueClass}_hidden`);
    } else {
      this.toValue.classList.remove(`${this.handleValueClass}_hidden`);
      this.fromValue.classList.remove(`${this.handleValueClass}_hidden`);
    }
  }

  public defineHandleToMove(settings: DataToHandlesMove): HTMLSpanElement {
    const { targetPosition, positions, isDouble } = settings;
    const fromDifference: number = Math.abs(Number(positions.from) - Number(targetPosition));
    const toDifference: number = Math.abs(Number(positions.to) - Number(targetPosition));
    const isFromDifferenceLess: boolean = fromDifference < toDifference || !isDouble;

    if (isFromDifferenceLess) return this.fromHandle;
    return this.toHandle;
  }

  public acceptNewPosition(settings: NewPositionData): void {
    const { target, value, positions } = settings;

    if (target === this.fromHandle) {
      this.fromHandle.style.left = `${value}px`;
      positions.from = value;
    } else {
      this.toHandle.style.left = `${value}px`;
      positions.to = value;
    }
  }

  updateMainHandleClass(targetHandle: HTMLSpanElement) {
    const className: string = `${this.handleClass}_type_main`;

    if (this.fromHandle.classList.contains(className)) this.fromHandle.classList.remove(className);
    if (this.toHandle.classList.contains(className)) this.toHandle.classList.remove(className);
    targetHandle.classList.add(className);
  }

  private updateFocusedHandleClass(targetHandle: HTMLSpanElement | false): void {
    const className: string = 'goby-slider__handle_focused';
    const defineActiveHandle = (): HTMLSpanElement => {
      if (this.fromHandle.classList.contains(className)) return this.fromHandle;
      return this.toHandle;
    };

    if (targetHandle) {
      targetHandle.classList.add(className);
    } else {
      const oldTargetHandle: HTMLSpanElement = defineActiveHandle();
      oldTargetHandle.classList.remove(className);
    }
  }
}
