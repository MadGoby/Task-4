import { DataForValueScale } from '../../Model/types';
import { IValuesScale } from './interfaces';

export class ValuesScale implements IValuesScale {
  readonly minValue: HTMLSpanElement;

  readonly maxValue: HTMLSpanElement;

  readonly twentyPercentValue: HTMLSpanElement;

  readonly fortyPercentValue: HTMLSpanElement;

  readonly sixtyPercentValue: HTMLSpanElement;

  readonly eightyPercentValue: HTMLSpanElement;

  constructor() {
    this.minValue = ValuesScale.createElement('type_min');
    this.maxValue = ValuesScale.createElement('type_max');
    this.twentyPercentValue = ValuesScale.createElement('percent_20');
    this.fortyPercentValue = ValuesScale.createElement('percent_40');
    this.sixtyPercentValue = ValuesScale.createElement('percent_60');
    this.eightyPercentValue = ValuesScale.createElement('percent_80');
  }

  private static createElement(classModifier: string): HTMLSpanElement {
    const element: HTMLSpanElement = document.createElement('span');

    element.classList.add('goby-slider__value', `goby-slider__value_${classModifier}`);

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
    return (this.minValue.classList.contains('goby-slider__value_state_vertical'))
      && (this.maxValue.classList.contains('goby-slider__value_state_vertical'))
      && (this.twentyPercentValue.classList.contains('goby-slider__value_state_vertical'))
      && (this.fortyPercentValue.classList.contains('goby-slider__value_state_vertical'))
      && (this.sixtyPercentValue.classList.contains('goby-slider__value_state_vertical'))
      && (this.eightyPercentValue.classList.contains('goby-slider__value_state_vertical'));
  }

  private checkIsNeedToMakeHorizontally(isVertical: boolean): boolean {
    return this.checkIsContainVerticalClass() && !isVertical;
  }

  private checkIsNeedToMakeVertical(isVertical: boolean): boolean {
    return !this.checkIsContainVerticalClass() && isVertical;
  }

  public changePlane(isVertical: boolean): void {
    const changeClasses = (): void => {
      this.minValue.classList.toggle('goby-slider__value_state_vertical');
      this.maxValue.classList.toggle('goby-slider__value_state_vertical');
      this.twentyPercentValue.classList.toggle('goby-slider__value_state_vertical');
      this.fortyPercentValue.classList.toggle('goby-slider__value_state_vertical');
      this.sixtyPercentValue.classList.toggle('goby-slider__value_state_vertical');
      this.eightyPercentValue.classList.toggle('goby-slider__value_state_vertical');
    };

    const isNeedToChangeClasses = this.checkIsNeedToMakeVertical(isVertical)
      || this.checkIsNeedToMakeHorizontally(isVertical);

    if (isNeedToChangeClasses) changeClasses();
  }

  public changeValueScaleDisplay(isValueScale: boolean): void {
    const changeDisplay = (value: string): void => {
      this.minValue.style.display = value;
      this.maxValue.style.display = value;
      this.twentyPercentValue.style.display = value;
      this.fortyPercentValue.style.display = value;
      this.sixtyPercentValue.style.display = value;
      this.eightyPercentValue.style.display = value;
    };

    if (!isValueScale) {
      changeDisplay('none');
    } else {
      changeDisplay('inline-block');
    }
  }
}
