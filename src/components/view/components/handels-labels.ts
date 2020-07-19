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
}