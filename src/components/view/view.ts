import {SliderRange} from './components/slider-range.ts';
import {Handels} from './components/handels.ts';
import {SliderMovement} from './components/slider-movement.ts';
import {SideMenu} from './components/side-menu.ts';
import {ValueRange} from './components/valueRange.ts';
import {HandelsLabels} from './components/handels-labels.ts';
import {SelectedRange} from './components/selected-range.ts';

interface Settings {
  [key: string]: string | boolean
};

interface SideMenuElements {
  [key: string]: HTMLDivElement | HTMLInputElement;
};

interface DataOfValueRefresh {
  'min'?: string;
  'max'?: string;
};

interface DataRequestStatus {
  [key: string]: boolean
};

export class View {
  private that: HTMLDivElement;
  private settings: Settings;
  private sliderRange: HTMLDivElement;
  private sliderContainer: HTMLDivElement;
  private minHandel: HTMLSpanElement;
  private maxHandel: HTMLSpanElement;
  private sliderMovement: Object;
  private sideMenu: HTMLDivElement;
  private sideMenuContainer: String | Boolean;
  private minValue: HTMLParagraphElement;
  private maxValue: HTMLParagraphElement;
  private minLabel: HTMLLabelElement;
  private maxLabel: HTMLLabelElement;
  private handelToggle: HTMLInputElement;
  private handelLabelToggle: HTMLInputElement;
  private planeToggle: HTMLInputElement;
  private minInput: HTMLInputElement;
  private maxInput: HTMLInputElement;
  private interval: HTMLDivElement;
  
  private constructor(target: HTMLDivElement, settings: Settings) {
    this.settings = settings;
    this.that = target;
    this.sliderRange = new SliderRange().getElements();
    this.minHandel = new Handels().getElements().min;
    this.maxHandel = new Handels().getElements().max;
    this.minValue = new ValueRange({'min': this.settings['min'], 'max': this.settings['max']}).getElements().min;
    this.maxValue = new ValueRange({'min': this.settings['min'], 'max': this.settings['max']}).getElements().max;
    if (settings['side-menu'] === true) {
      let sideMenuElements: SideMenuElements = new SideMenu().getElements();
      this.sideMenu = sideMenuElements.menu;
      this.handelToggle = sideMenuElements.handelToggle;
      this.handelLabelToggle = sideMenuElements.handelLabelToggle;
      this.planeToggle = sideMenuElements.planeToggle;
      this.minInput = sideMenuElements.minInput;
      this.maxInput = sideMenuElements.maxInput;
    };
    this.sideMenuContainer = settings.sideMenuContainer;
    this.minLabel = new HandelsLabels().getElements().min;
    this.maxLabel = new HandelsLabels().getElements().max;
    this.interval = new SelectedRange().getElements();
    if(this.settings['side-menu'] === true) {
      this.sliderMovement = new SliderMovement({'min': this.minHandel, 'max': this.maxHandel,'minLabel': this.minLabel, 'maxLabel': this.maxLabel ,'sliderRange': this.sliderRange, 'planeToggle': this.planeToggle, 'handelsToggle': this.handelToggle, 'interval': this.interval, 'step': this.settings.step});
    } else {
      this.sliderMovement = new SliderMovement({'min': this.minHandel, 'max': this.maxHandel,'minLabel': this.minLabel, 'maxLabel': this.maxLabel ,'sliderRange': this.sliderRange, 'planeToggle': this.settings.vertical, 'handelsToggle': this.settings.range, 'interval': this.interval, 'step': this.settings.step});
    };
  };

  dataRequestStatus: DataRequestStatus = {
    "getMaxData": false,
    "getMinPositionsAmount": false,
    "getMaxPositionsAmount": false,
    "getPossibleRange": false,
    "getStepPositionsAmount": false
  };

  displayElements(): void {
    let container: HTMLDivElement = document.createElement('div');
    this.sliderContainer = container;
    container.classList.add('sliderBody');
    container.append(this.sliderRange);
    this.that.append(container);
    this.sliderRange.append(this.minHandel);
    this.sliderRange.append(this.maxHandel);
    this.sliderRange.append(this.minValue);
    this.sliderRange.append(this.maxValue);
    this.interval.style.height = this.sliderRange.offsetHeight + 'px';
    this.sliderRange.append(this.interval);
    this.minHandel.append(this.minLabel);
    this.maxHandel.append(this.maxLabel);
    
    if (this.settings['handelsLabel'] === false) {
      this.minLabel.style.display = 'none';
      this.maxLabel.style.display = 'none';
    } else {
      if(this.settings['side-menu'] === true) {
        this.handelLabelToggle.checked = true;
      };
    };

    if(this.settings['side-menu'] === true) {
      this.dataRequestStatus["getPossibleRange"] = true;
      if (this.sideMenuContainer !== 'false') {
        document.querySelector(this.sideMenuContainer).append(this.sideMenu)
      } else {
        this.that.append(this.sideMenu)
      };
    };
    
    if (this.settings["range"] === true) {
      this.maxHandel.style.display = 'block';
      this.interval.style.display = 'block';
      if(this.settings['side-menu'] === true) {
        this.handelToggle.checked = true;
        this.maxInput.style.opacity = '1';
      };
    };

    if (this.settings['vertical'] === true) {
      if(this.settings['side-menu'] === true) {
        this.planeToggle.checked = true;
        this.sliderMovement.changePlane(this.planeToggle, this.sliderContainer, this.minValue, this.maxValue);
      } else {
        this.sliderMovement.changePlane(true, this.sliderContainer, this.minValue, this.maxValue);
      };
    };

    if (this.settings.step === true && this.settings['side-menu'] === true) {
      this.maxInput.setAttribute('step', this.settings.step + "");
      this.minInput.setAttribute('step', this.settings.step + "");
    };
    
    if(this.settings.step === true) {
      this.dataRequestStatus["getStepPositionsAmount"] = true;
    }

    this.dataRequestStatus["startHandelsPosition"] = true;
  };

  bindEventListeners(): void {
    let that = this;
    
    if (this.settings['side-menu'] === true) {
      this.handelLabelToggle.addEventListener('change', this.makeBindLabelToggle(that));
    };
    if (this.settings['side-menu'] === true) {
      this.handelToggle.addEventListener('change', this.makeBindHandelToggle(that));
    };
    if (this.settings['side-menu'] === true) {
      this.planeToggle.addEventListener('change', this.makeBindForPlaneToggle(that));
    };
    this.minValue.addEventListener('click', this.makeBindForSelectionMinValue(that));
    this.maxValue.addEventListener('click', this.makeBindForSelectionMaxValue(that));
    if (this.settings['side-menu'] === true) {
      this.minInput.addEventListener('change', this.makeBindForMinInput(that));
    };
    if (this.settings['side-menu'] === true) {
      this.maxInput.addEventListener('change', this.makeBindForMaxInput(that));
    };
  };
  
  bindEventHandelsMovement():void {
    this.bindForMin();
    this.bindForMax();
  };

  refreshCurrentValues(newData: DataOfValueRefresh): void {
    let sett: boolean | string = this.settings['range'];
    
    function refreshCurrentValuesMultiCheck(settings: boolean | string) {
      return 'min' in newData && 'max' in newData && settings === true;
    }

    if (refreshCurrentValuesMultiCheck(sett)) {
      if(this.settings['side-menu'] === true && this.handelToggle.checked === true) {
        this.sideMenu.querySelector('#minSliderValue').textContent = newData.min;
        this.sideMenu.querySelector('#maxSliderValue').textContent = ` - ${newData.max}`;
        this.sideMenu.querySelector('.customSliderMinInput').value = newData.min;
        this.sideMenu.querySelector('.customSliderMaxInput').value = newData.max;
      };
      this.minLabel.textContent = newData.min;
      this.maxLabel.textContent = newData.max;
    } else if ('min' in newData) {
      this.minLabel.textContent = newData.min;
      if (this.settings['side-menu'] === true) {
        this.sideMenu.querySelector('#minSliderValue').textContent = newData.min;;
        this.sideMenu.querySelector('.customSliderMinInput').value = newData.min;
      };
    } else {
      this.maxLabel.textContent = newData.max;
      if (this.settings['side-menu'] === true) {
        this.sideMenu.querySelector('#maxSliderValue').textContent = ` - ${newData.max}`;
        this.sideMenu.querySelector('.customSliderMaxInput').value = newData.max;
      };
    };
    new HandelsLabels().centeringRelativeToHandles(this.minHandel.offsetWidth, this.maxHandel.offsetWidth, this.minLabel.offsetWidth, this.maxLabel.offsetWidth, this.minLabel, this.maxLabel);
  };

  callHandelLabelToggleChanger(): void {
    new HandelsLabels().displayController(this.handelLabelToggle, this.minLabel, this.maxLabel);
    if (this.handelLabelToggle.checked === true) {
      new HandelsLabels().centeringRelativeToHandles(this.minHandel.offsetWidth, this.maxHandel.offsetWidth, this.minLabel.offsetWidth, this.maxLabel.offsetWidth, this.minLabel, this.maxLabel)
    };
  };

  callMaxHandelToggleChanger(): void {
    if (this.handelToggle.checked === false) {
      this.sliderMovement.currentHandelsPositions['max'] = {'max': `${this.sliderRange.offsetWidth - this.minHandel.offsetWidth}`, 'sliderWidth': `${this.sliderRange.offsetWidth - this.minHandel.offsetWidth}`}
      this.maxHandel.style.left = `${this.sliderRange.offsetWidth - this.minHandel.offsetWidth}px`;
      this.sideMenu.querySelector('#maxSliderValue').textContent = '';
      this.maxInput.setAttribute('readonly', '');
      this.maxInput.value = '';
      this.maxInput.style.opacity = '0.3';
      this.interval.style.display = 'none';
    };
    
    new Handels().displayController(this.handelToggle, this.maxHandel);

    if (this.handelToggle.checked === true) {
      this.dataRequestStatus["getMaxData"] = true;
      this.maxInput.removeAttribute('readonly');
      this.interval.style.display = 'block';
      this.interval.style.right = this.sliderRange.offsetWidth - (this.sliderRange.offsetWidth - this.minHandel.offsetWidth / 2 ) + 'px';
      if (this.sliderMovement.currentHandelsPositions.min['min'] >= this.sliderRange.offsetWidth - this.maxHandel.offsetWidth - this.minHandel.offsetWidth) {
        this.sliderMovement.currentHandelsPositions['min'] = {'min': `${this.sliderRange.offsetWidth - this.maxHandel.offsetWidth - this.minHandel.offsetWidth}`, 'sliderWidth': `${this.sliderRange.offsetWidth - this.maxHandel.offsetWidth}`}
        this.minHandel.style.left = `${this.sliderRange.offsetWidth - this.maxHandel.offsetWidth - this.minHandel.offsetWidth}px`;
      };
    };
  };

  refreshMaxSideMenuData(data: number): void {
    this.sideMenu.querySelector('#maxSliderValue').textContent = ` - ${data}`;
    this.maxInput.style.opacity = '1';
    this.maxInput.value = `${data}`;
  };

  inputsPossibleRange( data: object, min: HTMLInputElement, max: HTMLInputElement): void {
    min.setAttribute('max', data.max);
    min.setAttribute('min', data.min);
    max.setAttribute('max', data.max);
  };

  bindForMin(): void {
    let that = this; 
    that.minHandel.onmousedown = function( event ): void {
      that.sliderMovement.minHandelListener( event );
    };
  };

  bindForMax(): void {
    let that = this; 
    that.maxHandel.onmousedown = function(event): void {
      that.sliderMovement.maxHandelListener( event );
    };
  };

  makeBindLabelToggle(that): Function {
    return function () {
      that.callHandelLabelToggleChanger;
    };
  };

  makeBindHandelToggle(that): Function {
    return function () {
      that.callMaxHandelToggleChanger();
    };
  };

  makeBindForPlaneToggle(that): Function {
    return function () {
      that.sliderMovement.changePlane(that.planeToggle, that.sliderContainer, that.minValue, that.maxValue);
    };
  };

  makeBindForSelectionMinValue (that): Function {
    return function () {
      that.sliderMovement.selectionOfPreparedValue('min');
    };
  };

  makeBindForSelectionMaxValue(that): Function {
    return function () {
      that.sliderMovement.selectionOfPreparedValue('max');
    };
  };

  makeBindForMinInput(that): Function {
    return function () {
      that.dataRequestStatus["getMinPositionsAmount"] = true;
    };
  };

  makeBindForMaxInput(that): Function {
    return function() {
      that.dataRequestStatus["getMaxPositionsAmount"] = true;
    };
  };
};
