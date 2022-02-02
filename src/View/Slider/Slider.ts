import { SliderAssemblerSettings, SliderPlaneSettings } from './types';

export class Slider {
  readonly slider: HTMLDivElement;

  readonly sliderWrapper: HTMLDivElement;

  constructor() {
    this.slider = document.createElement('div');
    this.slider.classList.add('goby-slider');
    this.sliderWrapper = document.createElement('div');
    this.sliderWrapper.classList.add('goby-slider-wrapper');
    this.sliderWrapper.append(this.slider);
  }

  public collectSlider(settings: SliderAssemblerSettings): void {
    this.slider.append(
      settings.from,
      settings.to,
      settings.interval,
      settings.valueScale.minValue,
      settings.valueScale.maxValue,
      settings.valueScale[20],
      settings.valueScale[40],
      settings.valueScale[60],
      settings.valueScale[80],
    );
  }

  private checkIsNeedToMakeHorizontally(isVertical: boolean): boolean {
    return ((this.slider.classList.contains('goby-slider_state_vertical')) && (!isVertical));
  }

  private checkIsNeedToMakeVertical(isVertical: boolean): boolean {
    return ((!this.slider.classList.contains('goby-slider_state_vertical')) && (isVertical));
  }

  public changePlane(settings: SliderPlaneSettings): void {
    const { isStep, isVertical, requests } = settings;

    function refreshAfterResize(): void {
      requests.needDataForScale = { name: '', value: 'true' };
      requests.needDataForStartPosition = { name: '', value: 'true' };
      if (isStep) requests.needStepWidth = { name: '', value: 'true' };
    }

    switch (true) {
      case this.checkIsNeedToMakeVertical(isVertical):
        this.slider.classList.toggle('goby-slider_state_vertical');
        this.slider.style.top = `${this.slider.offsetWidth / 2}px`;
        this.sliderWrapper.style.height = `${this.slider.offsetWidth}px`;
        break;
      case this.checkIsNeedToMakeHorizontally(isVertical):
        this.slider.classList.toggle('goby-slider_state_vertical');
        this.slider.style.top = '';
        this.sliderWrapper.style.height = '';
        break;
      default:
        break;
    }

    refreshAfterResize();
  }
}
