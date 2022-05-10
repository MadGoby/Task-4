import {
  HandlesElementsInfo,
  StaticElementsDescription,
  HandleHideData,
} from './types';
import { NewHandlesData } from '../types';

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

  public refreshValues(data: NewHandlesData, sliderWidth: number): void {
    const {
      target,
      value,
      isToFixed,
      position,
    } = data;
    if (target === 'min' || target === 'max') return;
    const valueTargetName: 'fromValue' | 'toValue' = `${target}Value`;
    const isRoundUpNeed: boolean = isToFixed && !this.isInputChanges;

    this[valueTargetName].innerText = isRoundUpNeed ? `${Math.round(Number(value))}` : String(value);
    if (this.isInputChanges) this.isInputChanges = false;

    this.refreshPosition(target, position, sliderWidth);
  }

  private refreshPosition(target: 'from' | 'to', position: string, sliderWidth: number):void {
    const handleTargetName: 'fromHandle' | 'toHandle' = `${target}Handle`;
    this[handleTargetName].style.left = `${Number(position)}px`;
    const toPosition: number = Number(this.toHandle.style.left.replace('px', ''));
    const fromPosition: number = Number(this.fromHandle.style.left.replace('px', ''));

    if (toPosition <= (this.toHandle.offsetWidth * 2)) this.updateMainHandleClass(this.toHandle);
    if (fromPosition >= (sliderWidth - this.toHandle.offsetWidth * 2)) this.updateMainHandleClass(this.fromHandle);
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

  public changeHandlesDisplay(settings: HandleHideData): void {
    const { isDouble } = settings;

    if (this.checkIsToNeedHide(isDouble)) {
      this.toHandle.classList.add(`${this.handleClass}_hidden`);
    } else if (this.checkIsToNeedShow(isDouble)) {
      this.toHandle.classList.remove(`${this.handleClass}_hidden`);
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

  updateMainHandleClass(targetHandle: HTMLSpanElement) {
    const className: string = `${this.handleClass}_type_main`;

    if (this.fromHandle.classList.contains(className)) this.fromHandle.classList.remove(className);
    if (this.toHandle.classList.contains(className)) this.toHandle.classList.remove(className);
    targetHandle.classList.add(className);
  }
}
