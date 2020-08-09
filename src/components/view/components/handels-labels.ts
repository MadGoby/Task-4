export class HandelsLabels {
  minLabel: HTMLLabelElement;
  maxLabel: HTMLLabelElement;
  labelInput: HTMLInputElement;

  constructor() {
    let min:HTMLLabelElement = document.createElement('label');
    let max:HTMLLabelElement = document.createElement('label');
    min.classList.add('minSliderHandelLabel');
    max.classList.add('maxSliderHandelLabel');
    this.minLabel = min;
    this.maxLabel = max;
  };
  
  getElements(): object {
    return {'min': this.minLabel, 'max': this.maxLabel};
  };

  displayController(toggle: HTMLInputElement, min: HTMLLabelElement, max: HTMLLabelElement) {
    if (toggle.checked === true) {
      min.style.display = 'inline';
      max.style.display = 'inline';
    } else {
      min.style.display = 'none';
      max.style.display = 'none';
    }
  }

  centeringRelativeToHandles(minHandel: HTMLSpanElement, maxHandel: HTMLSpanElement, minLabel:HTMLLabelElement, maxLabel:HTMLLabelElement): void {
    minLabel.style.left = ((minHandel.offsetWidth - minLabel.offsetWidth) - 1) / 2 + 'px';
    maxLabel.style.left = ((maxHandel.offsetWidth - maxLabel.offsetWidth) - 1) / 2 + 'px';
  }
}