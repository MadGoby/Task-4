import {SliderRange} from './components/slider-range.ts';
import {Handels} from './components/handels.ts';

interface Settings {
  [key: string]: string | boolean
}

export class View {
  private that: HTMLDivElement;
  private settings: Settings;
  private sliderRange: HTMLDivElement;
  private minHandel: HTMLSpanElement;
  private maxHandel: HTMLSpanElement;
  
  private constructor(target: HTMLDivElement, settings: Settings) {
    this.sliderRange = new SliderRange().getElement();
    this.minHandel = new Handels().getElements().min;
    this.maxHandel = new Handels().getElements().max;

    this.settings = settings;
    this.that = target;
  }

  displayElements(): void {
    let container: HTMLDivElement = document.createElement('div');
    container.classList.add('sliderBody');
    container.append(this.sliderRange);
    this.that.append(container);
    this.sliderRange.append(this.minHandel);
    this.sliderRange.append(this.maxHandel);
    
    if (this.settings["range"] === true || 'true') {
      this.maxHandel.style.display = 'block'
    };
  } 
}
