import {SliderRange} from './components/slider-range.ts';
import {Handels} from './components/handels.ts';
import {SliderMovement} from './components/slider-movement.ts';
import {SideMenu} from './components/side-menu.ts';

interface Settings {
  [key: string]: string | boolean
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
  
  private constructor(target: HTMLDivElement, settings: Settings) {
    this.sliderRange = new SliderRange().getElement();
    this.minHandel = new Handels().getElements().min;
    this.maxHandel = new Handels().getElements().max;
    this.sliderMovement = new SliderMovement({'min': this.minHandel, 'max': this.maxHandel,'sliderRange': this.sliderRange})
    this.settings = settings;
    this.that = target;
    this.sideMenu = settings['side-menu'] === true ? new SideMenu().getElements(): undefined;
    this.sideMenuContainer = settings.sideMenuContainer;
  }

  displayElements(): void {
    let container: HTMLDivElement = document.createElement('div');
    container.classList.add('sliderBody');
    container.append(this.sliderRange);
    this.that.append(container);
    this.sliderRange.append(this.minHandel);
    this.sliderRange.append(this.maxHandel);

    if (this.sideMenuContainer !== 'false') {
      document.querySelector(this.sideMenuContainer).append(this.sideMenu)
    } else {
      this.that.append(this.sideMenu)
    }
    
    if (this.settings["range"] === true || 'true') {
      this.maxHandel.style.display = 'block'
    };
  };
};
