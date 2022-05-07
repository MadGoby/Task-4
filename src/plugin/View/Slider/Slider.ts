import { SliderAssemblerSettings, SliderPlaneSettings } from './types';

export class Slider {
  readonly slider: HTMLDivElement;

  readonly sliderWrapper: HTMLDivElement;

  readonly mainWrapper: HTMLDivElement;

  constructor() {
    this.mainWrapper = document.createElement('div');
    this.slider = document.createElement('div');
    this.sliderWrapper = document.createElement('div');

    this.createHTMLElements();
  }

  private createHTMLElements(): void {
    this.slider.classList.add('goby-slider__body');
    this.sliderWrapper.classList.add('goby-slider__slider');
    this.mainWrapper.classList.add('goby-slider');
    this.sliderWrapper.append(this.slider);
    this.mainWrapper.append(this.sliderWrapper);
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

  private checkIsNeedToDisplayHorizontally(isVertical: boolean): boolean {
    return ((this.slider.classList.contains('goby-slider__body_state_vertical')) && (!isVertical));
  }

  private checkIsNeedToDisplayVertical(isVertical: boolean): boolean {
    return ((!this.slider.classList.contains('goby-slider__body_state_vertical')) && (isVertical));
  }

  public changePlane(settings: SliderPlaneSettings): void {
    const { isVertical } = settings;

    switch (true) {
      case this.checkIsNeedToDisplayVertical(isVertical):
        this.slider.classList.toggle('goby-slider__body_state_vertical');
        this.slider.style.top = `${this.slider.offsetWidth / 2}px`;
        this.sliderWrapper.style.height = `${this.slider.offsetWidth}px`;
        break;
      case this.checkIsNeedToDisplayHorizontally(isVertical):
        this.slider.classList.toggle('goby-slider__body_state_vertical');
        this.slider.style.top = '';
        this.sliderWrapper.style.height = '';
        break;
      default:
        break;
    }
  }
}
