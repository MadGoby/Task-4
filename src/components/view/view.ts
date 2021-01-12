import {SliderRange} from './components/slider-range';
import {Handels} from './components/handels';
import {SliderMovement} from './components/slider-movement';
import {SideMenu} from './components/side-menu';
import {ValueRange} from './components/valueRange';
import {HandelsLabels} from './components/handels-labels';
import {SelectedRange} from './components/selected-range';
import {Settings} from '../../jquery.ui.customSlider';
import {ValueScale} from './components/value-scale';

interface PossibleRange {
  min: string;
  max: string;
};

export interface DataOfValueRefresh {
  'min'?: string;
  'max'?: string;
};

interface DataRequestStatus {
  "getStartHandelsPosition": boolean;
  "getMaxData": boolean;
  "getMinPositionsAmount": boolean;
  "getMaxPositionsAmount": boolean;
  "getPossibleRange": boolean;
  "getStepPositionsAmount": boolean;
  "getValuesForValueScale": boolean;
  "getMinStep": boolean;
  "checksNewStepForValidity": string;
  "selectHandleForValueScale": string;
};

export class View {
  private that: HTMLDivElement;
  readonly settings: Settings;
  readonly sliderRange: HTMLDivElement;
  private sliderContainer: HTMLDivElement;
  readonly minHandel: HTMLSpanElement;
  readonly maxHandel: HTMLSpanElement;
  readonly sliderMovement: SliderMovement;
  private sideMenuContainer: String | Boolean;
  private minValue: HTMLParagraphElement;
  private maxValue: HTMLParagraphElement;
  readonly minLabel: HTMLLabelElement;
  readonly maxLabel: HTMLLabelElement;
  readonly interval: HTMLDivElement;
  readonly valueScale: ValueScale;
  readonly sideMenu: HTMLDivElement | undefined;
  readonly handelToggle: HTMLInputElement | undefined;
  private handelLabelToggle: HTMLInputElement| undefined;
  private planeToggle: HTMLInputElement| undefined;
  private valueScaleToggle: HTMLInputElement | undefined;
  readonly minInput: HTMLInputElement| undefined;
  readonly maxInput: HTMLInputElement| undefined;
  readonly stepInput:HTMLInputElement | undefined;
  readonly minSliderValueOutput: HTMLOutputElement | undefined;
  readonly maxSliderValueOutput: HTMLOutputElement | undefined;
  
  constructor(target: HTMLDivElement, settings: Settings) {
    this.settings = settings;
    this.that = target;
    this.sliderRange = new SliderRange().getElements();

    let handels: Handels = new Handels();
    this.minHandel = handels.minHandel;
    this.maxHandel = handels.maxHandel;

    let valueRange: ValueRange = new ValueRange({'min': this.settings['min'], 'max': this.settings['max']});
    this.minValue = valueRange.minValue;
    this.maxValue = valueRange.maxValue;

    if (settings['side-menu'] === true) {
      let sideMenu = new SideMenu();
      this.sideMenu = sideMenu.customSliderMenuContainer;
      this.handelToggle = sideMenu.handelToggle;
      this.handelLabelToggle = sideMenu.handelLabelToggle;
      this.planeToggle = sideMenu.planeToggle;
      this.minInput = sideMenu.minInput;
      this.maxInput = sideMenu.maxInput;
      this.stepInput = sideMenu.stepInput;
      this.minSliderValueOutput = sideMenu.minSliderValueOutput;
      this.maxSliderValueOutput = sideMenu.maxSliderValueOutput;
      this.valueScaleToggle = sideMenu.valueScaleToggle;
    };
    this.sideMenuContainer = settings.sideMenuContainer;

    let handelsLabels: HandelsLabels = new HandelsLabels();
    this.minLabel = handelsLabels.minLabel;
    this.maxLabel = handelsLabels.maxLabel;

    this.interval = new SelectedRange().getElements();
    
    if(this.settings['side-menu'] === true) {
      this.sliderMovement = new SliderMovement({'min': this.minHandel, 'max': this.maxHandel,'minLabel': this.minLabel, 'maxLabel': this.maxLabel ,'sliderRange': this.sliderRange, 'planeToggle': this.planeToggle ? this.planeToggle : this.settings.vertical, 'handelsToggle': this.handelToggle ? this.handelToggle : this.settings.range, 'interval': this.interval, 'step': this.settings.step});
    } else {
      this.sliderMovement = new SliderMovement({'min': this.minHandel, 'max': this.maxHandel,'minLabel': this.minLabel, 'maxLabel': this.maxLabel ,'sliderRange': this.sliderRange, 'planeToggle': this.settings.vertical, 'handelsToggle': this.settings.range, 'interval': this.interval, 'step': this.settings.step});
    };

    this.valueScale = new ValueScale();
    this.sliderContainer = document.createElement('div');
  };

  dataRequestStatus: DataRequestStatus = {
    "getStartHandelsPosition": false,
    "getMaxData": false,
    "getMinPositionsAmount": false,
    "getMaxPositionsAmount": false,
    "getPossibleRange": false,
    "getStepPositionsAmount": false,
    "getValuesForValueScale": false,
    "getMinStep": false,
    "checksNewStepForValidity": '',
    "selectHandleForValueScale": ''
  };

  displayElements(): void {
    
    this.sliderContainer.classList.add('sliderBody');
    this.sliderContainer.append(this.sliderRange);
    this.that.append(this.sliderContainer);
    this.sliderRange.append(this.minHandel);
    this.sliderRange.append(this.maxHandel);
    this.sliderRange.append(this.minValue);
    this.sliderRange.append(this.maxValue);
    this.sliderRange.append(this.valueScale.valueScale15, this.valueScale.valueScale30, this.valueScale.valueScale50, this.valueScale.valueScale70, this.valueScale.valueScale85);
    this.dataRequestStatus["getValuesForValueScale"] = true;
    this.interval.style.height = this.sliderRange.offsetHeight + 'px';
    this.sliderRange.append(this.interval);
    this.minHandel.append(this.minLabel);
    this.maxHandel.append(this.maxLabel);
    
    if (this.settings['handelsLabel'] === false) {
      this.minLabel.style.display = 'none';
      this.maxLabel.style.display = 'none';
    } else {
      if(this.settings['side-menu'] === true && this.handelLabelToggle) {
        this.handelLabelToggle.checked = true;
      };
    };

    if(this.settings['side-menu'] === true && this.sideMenu) {
      this.dataRequestStatus["getPossibleRange"] = true;
      if (this.sideMenuContainer !== 'false' && typeof this.sideMenuContainer === 'string') {
        document.querySelectorAll(this.sideMenuContainer)[0].append(this.sideMenu);
      } else {
        this.that.append(this.sideMenu)
      };
    };
    
    if (this.settings["range"] === true) {
      this.maxHandel.style.display = 'block';
      this.interval.style.display = 'block';
      if(this.settings['side-menu'] === true) {
        this.handelToggle ? this.handelToggle.checked = true : false;
        this.maxInput ? this.maxInput.style.opacity = '1' : false;
      };
    };
    

    if (this.settings['vertical'] === true) {
      if(this.settings['side-menu'] === true && this.planeToggle) {
        this.planeToggle ? this.planeToggle.checked = true : false;
        this.sliderMovement.changePlane(this.planeToggle, this.sliderContainer, this.minValue, this.maxValue);
        this.valueScale.repositionsAfterChangePlane(this.planeToggle.checked);
      } else {
        this.sliderMovement.changePlane(true, this.sliderContainer, this.minValue, this.maxValue);
        this.valueScale.repositionsAfterChangePlane(true);
      };
    };
    
    if (this.settings.step === true && this.settings['side-menu'] === true) {
      this.maxInput ? this.maxInput.setAttribute('step', this.settings.step + "") : false;
      this.minInput ? this.minInput.setAttribute('step', this.settings.step + "") : false;
    };
    
    if (this.settings.step) {
      this.dataRequestStatus["getStepPositionsAmount"] = true;
    }
    
    if (this.settings.valueScale === true && this.valueScaleToggle) {
      this.valueScaleToggle.checked = true;
    } else {
      this.valueScaleToggle ? this.valueScale.displayController(this.valueScaleToggle) : false;
    };

    if (this.stepInput && typeof this.settings.step === 'string') {
      this.dataRequestStatus["checksNewStepForValidity"] = this.settings.step;
    } else if (this.settings.step === false) {
      this.dataRequestStatus["getMinStep"] = true;
    };
    
    this.dataRequestStatus["getStartHandelsPosition"] = true;
  };

  bindEventListeners(): void {
    if (this.settings['side-menu'] === true && this.handelLabelToggle) {
      this.handelLabelToggle.addEventListener('change', this.makeBindLabelToggle.bind(this));
    };
    if (this.settings['side-menu'] === true && this.handelToggle) {
      this.handelToggle.addEventListener('change', this.makeBindHandelToggle.bind(this));
    };
    if (this.settings['side-menu'] === true && this.planeToggle) {
      this.planeToggle.addEventListener('change', this.makeBindForPlaneToggle.bind(this));
    };
    this.minValue.addEventListener('click', this.makeBindForSelectionMinValue.bind(this));
    this.maxValue.addEventListener('click', this.makeBindForSelectionMaxValue.bind(this));
    if (this.settings['side-menu'] === true && this.minInput) {
      this.minInput.addEventListener('change', this.makeBindForMinInput.bind(this));
    };
    if (this.settings['side-menu'] === true && this.maxInput) {
      this.maxInput.addEventListener('change', this.makeBindForMaxInput.bind(this));
    };

    if (this.settings['side-menu'] === true && this.valueScaleToggle) {
      this.valueScaleToggle.addEventListener('change', this.makeBindForValueScaleToggle.bind(this));
    };

    if(this.settings['side-menu'] === true && this.stepInput) {
      this.stepInput.addEventListener('change', this.makeBindStepInput.bind(this));
    };

    this.valueScale.valueScale15.addEventListener('click', this.makeBindForValueScale.bind(this, this.valueScale.valueScale15));
    this.valueScale.valueScale30.addEventListener('click', this.makeBindForValueScale.bind(this, this.valueScale.valueScale30));
    this.valueScale.valueScale50.addEventListener('click', this.makeBindForValueScale.bind(this, this.valueScale.valueScale50));
    this.valueScale.valueScale70.addEventListener('click', this.makeBindForValueScale.bind(this, this.valueScale.valueScale70));
    this.valueScale.valueScale85.addEventListener('click', this.makeBindForValueScale.bind(this, this.valueScale.valueScale85));
    
  };
  
  bindEventHandelsMovement():void {
    this.bindForMin();
    this.bindForMax();
  };

  refreshCurrentValues(newData: DataOfValueRefresh): void {

    function checkUndefinedStrings(value: string | undefined): null | string {
      return value === undefined ? null : value;
    };

    if ('min' in newData && 'max' in newData) {
      if(this.settings['side-menu'] === true && this.sideMenu) {
        this.minSliderValueOutput ? this.minSliderValueOutput.textContent = checkUndefinedStrings(newData.min) : false;
        this.minInput ? this.minInput.value = `${newData.min}` : false;
        if(this.handelToggle && this.handelToggle.checked === true ) {
          this.maxSliderValueOutput ? this.maxSliderValueOutput.textContent = ` - ${checkUndefinedStrings(newData.max)}` : false;
          this.maxInput ? this.maxInput.value = `${newData.max}` : false;
        };
      };
      
      this.minLabel.textContent = checkUndefinedStrings(newData.min);
      this.maxLabel.textContent = checkUndefinedStrings(newData.max);
      
    } else if ('min' in newData) {
      this.minLabel.textContent = checkUndefinedStrings(newData.min);
      if (this.settings['side-menu'] === true) {
        this.minSliderValueOutput ? this.minSliderValueOutput.textContent = checkUndefinedStrings(newData.min) : false;
        this.minInput ? this.minInput.value = `${newData.min}` : false;
      };
    } else {
      this.maxLabel.textContent = checkUndefinedStrings(newData.max);
      if (this.settings['side-menu'] === true) {
        this.maxSliderValueOutput ? this.maxSliderValueOutput.textContent = ` - ${checkUndefinedStrings(newData.max)}` : false;
        this.maxInput ? this.maxInput.value = `${newData.max}` : false;
      };
    };
    new HandelsLabels().centeringRelativeToHandles(this.minHandel.offsetWidth, this.maxHandel.offsetWidth, this.minLabel.offsetWidth, this.maxLabel.offsetWidth, this.minLabel, this.maxLabel);
  };

  callHandelLabelToggleChanger(): void {
    this.handelLabelToggle ? new HandelsLabels().displayController(this.handelLabelToggle, this.minLabel, this.maxLabel) : false;
    if (this.handelLabelToggle && this.handelLabelToggle.checked === true) {
      new HandelsLabels().centeringRelativeToHandles(this.minHandel.offsetWidth, this.maxHandel.offsetWidth, this.minLabel.offsetWidth, this.maxLabel.offsetWidth, this.minLabel, this.maxLabel)
    };
  };

  callMaxHandelToggleChanger(): void {
    if (this.handelToggle && this.handelToggle.checked === false) {
      this.sliderMovement.currentHandelsPositions['max'] = {'max': `${this.sliderRange.offsetWidth - this.minHandel.offsetWidth}`, 'sliderWidth': `${this.sliderRange.offsetWidth - this.minHandel.offsetWidth}`}
      this.maxHandel.style.left = `${this.sliderRange.offsetWidth - this.minHandel.offsetWidth}px`;
      this.maxSliderValueOutput ? this.maxSliderValueOutput.textContent = '' : false;
      this.maxInput ? this.maxInput.setAttribute('readonly', '') : false;
      this.maxInput ? this.maxInput.value = '' : false;
      this.maxInput ? this.maxInput.style.opacity = '0.3' : false;
      this.interval.style.display = 'none';
    };

    this.handelToggle ? new Handels().displayController(this.handelToggle, this.maxHandel) : false ;

    if (this.handelToggle && this.handelToggle.checked === true) {
      this.dataRequestStatus["getMaxData"] = true;
      this.maxInput ? this.maxInput.removeAttribute('readonly') : false;
      this.interval.style.display = 'block';
      this.interval.style.right = this.sliderRange.offsetWidth - (this.sliderRange.offsetWidth - this.minHandel.offsetWidth / 2 ) + 'px';
      if (+this.sliderMovement.currentHandelsPositions.min['min'] >= this.sliderRange.offsetWidth - this.maxHandel.offsetWidth - this.minHandel.offsetWidth) {
        this.sliderMovement.currentHandelsPositions['min'] = {'min': `${this.sliderRange.offsetWidth - this.maxHandel.offsetWidth - this.minHandel.offsetWidth}`, 'sliderWidth': `${this.sliderRange.offsetWidth - this.maxHandel.offsetWidth}`}
        this.minHandel.style.left = `${this.sliderRange.offsetWidth - this.maxHandel.offsetWidth - this.minHandel.offsetWidth}px`;
      };
    };
  };

  refreshMaxSideMenuData(data: number): void {
    this.maxSliderValueOutput ? this.maxSliderValueOutput.textContent = ` - ${data}` : false;
    if (this.maxInput) {
      this.maxInput.style.opacity = '1';
      this.maxInput.value = `${data}`;
    };
  };

  inputsPossibleRange( data: PossibleRange, min: HTMLInputElement, max: HTMLInputElement): void {
    min.setAttribute('max', data.max);
    min.setAttribute('min', data.min);
    max.setAttribute('max', data.max);
  };

  bindForMin(): void {
    let that = this; 
    that.minHandel.onmousedown = function( event ): void {
      that.sliderMovement.minHandelListener( event, undefined);
    };
  };

  bindForMax(): void {
    let that = this; 
    that.maxHandel.onmousedown = function(event): void {
      that.sliderMovement.maxHandelListener( event, undefined);
    };
  };

  makeBindLabelToggle(): void {
    this.callHandelLabelToggleChanger();
  };

  makeBindHandelToggle(): void {
    this.callMaxHandelToggleChanger();
  };

  makeBindStepInput(): void {
    this.stepInput ? this.dataRequestStatus['checksNewStepForValidity'] = this.stepInput.value : false;
  };
  
  makeBindForValueScaleToggle(): void {
    this.valueScaleToggle ? this.valueScale.displayController(this.valueScaleToggle) : false;
  };

  makeBindForPlaneToggle(): void {
    this.planeToggle ? this.sliderMovement.changePlane(this.planeToggle, this.sliderContainer, this.minValue, this.maxValue) : false;
    this.planeToggle ? this.valueScale.repositionsAfterChangePlane(this.planeToggle.checked) : false;
  };

  makeBindForSelectionMinValue (): void {
    this.sliderMovement.selectionOfPreparedValue('min');
  };

  makeBindForValueScale(element: HTMLLabelElement): void {
    if (element.textContent) {
      let val: string = element.textContent;
      this.dataRequestStatus['selectHandleForValueScale'] = val;
    };
  };

  makeBindForSelectionMaxValue(): void {
    this.sliderMovement.selectionOfPreparedValue('max');
  };

  makeBindForMinInput(): void {
    this.dataRequestStatus["getMinPositionsAmount"] = true;
  };

  makeBindForMaxInput(): void {
    this.dataRequestStatus["getMaxPositionsAmount"] = true;
  };
};
