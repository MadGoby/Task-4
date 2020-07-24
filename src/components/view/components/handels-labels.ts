export class HandelsLabels {
  minLabel: HTMLLabelElement;
  maxLabel: HTMLLabelElement;
  labelInput: HTMLInputElement;

  constructor(toggle: HTMLInputElement) {
    if (toggle !== undefined) {
      this.labelInput = toggle;
    }
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

  displayController() {
    
    if (this.labelInput.checked === true) {
      console.log(this.minLabel)
      this.minLabel.style.display = 'block';
      this.maxLabel.style.display = 'block';
    } else {
      this.minLabel.style.display = 'none';
      this.maxLabel.style.display = 'none'; 
      console.log(this.minLabel)
    }
  }
}