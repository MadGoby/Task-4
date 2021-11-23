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
    this.minValue = ValuesScale.createElement(['cs-slider__value', 'cs-slider__value_min']);
    this.maxValue = ValuesScale.createElement(['cs-slider__value', 'cs-slider__value_max']);
    this[20] = ValuesScale.createElement(['cs-slider__value', 'cs-slider__value_20']);
    this[40] = ValuesScale.createElement(['cs-slider__value', 'cs-slider__value_40']);
    this[60] = ValuesScale.createElement(['cs-slider__value', 'cs-slider__value_60']);
    this[80] = ValuesScale.createElement(['cs-slider__value', 'cs-slider__value_80']);
  }

  private static createElement(cssClasses: Array<string>): HTMLSpanElement {
    let element: HTMLSpanElement = document.createElement('span');

    cssClasses.forEach((cssClass: string) => {
      element.classList.add(cssClass);
    });

    return element;
  }

  public refreshValueScale(values: DataForValueScale): void {
    this.minValue.innerText = values.min;
    this.maxValue.innerText = values.max;
    this[20].innerText = values[20];
    this[40].innerText = values[40];
    this[60].innerText = values[60];
    this[80].innerText = values[80];
  }

  public centersValues(sliderWidth: number, handelWidth: number): void {
    this.minValue.style.left = String(0 - ((this.minValue.offsetWidth - handelWidth) / 2)) + 'px';
    this.maxValue.style.right = String(0 - ((this.maxValue.offsetWidth - handelWidth) / 2)) + 'px';
    this[20].style.left = String(sliderWidth * 0.2 - ((this[20].offsetWidth - handelWidth) / 2)) + 'px';
    this[40].style.left = String(sliderWidth * 0.4 - ((this[40].offsetWidth - handelWidth) / 2)) + 'px';
    this[60].style.left = String(sliderWidth * 0.6 - ((this[60].offsetWidth - handelWidth) / 2)) + 'px';
    this[80].style.left = String(sliderWidth * 0.8 - ((this[80].offsetWidth - handelWidth) / 2)) + 'px';
  }

  private isNeedToMakeHorizontally(isVertical: boolean): boolean {
    return (this.minValue.classList.contains('cs-slider__value_vertical'))
      && (this.maxValue.classList.contains('cs-slider__value_vertical'))
      && (this[20].classList.contains('cs-slider__value_vertical'))
      && (this[40].classList.contains('cs-slider__value_vertical'))
      && (this[60].classList.contains('cs-slider__value_vertical'))
      && (this[80].classList.contains('cs-slider__value_vertical'))
      && (!isVertical);
  }

  private isNeedToMakeVertical(isVertical: boolean): boolean {
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

    const isNeedToChangeClasses = this.isNeedToMakeVertical(isVertical) || this.isNeedToMakeHorizontally(isVertical);

    if (isNeedToChangeClasses) changeClasses();
  }

  public hideValueScale(isValueScale: boolean): void {
    if (!isValueScale) {
      this.minValue.style.display = 'none';
      this.maxValue.style.display = 'none';
      this[20].style.display = 'none';
      this[40].style.display = 'none';
      this[60].style.display = 'none';
      this[80].style.display = 'none';
    } else {
      this.minValue.style.display = 'inline-block';
      this.maxValue.style.display = 'inline-block';
      this[20].style.display = 'inline-block';
      this[40].style.display = 'inline-block';
      this[60].style.display = 'inline-block';
      this[80].style.display = 'inline-block';
    }
  }
}
