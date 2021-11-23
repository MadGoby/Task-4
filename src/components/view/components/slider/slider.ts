import { SliderAssemblerSettings } from './types';

export class Slider {
  readonly slider: HTMLDivElement;

  readonly sliderWrapper: HTMLDivElement;

  constructor() {
    this.slider = document.createElement('div');
    this.sliderWrapper = document.createElement('div');
    this.slider.classList.add('cs-slider');
    this.sliderWrapper.classList.add('cs-slider-wrapper');
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

  private isNeedToMakeHorizontally(isVertical: boolean): boolean {
    return ((this.slider.classList.contains('cs-slider_vertical')) && (!isVertical));
  }

  private isNeedToMakeVertical(isVertical: boolean): boolean {
    return ((!this.slider.classList.contains('cs-slider_vertical')) && (isVertical));
  }

  public changePlane(isVertical: boolean): void {
    if (this.isNeedToMakeVertical(isVertical)) {
      this.slider.classList.toggle('cs-slider_vertical');
      this.slider.style.top = this.slider.offsetWidth / 2 + 'px';
      this.sliderWrapper.style.height = this.slider.offsetWidth + 'px';
    } else if (this.isNeedToMakeHorizontally(isVertical)) {
      this.slider.classList.toggle('cs-slider_vertical');
      this.slider.style.top = '';
      this.sliderWrapper.style.height = '';
    }
  }
}
