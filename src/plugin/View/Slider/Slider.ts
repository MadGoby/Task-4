import { SliderAssemblerSettings } from './types';

export class Slider {
  public readonly slider: HTMLDivElement;

  public readonly sliderWrapper: HTMLDivElement;

  public readonly mainWrapper: HTMLDivElement;

  constructor() {
    this.mainWrapper = document.createElement('div');
    this.slider = document.createElement('div');
    this.sliderWrapper = document.createElement('div');

    this.createHTMLElements();
  }

  public initializeSliderElements(settings: SliderAssemblerSettings): void {
    this.slider.append(
      settings.from,
      settings.to,
      settings.interval,
      settings.valueScale.minValue,
      settings.valueScale.maxValue,
      settings.valueScale.twentyPercentValue,
      settings.valueScale.fortyPercentValue,
      settings.valueScale.sixtyPercentValue,
      settings.valueScale.eightyPercentValue,
    );
  }

  public changePlane(isVertical: boolean): void {
    switch (true) {
      case this.checkIsNeedToDisplayVertical(isVertical):
        this.slider.classList.toggle('goby-slider__body_state_vertical');
        this.sliderWrapper.classList.toggle('goby-slider__slider_state_vertical');
        break;
      case this.checkIsNeedToDisplayHorizontally(isVertical):
        this.slider.classList.toggle('goby-slider__body_state_vertical');
        this.sliderWrapper.classList.toggle('goby-slider__slider_state_vertical');
        break;
      default:
        break;
    }
  }

  private createHTMLElements(): void {
    this.slider.classList.add('goby-slider__body');
    this.sliderWrapper.classList.add('goby-slider__slider');
    this.mainWrapper.classList.add('goby-slider');
    this.sliderWrapper.append(this.slider);
    this.mainWrapper.append(this.sliderWrapper);
  }

  private checkIsNeedToDisplayHorizontally(isVertical: boolean): boolean {
    return ((this.slider.classList.contains('goby-slider__body_state_vertical')) && (!isVertical));
  }

  private checkIsNeedToDisplayVertical(isVertical: boolean): boolean {
    return ((!this.slider.classList.contains('goby-slider__body_state_vertical')) && (isVertical));
  }
}
