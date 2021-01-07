import {GetValuesForValueScale} from '../../model/facade';

export class ValueScale {
  readonly valueScale15: HTMLLabelElement;
  readonly valueScale30: HTMLLabelElement;
  readonly valueScale50: HTMLLabelElement;
  readonly valueScale70: HTMLLabelElement;
  readonly valueScale85: HTMLLabelElement;

  constructor() {
    let value15: HTMLLabelElement = document.createElement('label');
    let value30: HTMLLabelElement = document.createElement('label');
    let value50: HTMLLabelElement = document.createElement('label');
    let value70: HTMLLabelElement = document.createElement('label');
    let value85: HTMLLabelElement = document.createElement('label');
    value15.classList.add('customSlider__valueScalelabel', 'customSlider__valueScalelabel_15');
    value30.classList.add('customSlider__valueScalelabel', 'customSlider__valueScalelabel_30');
    value50.classList.add('customSlider__valueScalelabel', 'customSlider__valueScalelabel_50');
    value70.classList.add('customSlider__valueScalelabel', 'customSlider__valueScalelabel_70');
    value85.classList.add('customSlider__valueScalelabel', 'customSlider__valueScalelabel_85');
    this.valueScale15 = value15;
    this.valueScale30 = value30;
    this.valueScale50 = value50;
    this.valueScale70 = value70;
    this.valueScale85 = value85;
  };

  refreshValues(values: GetValuesForValueScale): void {
    this.valueScale15.innerText = values['15'];
    this.valueScale30.innerText = values['30'];
    this.valueScale50.innerText = values['50'];
    this.valueScale70.innerText = values['70'];
    this.valueScale85.innerText = values['85'];
  };

  centersValuesPositions(slider: HTMLDivElement, handel:HTMLSpanElement): void {
    this.valueScale15.style.right = ((slider.offsetWidth - handel.offsetWidth) * 0.85) - (this.valueScale15.offsetWidth / 2) + (handel.offsetWidth / 2) + 'px';
    this.valueScale85.style.left = ((slider.offsetWidth - handel.offsetWidth) * 0.85) - (this.valueScale85.offsetWidth / 2) + (handel.offsetWidth / 2) + 'px';
    this.valueScale30.style.right = ((slider.offsetWidth - handel.offsetWidth) * 0.70) - (this.valueScale30.offsetWidth / 2) + (handel.offsetWidth / 2) + 'px';
    this.valueScale70.style.left = ((slider.offsetWidth - handel.offsetWidth) * 0.70) - (this.valueScale70.offsetWidth / 2) + (handel.offsetWidth / 2) + 'px';
    this.valueScale50.style.left = ((slider.offsetWidth - handel.offsetWidth) * 0.50) - (this.valueScale50.offsetWidth / 2) + (handel.offsetWidth / 2) + 'px';
  };

  displayController(toggle: HTMLInputElement): void {
    if (toggle.checked === true) {
      this.valueScale15.style.display = 'inline';
      this.valueScale30.style.display = 'inline';
      this.valueScale50.style.display = 'inline';
      this.valueScale70.style.display = 'inline';
      this.valueScale85.style.display = 'inline';
    } else {
      this.valueScale15.style.display = 'none';
      this.valueScale30.style.display = 'none';
      this.valueScale50.style.display = 'none';
      this.valueScale70.style.display = 'none';
      this.valueScale85.style.display = 'none';
    };
  };

  repositionsAfterChangePlane(planeToggle: boolean): void {
    if(planeToggle === true) {
      this.valueScale15.classList.add('customSlider__valueScalelabel_15Vertical');
      this.valueScale30.classList.add('customSlider__valueScalelabel_30Vertical');
      this.valueScale50.classList.add('customSlider__valueScalelabel_50Vertical');
      this.valueScale70.classList.add('customSlider__valueScalelabel_70Vertical');
      this.valueScale85.classList.add('customSlider__valueScalelabel_85Vertical');
    } else {
      this.valueScale15.classList.remove('customSlider__valueScalelabel_15Vertical');
      this.valueScale30.classList.remove('customSlider__valueScalelabel_30Vertical');
      this.valueScale50.classList.remove('customSlider__valueScalelabel_50Vertical');
      this.valueScale70.classList.remove('customSlider__valueScalelabel_70Vertical');
      this.valueScale85.classList.remove('customSlider__valueScalelabel_85Vertical');
    };
  };
};