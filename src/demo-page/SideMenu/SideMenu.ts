import autobind from 'autobind-decorator';
import { sideMenuData } from './sideMenuData';
import {
  SideMenuBaseData,
  SideMenuElements,
} from './types';
import { BasicModelSettings } from '../../plugin/Model/types';

@autobind
export class SideMenu {
  readonly sideMenuElements: SideMenuElements;

  textInputs: Array<HTMLInputElement>;

  constructor() {
    this.sideMenuElements = {};
    this.initializeSideMenuElements();
    this.cloneSimilarElements();

    this.textInputs = [
      this.sideMenuElements.fromInput,
      this.sideMenuElements.toInput,
      this.sideMenuElements.minInput,
      this.sideMenuElements.maxInput,
      this.sideMenuElements.stepInput,
    ] as Array<HTMLInputElement>;
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

  public appendToDom(target: JQuery): void {
    this.collectSideMenu();
    target.append(this.sideMenuElements.sideMenuContainer);
  }

  public updateSideMenu(data: BasicModelSettings):void {
    this.sideMenuElements.fromOutput.innerText = `${data.from}`;
    this.sideMenuElements.toOutput.innerText = `${data.to}`;
    (this.sideMenuElements.fromInput as HTMLInputElement).value = `${data.from}`;
    (this.sideMenuElements.toInput as HTMLInputElement).value = `${data.to}`;
    (this.sideMenuElements.minInput as HTMLInputElement).value = `${data.min}`;
    (this.sideMenuElements.maxInput as HTMLInputElement).value = `${data.max}`;
    (this.sideMenuElements.stepInput as HTMLInputElement).value = `${data.step}`;
  }
}
