export class HandelsLabels {
  minLabel: HTMLLabelElement;
  maxLabel: HTMLLabelElement;

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

  centeringRelativeToHandles(minHandelWidth: number, maxHandelWidth: number, minLabelWidth: number, maxLabelWidth: number, minLabel: HTMLLabelElement, maxLabel: HTMLLabelElement): void {
    minLabel.style.left = (minHandelWidth - minLabelWidth) / 2 + 'px';
    maxLabel.style.left = (maxHandelWidth - maxLabelWidth) / 2 + 'px';
  }
}