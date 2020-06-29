import {SliderRange} from './components/slider-range.ts';
import {Handels} from './components/handels.ts';


export class View {
  that: HTMLDivElement;
  sliderRange: HTMLDivElement;
  minHandel: HTMLSpanElement;
  maxHandel: HTMLSpanElement;
  constructor(target: HTMLDivElement) {
    this.sliderRange = new SliderRange().getElement();
    this.minHandel = new Handels().getElements().min;
    this.maxHandel = new Handels().getElements().max;

    this.that = target;
  }
  displayElements(): void {
    let container: HTMLDivElement = document.createElement('div');
    container.classList.add('sliderBody');
    container.append(this.sliderRange);

    this.that.append(container);
    this.sliderRange.append(this.minHandel);
    this.sliderRange.append(this.maxHandel);
  }
}