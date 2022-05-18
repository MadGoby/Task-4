import autobind from 'autobind-decorator';
import { DataForValueScale } from '../../Model/types';
import { IValuesScale } from './interfaces';
import { PassNewValue } from '../types';

@autobind
export class ValuesScale implements IValuesScale {
  public readonly minValue: HTMLSpanElement;

  public readonly maxValue: HTMLSpanElement;

  public readonly twentyPercentValue: HTMLSpanElement;

  public readonly fortyPercentValue: HTMLSpanElement;

  public readonly sixtyPercentValue: HTMLSpanElement;

  public readonly eightyPercentValue: HTMLSpanElement;

  private readonly valueClass: string = 'goby-slider__value';

  private readonly values: Array<HTMLSpanElement>;

  private readonly environmentLink: { passNewValue: PassNewValue };

  constructor(environmentLink: { passNewValue: PassNewValue }) {
    this.minValue = this.createElement('type_min');
    this.maxValue = this.createElement('type_max');
    this.twentyPercentValue = this.createElement('percent_20');
    this.fortyPercentValue = this.createElement('percent_40');
    this.sixtyPercentValue = this.createElement('percent_60');
    this.eightyPercentValue = this.createElement('percent_80');
    this.environmentLink = environmentLink;

    this.values = [
      this.minValue,
      this.maxValue,
      this.twentyPercentValue,
      this.fortyPercentValue,
      this.sixtyPercentValue,
      this.eightyPercentValue,
    ];
    this.values.forEach((value) => this.bindHandleValueClick(value));
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

  public changePlane(isVertical: boolean): void {
    const changeClasses = (): void => {
      this.values.forEach((element: HTMLSpanElement): void => {
        element.classList.toggle(`${this.valueClass}_state_vertical`);
      });
    };

    const isNeedToChangeClasses = this.checkIsNeedToDisplayVertical(isVertical)
      || this.checkIsNeedToDisplayHorizontally(isVertical);

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

  private createElement(classModifier: string): HTMLSpanElement {
    const element: HTMLSpanElement = document.createElement('span');

    element.classList.add(this.valueClass, `${this.valueClass}_${classModifier}`);

    return element;
  }

  private checkIsContainVerticalClass(): boolean {
    return (this.minValue.classList.contains(`${this.valueClass}_state_vertical`))
      && (this.maxValue.classList.contains(`${this.valueClass}_state_vertical`))
      && (this.twentyPercentValue.classList.contains(`${this.valueClass}_state_vertical`))
      && (this.fortyPercentValue.classList.contains(`${this.valueClass}_state_vertical`))
      && (this.sixtyPercentValue.classList.contains(`${this.valueClass}_state_vertical`))
      && (this.eightyPercentValue.classList.contains(`${this.valueClass}_state_vertical`));
  }

  private checkIsNeedToDisplayHorizontally(isVertical: boolean): boolean {
    return this.checkIsContainVerticalClass() && !isVertical;
  }

  private checkIsNeedToDisplayVertical(isVertical: boolean): boolean {
    return !this.checkIsContainVerticalClass() && isVertical;
  }

  private handleValueClick(event: Event): void {
    if (!event.target) return;
    const eventTarget: HTMLSpanElement = event.target as HTMLSpanElement;

    this.environmentLink.passNewValue({
      target: 'unspecified',
      newPosition: Number(eventTarget.innerText),
    });
  }

  private bindHandleValueClick(value: HTMLSpanElement):void {
    value.addEventListener('click', this.handleValueClick);
  }
}
