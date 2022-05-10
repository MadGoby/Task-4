import autobind from 'autobind-decorator';
import { sideMenuData } from './sideMenuData';
import {
  SideMenuBaseData,
  SideMenuElements,
} from './types';
import { SliderOptions } from '../../plugin/types';

@autobind
export class SideMenu {
  readonly sideMenuElements: SideMenuElements;

  public textInputs: Array<HTMLInputElement> | undefined;

  public toggleInputs: Array<HTMLInputElement> | undefined;

  constructor() {
    this.sideMenuElements = {};
    this.initializeSideMenuElements();
    this.cloneSimilarElements();
    this.collectInputs();
  }

  private collectInputs(): void {
    this.textInputs = [
      this.sideMenuElements.fromInput,
      this.sideMenuElements.toInput,
      this.sideMenuElements.minInput,
      this.sideMenuElements.maxInput,
      this.sideMenuElements.stepInput,
    ] as Array<HTMLInputElement>;

    this.toggleInputs = [
      this.sideMenuElements.doubleToggle,
      this.sideMenuElements.handlesValuesToggle,
      this.sideMenuElements.valueScaleToggle,
      this.sideMenuElements.verticalToggle,
      this.sideMenuElements.integerToggle,
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

  public updateSideMenu(data: SliderOptions):void {
    const isInteger: boolean = data.integer;

    this.sideMenuElements.fromOutput.innerText = isInteger ? `${Math.round(data.from!)}` : `${data.from}`;
    this.sideMenuElements.toOutput.innerText = isInteger ? `${Math.round(data.to!)}` : `${data.to}`;
    (this.sideMenuElements.fromInput as HTMLInputElement).value = isInteger
      ? `${Math.round(data.from!)}` : `${data.from}`;
    (this.sideMenuElements.toInput as HTMLInputElement).value = isInteger ? `${Math.round(data.to!)}` : `${data.to}`;
    (this.sideMenuElements.minInput as HTMLInputElement).value = isInteger ? `${Math.round(data.min!)}` : `${data.min}`;
    (this.sideMenuElements.maxInput as HTMLInputElement).value = isInteger ? `${Math.round(data.max!)}` : `${data.max}`;
    (this.sideMenuElements.stepInput as HTMLInputElement).value = `${data.step}`;
    (this.sideMenuElements.doubleToggle as HTMLInputElement).checked = data.double;
    (this.sideMenuElements.handlesValuesToggle as HTMLInputElement).checked = data.handlesValues;
    (this.sideMenuElements.valueScaleToggle as HTMLInputElement).checked = data.valueScale;
    (this.sideMenuElements.verticalToggle as HTMLInputElement).checked = data.vertical;
    (this.sideMenuElements.integerToggle as HTMLInputElement).checked = data.integer;
  }
}
