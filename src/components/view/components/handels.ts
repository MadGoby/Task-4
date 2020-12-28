export class Handels {

  readonly minHandel: HTMLSpanElement;
  readonly maxHandel: HTMLSpanElement;

  constructor() {
    let min: HTMLSpanElement = document.createElement('span');
    let max: HTMLSpanElement = document.createElement('span');
    min.classList.add('minSliderHandel');
    max.classList.add('maxSliderHandel');
    this.minHandel = min;
    this.maxHandel = max;
  };

  getElements(): object {
    return {min: this.minHandel, max: this.maxHandel};
  };

  displayController(toggle: HTMLInputElement, max: HTMLSpanElement) {
    if (toggle.checked === true) {
      max.style.display = 'block';
    } else {
      max.style.display = 'none';
    };
  };

};