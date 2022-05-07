import autobind from 'autobind-decorator';
import { DataForValueScale } from '../../Model/types';
import { IValuesScale } from './interfaces';
import { PassNewValue } from '../types';

@autobind
export class ValuesScale implements IValuesScale {
  readonly minValue: HTMLSpanElement;

  readonly maxValue: HTMLSpanElement;

  readonly twentyPercentValue: HTMLSpanElement;

  readonly fortyPercentValue: HTMLSpanElement;

  readonly sixtyPercentValue: HTMLSpanElement;

  readonly eightyPercentValue: HTMLSpanElement;

  readonly valueClass: string = 'goby-slider__value';

  readonly values: Array<HTMLSpanElement>;

  private readonly passNewValue: PassNewValue;

  constructor(passNewValue: PassNewValue) {
    this.minValue = this.createElement('type_min');
    this.maxValue = this.createElement('type_max');
    this.twentyPercentValue = this.createElement('percent_20');
    this.fortyPercentValue = this.createElement('percent_40');
    this.sixtyPercentValue = this.createElement('percent_60');
    this.eightyPercentValue = this.createElement('percent_80');
    this.passNewValue = passNewValue;

    this.values = Object.values(this).filter((element) => typeof element === 'object');
    this.values.forEach((value) => this.bindHandleValueClick(value));
  }

  private createElement(classModifier: string): HTMLSpanElement {
    const element: HTMLSpanElement = document.createElement('span');

    element.classList.add(this.valueClass, `${this.valueClass}_${classModifier}`);

    return element;
  }

  public refreshValueScale(values: DataForValueScale): void {
    ({
      min: this.minValue.innerText,
      max: this.maxValue.innerText,
      20: this.twentyPercentValue.innerText,
      40: this.fortyPercentValue.innerText,
      60: this.sixtyPercentValue.innerText,
      80: this.eightyPercentValue.innerText,
    } = values);
  }

  public centerValues(sliderWidth: number, handleWidth: number): void {
    const calculateExtremeValuePosition = (element: HTMLSpanElement): string => `${
      0 - ((element.offsetWidth - handleWidth) / 2)
    }px`;
    const calculateValuePosition = (coefficient: number, element: HTMLSpanElement): string => `${
      sliderWidth * coefficient - ((element.offsetWidth - handleWidth) / 2)
    }px`;

    this.minValue.style.left = calculateExtremeValuePosition(this.minValue);
    this.maxValue.style.right = calculateExtremeValuePosition(this.maxValue);
    this.twentyPercentValue.style.left = calculateValuePosition(0.2, this.twentyPercentValue);
    this.fortyPercentValue.style.left = calculateValuePosition(0.4, this.fortyPercentValue);
    this.sixtyPercentValue.style.left = calculateValuePosition(0.6, this.sixtyPercentValue);
    this.eightyPercentValue.style.left = calculateValuePosition(0.8, this.eightyPercentValue);
  }

  private checkIsContainVerticalClass(): boolean {
    return (this.minValue.classList.contains(`${this.valueClass}_state_vertical`))
      && (this.maxValue.classList.contains(`${this.valueClass}_state_vertical`))
      && (this.twentyPercentValue.classList.contains(`${this.valueClass}_state_vertical`))
      && (this.fortyPercentValue.classList.contains(`${this.valueClass}_state_vertical`))
      && (this.sixtyPercentValue.classList.contains(`${this.valueClass}_state_vertical`))
      && (this.eightyPercentValue.classList.contains(`${this.valueClass}_state_vertical`));
  }

  private checkIsNeedToMakeHorizontally(isVertical: boolean): boolean {
    return this.checkIsContainVerticalClass() && !isVertical;
  }

  private checkIsNeedToMakeVertical(isVertical: boolean): boolean {
    return !this.checkIsContainVerticalClass() && isVertical;
  }

  public changePlane(isVertical: boolean): void {
    const changeClasses = (): void => {
      this.values.forEach((element: HTMLSpanElement): void => {
        element.classList.toggle(`${this.valueClass}_state_vertical`);
      });
    };

    const isNeedToChangeClasses = this.checkIsNeedToMakeVertical(isVertical)
      || this.checkIsNeedToMakeHorizontally(isVertical);

    if (isNeedToChangeClasses) changeClasses();
  }

  public changeValueScaleDisplay(isValueScale: boolean): void {
    if (!isValueScale) {
      this.values.forEach((element: HTMLSpanElement): void => {
        element.classList.add(`${this.valueClass}_hidden`);
      });
    } else {
      this.values.forEach((element: HTMLSpanElement): void => {
        element.classList.remove(`${this.valueClass}_hidden`);
      });
    }
  }

  private handleValueClick(event: Event): void {
    if (!event.target) return;
    const eventTarget: HTMLSpanElement = event.target as HTMLSpanElement;

    this.passNewValue('unspecified', Number(eventTarget.innerText));
  }

  private bindHandleValueClick(value: HTMLSpanElement):void {
    value.addEventListener('click', this.handleValueClick);
  }
}
