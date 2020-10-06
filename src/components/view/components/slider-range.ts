export class SliderRange {

  range: HTMLDivElement;
  
  constructor () {
    let elem: HTMLDivElement = document.createElement('div');
    elem.classList.add('sliderRange');
    this.range = elem;
  };

  getElements(): HTMLDivElement{
    return this.range;
  };

};