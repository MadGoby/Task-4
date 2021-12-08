import { DataForValueScale } from '../../../model/types';
import { IValuesScale } from './interfaces';

export class ValuesScale implements IValuesScale {
  readonly minValue: HTMLSpanElement;

  readonly maxValue: HTMLSpanElement;

  readonly 20: HTMLSpanElement;

  readonly 40: HTMLSpanElement;

  readonly 60: HTMLSpanElement;

  readonly 80: HTMLSpanElement;

  constructor() {
    this.minValue = ValuesScale.createElement('min');
    this.maxValue = ValuesScale.createElement('max');
    this[20] = ValuesScale.createElement('20');
    this[40] = ValuesScale.createElement('40');
    this[60] = ValuesScale.createElement('60');
    this[80] = ValuesScale.createElement('80');
  }

  private static createElement(classModifier: string): HTMLSpanElement {
    const element: HTMLSpanElement = document.createElement('span');

    element.classList.add('cs-slider__value', `cs-slider__value_${classModifier}`);

    return element;
  }

  public refreshValueScale(values: DataForValueScale): void {
    ({
      min: this.minValue.innerText,
      max: this.maxValue.innerText,
      20: this[20].innerText,
      40: this[40].innerText,
      60: this[60].innerText,
      80: this[80].innerText,
    } = values);
  }

  public centersValues(sliderWidth: number, handelWidth: number): void {
    const calculateExtremeValuePosition = (element: HTMLSpanElement): string => `${
      0 - ((element.offsetWidth - handelWidth) / 2)
    }px`;
    const calculateValuePosition = (coefficient: number, element: HTMLSpanElement): string => `${
      sliderWidth * coefficient - ((element.offsetWidth - handelWidth) / 2)
    }px`;

    this.minValue.style.left = calculateExtremeValuePosition(this.minValue);
    this.maxValue.style.right = calculateExtremeValuePosition(this.maxValue);
    this[20].style.left = calculateValuePosition(0.2, this[20]);
    this[40].style.left = calculateValuePosition(0.4, this[40]);
    this[60].style.left = calculateValuePosition(0.6, this[60]);
    this[80].style.left = calculateValuePosition(0.8, this[80]);
  }

  private checkIsNeedToMakeHorizontally(isVertical: boolean): boolean {
    return (this.minValue.classList.contains('cs-slider__value_vertical'))
      && (this.maxValue.classList.contains('cs-slider__value_vertical'))
      && (this[20].classList.contains('cs-slider__value_vertical'))
      && (this[40].classList.contains('cs-slider__value_vertical'))
      && (this[60].classList.contains('cs-slider__value_vertical'))
      && (this[80].classList.contains('cs-slider__value_vertical'))
      && (!isVertical);
  }

  private checkIsNeedToMakeVertical(isVertical: boolean): boolean {
    return (!this.minValue.classList.contains('cs-slider__value_vertical'))
      && (!this.maxValue.classList.contains('cs-slider__value_vertical'))
      && (!this[20].classList.contains('cs-slider__value_vertical'))
      && (!this[40].classList.contains('cs-slider__value_vertical'))
      && (!this[60].classList.contains('cs-slider__value_vertical'))
      && (!this[80].classList.contains('cs-slider__value_vertical'))
      && (isVertical);
  }

  public changePlane(isVertical: boolean): void {
    const changeClasses = (): void => {
      this.minValue.classList.toggle('cs-slider__value_vertical');
      this.maxValue.classList.toggle('cs-slider__value_vertical');
      this[20].classList.toggle('cs-slider__value_vertical');
      this[40].classList.toggle('cs-slider__value_vertical');
      this[60].classList.toggle('cs-slider__value_vertical');
      this[80].classList.toggle('cs-slider__value_vertical');
    };

    const isNeedToChangeClasses = this.checkIsNeedToMakeVertical(isVertical)
      || this.checkIsNeedToMakeHorizontally(isVertical);

    if (isNeedToChangeClasses) changeClasses();
  }

  public hideValueScale(isValueScale: boolean): void {
    const changeDisplay = (value: string): void => {
      this.minValue.style.display = value;
      this.maxValue.style.display = value;
      this[20].style.display = value;
      this[40].style.display = value;
      this[60].style.display = value;
      this[80].style.display = value;
    };

    if (!isValueScale) {
      changeDisplay('none');
    } else {
      changeDisplay('inline-block');
    }
  }
}
