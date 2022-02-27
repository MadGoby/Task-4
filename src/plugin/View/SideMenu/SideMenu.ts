import { RefreshData } from '../types';
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
    this.collectsSideMenuElements();
    this.clonesSimilarElements();
  }

  private collectsSideMenuElements(): void {
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

  private clonesSimilarElements():void {
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

  public refreshValues(refreshData: RefreshData): void {
    const isRoundUpNeed = refreshData.isToFixed && !this.isInputChanges;
    const bringsValuesToForm = (value: string): string => (
      isRoundUpNeed ? `${Math.round(Number(value))}` : value
    );

    switch (refreshData.target) {
      case 'from':
        (this.sideMenuElements.fromOutput as HTMLOutputElement).value = bringsValuesToForm(refreshData.value);
        (this.sideMenuElements.fromInput as HTMLInputElement).value = bringsValuesToForm(refreshData.value);
        break;
      case 'to':
        (this.sideMenuElements.toOutput as HTMLOutputElement).value = ` - ${bringsValuesToForm(refreshData.value)}`;
        (this.sideMenuElements.toInput as HTMLInputElement).value = bringsValuesToForm(refreshData.value);
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

  public hideToValues(isHideToValues: boolean): void {
    const changeDisplay = (input: string, output: string): void => {
      this.sideMenuElements.toInputWrapper!.style.display = input;
      this.sideMenuElements.toOutput!.style.display = output;
    };

    if (!isHideToValues) {
      changeDisplay('none', 'none');
    } else {
      changeDisplay('block', 'inline');
    }
  }
}
