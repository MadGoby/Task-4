import {SliderRange} from './components/slider-range.ts';
import {Handels} from './components/handels.ts';
import {SliderMovement} from './components/slider-movement.ts';
import {SideMenu} from './components/side-menu.ts';
import {ValueRange} from './components/valueRange.ts';
import {HandelsLabels} from './components/handels-labels.ts';

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
    }
    this.sideMenuContainer = settings.sideMenuContainer;
    this.minLabel = new HandelsLabels().getElements().min;
    this.maxLabel = new HandelsLabels().getElements().max;
    this.sliderMovement = new SliderMovement({'min': this.minHandel, 'max': this.maxHandel,'minLabel': this.minLabel, 'maxLabel': this.maxLabel ,'sliderRange': this.sliderRange})
  }

  displayElements(): void {
    let container: HTMLDivElement = document.createElement('div');
    container.classList.add('sliderBody');
    container.append(this.sliderRange);
    this.that.append(container);
    this.sliderRange.append(this.minHandel);
    this.sliderRange.append(this.maxHandel);
    this.sliderRange.append(this.minValue);
    this.sliderRange.append(this.maxValue);
    this.minHandel.append(this.minLabel);
    this.maxHandel.append(this.maxLabel);
    if (this.settings['handelsLabel'] === false) {
      this.minLabel.style.display = 'none';
      this.maxLabel.style.display = 'none';
    }

    if (this.sideMenuContainer !== 'false') {
      document.querySelector(this.sideMenuContainer).append(this.sideMenu)
    } else {
      this.that.append(this.sideMenu)
    }
    
    if (this.settings["range"] === true) {
      this.maxHandel.style.display = 'block'
    };

  };

  refreshCurrentValues(newData: DataOfValueRefresh): void {
    if ('min' in newData && 'max' in newData && this.settings['range'] === true) {
      this.sideMenu.querySelector('#minSliderValue').textContent = `${newData.min} - `;
      this.sideMenu.querySelector('#maxSliderValue').textContent = newData.max;
      this.sideMenu.querySelector('.customSliderMinInput').value = newData.min;
      this.sideMenu.querySelector('.customSliderMaxInput').value = newData.max;
      this.minHandel.querySelector('.minSliderHandelLabel').textContent = newData.min;
      this.maxHandel.querySelector('.maxSliderHandelLabel').textContent = newData.max;
    } else if ('min' in newData) {
      if (this.settings['range'] === true) {
        this.sideMenu.querySelector('#minSliderValue').textContent = `${newData.min} - `;
      } else {
        this.sideMenu.querySelector('#minSliderValue').textContent = `${newData.min}`;
      }
      this.sideMenu.querySelector('.customSliderMinInput').value = newData.min;
      this.minHandel.querySelector('.minSliderHandelLabel').textContent = newData.min;
    } else {
      this.sideMenu.querySelector('#maxSliderValue').textContent = newData.max;
      this.sideMenu.querySelector('.customSliderMaxInput').value = newData.max;
      this.maxHandel.querySelector('.maxSliderHandelLabel').textContent = newData.max;
    }
    this.minLabel.style.left = ((this.minHandel.offsetWidth - this.minLabel.offsetWidth) - 1) / 2 + 'px';
    this.maxLabel.style.left = ((this.maxHandel.offsetWidth - this.maxLabel.offsetWidth) - 1) / 2 + 'px';
  };

  callHandelLabelToggleChanger(target: View): void {
    new HandelsLabels(target.handelLabelToggle).displayController();
  }
};
