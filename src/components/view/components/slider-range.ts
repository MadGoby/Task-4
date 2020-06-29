export class SliderRange {
  element: HTMLDivElement;
  constructor () {
    let elem: HTMLDivElement = document.createElement('div');
    elem.classList.add('sliderRange');
    this.element = elem;
  }
  getElement(): HTMLDivElement{
    return this.element;
  }
}