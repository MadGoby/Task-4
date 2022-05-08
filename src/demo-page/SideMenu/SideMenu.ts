import { sideMenuData } from './sideMenuData';
import {
  SideMenuBaseData,
  SideMenuElements,
} from './types';

export class SideMenu {
  readonly sideMenuElements: SideMenuElements;

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

  private collectSideMenu(): void {
    Object.keys(sideMenuData.appendList).forEach((key: string): void => {
      const container: HTMLElement = this.sideMenuElements[key];

      sideMenuData.appendList[key].forEach((targetName: string): void => {
        container.append(this.sideMenuElements[targetName]);
      });
    });
  }

  public appendToDom(target: JQuery<HTMLElement>): void {
    this.collectSideMenu();
    target.append(this.sideMenuElements.sideMenuContainer);
  }
}
