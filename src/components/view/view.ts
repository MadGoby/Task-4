import {SliderRange} from './components/slider-range.ts';
import {Handels} from './components/handels.ts';
import {SliderMovement} from './components/slider-movement.ts';
import {SideMenu} from './components/side-menu.ts';
import {ValueRange} from './components/valueRange.ts';
import {HandelsLabels} from './components/handels-labels.ts';
import {SelectedRange} from './components/selected-range.ts';

interface Settings {
  [key: string]: string | boolean
}

interface SideMenuElements {
  [key: string]: HTMLDivElement | HTMLInputElement;
}

interface DataOfValueRefresh {
  'min'?: string;
  'max'?: string;
}

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
    this.sliderRange = new SliderRange().getElement();
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
    }
    this.sideMenuContainer = settings.sideMenuContainer;
    this.minLabel = new HandelsLabels().getElements().min;
    this.maxLabel = new HandelsLabels().getElements().max;
    this.interval = new SelectedRange().getElements();
    this.sliderMovement = new SliderMovement({'min': this.minHandel, 'max': this.maxHandel,'minLabel': this.minLabel, 'maxLabel': this.maxLabel ,'sliderRange': this.sliderRange, 'planeToggle': this.planeToggle, 'handelsToggle': this.handelToggle, 'interval': this.interval})
  }

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
      this.handelLabelToggle.checked = true;
    }

    if (this.sideMenuContainer !== 'false') {
      document.querySelector(this.sideMenuContainer).append(this.sideMenu)
    } else {
      this.that.append(this.sideMenu)
    }
    
    if (this.settings["range"] === true) {
      this.maxHandel.style.display = 'block'
      this.handelToggle.checked = true;
      this.interval.style.display = 'block';
      this.maxInput.style.opacity = '1';
    };

    if (this.settings['vertical'] === true) {
      this.planeToggle.checked = true;
      this.sliderMovement.changePlane(this.planeToggle, this.sliderContainer, this.minValue, this.maxValue);
    }
  };

  refreshCurrentValues(newData: DataOfValueRefresh): void {
    if ('min' in newData && 'max' in newData && this.settings['range'] === true && this.handelToggle.checked === true) {
      this.sideMenu.querySelector('#minSliderValue').textContent = newData.min;
      this.sideMenu.querySelector('#maxSliderValue').textContent = ` - ${newData.max}`;
      this.sideMenu.querySelector('.customSliderMinInput').value = newData.min;
      this.sideMenu.querySelector('.customSliderMaxInput').value = newData.max;
      this.minLabel.textContent = newData.min;
      this.maxLabel.textContent = newData.max;
    } else if ('min' in newData) {
      if (this.settings['range'] === true && this.handelToggle.checked === true) {
        this.sideMenu.querySelector('#minSliderValue').textContent = newData.min;;
      } else {
        this.sideMenu.querySelector('#minSliderValue').textContent = newData.min;;
      }
      this.sideMenu.querySelector('.customSliderMinInput').value = newData.min;
      this.minLabel.textContent = newData.min;
    } else {
      this.sideMenu.querySelector('#maxSliderValue').textContent = ` - ${newData.max}`;
      this.sideMenu.querySelector('.customSliderMaxInput').value = newData.max;
      this.maxLabel.textContent = newData.max;
    }
    new HandelsLabels().centeringRelativeToHandles(this.minHandel, this.maxHandel, this.minLabel, this.maxLabel)
  };

  callHandelLabelToggleChanger(target: View): void {
    new HandelsLabels().displayController(target.handelLabelToggle, this.minLabel, this.maxLabel);
    if (target.handelLabelToggle.checked === true) {
      new HandelsLabels().centeringRelativeToHandles(this.minHandel, this.maxHandel, this.minLabel, this.maxLabel)
    }
  }

  callMaxHandelToggleChanger(target: View): void {
    if (target.handelToggle.checked === false) {
      this.sliderMovement.myData['max'] = {'max': `${this.sliderRange.offsetWidth - this.minHandel.offsetWidth}`, 'sliderWidth': `${this.sliderRange.offsetWidth - this.minHandel.offsetWidth}`}
      this.maxHandel.style.left = `${this.sliderRange.offsetWidth - this.minHandel.offsetWidth}px`;
      this.sideMenu.querySelector('#maxSliderValue').textContent = '';
      this.maxInput.setAttribute('readonly', '');
      this.maxInput.value = '';
      this.maxInput.style.opacity = '0.3';
      this.interval.style.display = 'none';
    }
    
    new Handels().displayController(target.handelToggle, this.maxHandel);

    if (target.handelToggle.checked === true) {
      this.maxInput.removeAttribute('readonly');
      this.interval.style.display = 'block';
      this.interval.style.right = this.sliderRange.offsetWidth - (this.sliderRange.offsetWidth - this.minHandel.offsetWidth / 2 ) + 'px';
      if (this.sliderMovement.myData.min['min'] >= this.sliderRange.offsetWidth - this.maxHandel.offsetWidth - this.minHandel.offsetWidth) {
        this.sliderMovement.myData['min'] = {'min': `${this.sliderRange.offsetWidth - this.maxHandel.offsetWidth - this.minHandel.offsetWidth}`, 'sliderWidth': `${this.sliderRange.offsetWidth - this.maxHandel.offsetWidth}`}
        this.minHandel.style.left = `${this.sliderRange.offsetWidth - this.maxHandel.offsetWidth - this.minHandel.offsetWidth}px`;
      }
    }
  }

  refreshMaxSideMenuData(data: number): void {
    this.sideMenu.querySelector('#maxSliderValue').textContent = ` - ${data}`;
    this.maxInput.style.opacity = '1';
    this.maxInput.value = `${data}`;
  }
    
};
