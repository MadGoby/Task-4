import { DataFromModel } from '../../plugin/View/types';
import { sideMenuData } from './sideMenuData';
import {
  SideMenuBaseData,
  SideMenuElements,
} from './types';

export class SideMenu {
  readonly sideMenuElements: SideMenuElements;

  public isInputChanges = false;

  constructor() {
    this.sideMenuElements = {};
    this.initializeSideMenuElements();
    this.cloneSimilarElements();
  }

  private initializeSideMenuElements(): void {
    sideMenuData.elements.forEach((elementData: SideMenuBaseData): void => {
      const {
        key,
        attr,
        cssClasses,
        name,
        text,
      } = elementData;

      this.sideMenuElements[key] = document.createElement(name) as HTMLInputElement;
      cssClasses.forEach((targetClass: string): void => {
        this.sideMenuElements[key].classList.add(targetClass);
      });
      if (attr) this.sideMenuElements[key].setAttribute(attr.name, attr.value);
      if (text) this.sideMenuElements[key].textContent = text;
    });
  }

  private cloneSimilarElements():void {
    Object.keys(sideMenuData.cloneList).forEach((key: string): void => {
      const originalElement: HTMLElement = this.sideMenuElements[key];

      sideMenuData.cloneList[key].forEach((cloneName: string): void => {
        this.sideMenuElements[cloneName] = originalElement.cloneNode() as HTMLElement;
      });
    });
  }

  public collectSideMenu(): void {
    Object.keys(sideMenuData.appendList).forEach((key: string): void => {
      const container: HTMLElement = this.sideMenuElements[key];

      sideMenuData.appendList[key].forEach((targetName: string): void => {
        container.append(this.sideMenuElements[targetName]);
      });
    });
  }

  public refreshValues(refreshData: DataFromModel): void {
    const isRoundUpNeed: boolean = refreshData.isToFixed && !this.isInputChanges;
    const roundUpValues = (value: string): string => (isRoundUpNeed ? `${Math.round(Number(value))}` : value);

    switch (refreshData.target) {
      case 'from':
        (this.sideMenuElements.fromOutput as HTMLOutputElement).value = roundUpValues(refreshData.value);
        (this.sideMenuElements.fromInput as HTMLInputElement).value = roundUpValues(refreshData.value);
        break;
      case 'to':
        (this.sideMenuElements.toOutput as HTMLOutputElement).value = ` - ${roundUpValues(refreshData.value)}`;
        (this.sideMenuElements.toInput as HTMLInputElement).value = roundUpValues(refreshData.value);
        break;
      case 'min':
        (this.sideMenuElements.minimumInput as HTMLInputElement).value = refreshData.value;
        break;
      case 'max':
        (this.sideMenuElements.maximumInput as HTMLInputElement).value = refreshData.value;
        break;
      default:
        break;
    }

    this.isInputChanges = false;
  }

  public changeToValuesDisplay(isToValuesShouldBeShown: boolean): void {
    const changeDisplay = (inputState: string, outputState: string): void => {
      this.sideMenuElements.toInputWrapper!.style.display = inputState;
      this.sideMenuElements.toOutput!.style.display = outputState;
    };

    if (isToValuesShouldBeShown) {
      changeDisplay('block', 'inline');
    } else {
      changeDisplay('none', 'none');
    }
  }
}
