export class ValueRange {
  minValue: HTMLParagraphElement;
  maxValue: HTMLParagraphElement;

  constructor (values: {[key: string]: string}) {
    let min:HTMLParagraphElement = document.createElement('p');
    let max:HTMLParagraphElement = document.createElement('p');
    min.innerText = values.min;
    max.innerText = values.max;
    min.classList.add('minSliderPoint');
    max.classList.add('maxSliderPoint');
    this.minValue = min;
    this.maxValue = max;
  }

  getElements(): object {
    return {min: this.minValue, max: this.maxValue}
  }
}