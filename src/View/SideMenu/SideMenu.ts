import { RefreshData } from '../types';
import { ElementParams, SideMenuElements } from './types';

export class SideMenu {
  readonly sideMenuElements: SideMenuElements;

  public isInputChanges = false;

  constructor() {
    this.sideMenuElements = {};
    this.initializeSideMenu();
  }

  private createOutputs(): void {
    this.sideMenuElements.currentValuesWrapper = SideMenu.createElement({
      name: 'div',
      cssClasses: ['goby-side-menu__item-wrapper'],
    }) as HTMLDivElement;
    this.sideMenuElements.currentValuesObjective = SideMenu.createElement({
      name: 'span',
      cssClasses: ['goby-side-menu__item-objective'],
      text: 'Текущее занчение: ',
    }) as HTMLSpanElement;
    this.sideMenuElements.fromOutput = SideMenu.createElement({
      name: 'output',
      cssClasses: ['goby-side-menu__value', 'goby-side-menu__value_type_from'],
    }) as HTMLOutputElement;
    this.sideMenuElements.toOutput = SideMenu.createElement({
      name: 'output',
      cssClasses: ['goby-side-menu__value', 'goby-side-menu__value_type_to'],
      attr: { name: 'style', value: 'display: inline' },
    }) as HTMLOutputElement;
  }

  private createWrappers(): void {
    this.sideMenuElements.toWrapper = SideMenu.createElement({
      name: 'div',
      cssClasses: ['goby-side-menu__item-wrapper'],
    }) as HTMLDivElement;

    this.sideMenuElements.toToggleWrapper = SideMenu.createElement({
      name: 'label',
      cssClasses: ['goby-side-menu__item-toggle-wrapper'],
    }) as HTMLLabelElement;

    this.sideMenuElements.inputWrapper = SideMenu.createElement({
      name: 'div',
      cssClasses: ['goby-side-menu__item-wrapper'],
    }) as HTMLDivElement;

    this.sideMenuElements.fromInputWrapper = SideMenu.createElement({
      name: 'label',
      cssClasses: ['goby-side-menu__input-wrapper'],
      text: 'От: ',
    }) as HTMLLabelElement;

    this.sideMenuElements.stepInputWrapper = SideMenu.createElement({
      name: 'label',
      cssClasses: ['goby-side-menu__input-wrapper'],
      text: 'Шаг: ',
    }) as HTMLLabelElement;

    this.sideMenuElements.minInputWrapper = SideMenu.createElement({
      name: 'label',
      cssClasses: ['goby-side-menu__input-wrapper'],
      text: 'Мин: ',
    }) as HTMLLabelElement;

    this.sideMenuElements.maxInputWrapper = SideMenu.createElement({
      name: 'label',
      cssClasses: ['goby-side-menu__input-wrapper'],
      text: 'Макс: ',
    }) as HTMLLabelElement;

    this.sideMenuElements.toInputWrapper = SideMenu.createElement({
      name: 'label',
      cssClasses: ['goby-side-menu__input-wrapper'],
      text: 'До: ',
      attr: { name: 'style', value: 'display: block' },
    }) as HTMLLabelElement;

    this.sideMenuElements.handleValuesWrapper = SideMenu.createElement({
      name: 'div',
      cssClasses: ['goby-side-menu__item-wrapper'],
    }) as HTMLDivElement;

    this.sideMenuElements.valueScaleWrapper = SideMenu.createElement({
      name: 'div',
      cssClasses: ['goby-side-menu__item-wrapper'],
    }) as HTMLDivElement;

    this.sideMenuElements.planeWrapper = SideMenu.createElement({
      name: 'div',
      cssClasses: ['goby-side-menu__item-wrapper'],
    }) as HTMLDivElement;

    this.sideMenuElements.integerWrapper = SideMenu.createElement({
      name: 'div',
      cssClasses: ['goby-side-menu__item-wrapper'],
    }) as HTMLDivElement;

    const labelElement: Node = this.sideMenuElements.toToggleWrapper.cloneNode();
    this.sideMenuElements.handleValuesToggleWrapper = labelElement.cloneNode() as HTMLLabelElement;
    this.sideMenuElements.valueScaleToggleWrapper = labelElement.cloneNode() as HTMLLabelElement;
    this.sideMenuElements.planeToggleWrapper = labelElement.cloneNode() as HTMLLabelElement;
    this.sideMenuElements.integerToggleWrapper = labelElement.cloneNode() as HTMLLabelElement;
  }

  private createInputs(): void {
    this.sideMenuElements.inputObjective = SideMenu.createElement({
      name: 'span',
      cssClasses: ['goby-side-menu__item-objective'],
      text: 'Изменить значение: ',
    }) as HTMLSpanElement;
    this.sideMenuElements.fromInput = SideMenu.createElement({
      name: 'input',
      cssClasses: ['goby-side-menu__input'],
      attr: { name: 'type', value: 'number' },
    }) as HTMLInputElement;
    this.sideMenuElements.toInput = SideMenu.createElement({
      name: 'input',
      cssClasses: ['goby-side-menu__input'],
      attr: { name: 'type', value: 'number' },
    }) as HTMLInputElement;
    this.sideMenuElements.stepInput = SideMenu.createElement({
      name: 'input',
      cssClasses: ['goby-side-menu__input'],
      attr: { name: 'type', value: 'number' },
    }) as HTMLInputElement;
    this.sideMenuElements.minimumInput = SideMenu.createElement({
      name: 'input',
      cssClasses: ['goby-side-menu__input'],
      attr: { name: 'type', value: 'number' },
    }) as HTMLInputElement;
    this.sideMenuElements.maximumInput = SideMenu.createElement({
      name: 'input',
      cssClasses: ['goby-side-menu__input'],
      attr: { name: 'type', value: 'number' },
    }) as HTMLInputElement;
  }

  private createToggles():void {
    this.sideMenuElements.toToggleObjective = SideMenu.createElement({
      name: 'span',
      cssClasses: ['goby-side-menu__item-objective'],
      text: 'Включить второй ползунок: ',
    }) as HTMLSpanElement;

    this.sideMenuElements.toToggle = SideMenu.createElement({
      name: 'input',
      cssClasses: ['goby-side-menu__item-toggle'],
      attr: { name: 'type', value: 'checkbox' },
    }) as HTMLInputElement;
    const inputElement: Node = this.sideMenuElements!.toToggle!.cloneNode();
    this.sideMenuElements.handleValuesToggle = inputElement.cloneNode() as HTMLInputElement;
    this.sideMenuElements.valueScaleToggle = inputElement.cloneNode() as HTMLInputElement;
    this.sideMenuElements.integerToggle = inputElement.cloneNode() as HTMLInputElement;

    this.sideMenuElements.toToggleBorder = SideMenu.createElement({
      name: 'span',
      cssClasses: ['goby-side-menu__item-toggle-border'],
    }) as HTMLSpanElement;

    this.sideMenuElements.handleValuesToggleBorder = SideMenu.createElement({
      name: 'span',
      cssClasses: ['goby-side-menu__item-toggle-border'],
    }) as HTMLSpanElement;

    this.sideMenuElements.valueScaleToggleBorder = SideMenu.createElement({
      name: 'span',
      cssClasses: ['goby-side-menu__item-toggle-border'],
    }) as HTMLSpanElement;

    this.sideMenuElements.integerToggleBorder = SideMenu.createElement({
      name: 'span',
      cssClasses: ['goby-side-menu__item-toggle-border'],
    }) as HTMLSpanElement;

    this.sideMenuElements.planeToggle = SideMenu.createElement({
      name: 'input',
      cssClasses: ['goby-side-menu__item-toggle'],
      attr: { name: 'type', value: 'checkbox' },
    }) as HTMLInputElement;

    this.sideMenuElements.planeToggleBorder = SideMenu.createElement({
      name: 'span',
      cssClasses: ['goby-side-menu__item-toggle-border'],
    }) as HTMLSpanElement;
  }

  private createObjectives(): void {
    this.sideMenuElements.handleValuesObjective = SideMenu.createElement({
      name: 'span',
      cssClasses: ['goby-side-menu__item-objective'],
      text: 'Включить значения под ползунками: ',
    }) as HTMLSpanElement;

    this.sideMenuElements.valueScaleObjective = SideMenu.createElement({
      name: 'span',
      cssClasses: ['goby-side-menu__item-objective'],
      text: 'Включить шкалу значений: ',
    }) as HTMLSpanElement;

    this.sideMenuElements.planeObjective = SideMenu.createElement({
      name: 'span',
      cssClasses: ['goby-side-menu__item-objective'],
      text: 'Изменить плоскость: ',
    }) as HTMLSpanElement;

    this.sideMenuElements.integerObjective = SideMenu.createElement({
      name: 'span',
      cssClasses: ['goby-side-menu__item-objective'],
      text: 'Только целые числа: ',
    }) as HTMLSpanElement;
  }

  private initializeSideMenu(): void {
    this.createOutputs();
    this.createWrappers();
    this.createInputs();
    this.createToggles();
    this.createObjectives();

    this.sideMenuElements.sideMenuContainer = SideMenu.createElement({
      name: 'div',
      cssClasses: ['goby-side-menu'],
    }) as HTMLDivElement;
  }

  private static createElement(elementParams: ElementParams): HTMLSpanElement {
    const element: HTMLElement = document.createElement(elementParams.name);

    elementParams.cssClasses.forEach((cssClass: string): void => {
      element.classList.add(cssClass);
    });

    if (elementParams.text) element.textContent = elementParams.text;
    if (elementParams.attr) element.setAttribute(elementParams.attr.name, elementParams.attr.value);

    return element;
  }

  private wrapsOutputs(): void {
    this.sideMenuElements.currentValuesWrapper!.append(
      this.sideMenuElements.currentValuesObjective!,
      this.sideMenuElements.fromOutput!,
      this.sideMenuElements.toOutput!,
    );
  }

  private wrapsElementsInWrappers(): void {
    this.sideMenuElements.fromInputWrapper!.append(this.sideMenuElements.fromInput!);
    this.sideMenuElements.toInputWrapper!.append(this.sideMenuElements.toInput!);
    this.sideMenuElements.stepInputWrapper!.append(this.sideMenuElements.stepInput!);
    this.sideMenuElements.minInputWrapper!.append(this.sideMenuElements.minimumInput!);
    this.sideMenuElements.maxInputWrapper!.append(this.sideMenuElements.maximumInput!);
    this.sideMenuElements.inputWrapper!.append(
      this.sideMenuElements.inputObjective!,
      this.sideMenuElements.fromInputWrapper!,
      this.sideMenuElements.toInputWrapper!,
      this.sideMenuElements.stepInputWrapper!,
      this.sideMenuElements.minInputWrapper!,
      this.sideMenuElements.maxInputWrapper!,
    );
  }

  private wrapsToToggle(): void {
    this.sideMenuElements.toToggleWrapper!.append(
      this.sideMenuElements.toToggle!,
      this.sideMenuElements.toToggleBorder!,
    );
    this.sideMenuElements.toWrapper!.append(
      this.sideMenuElements.toToggleObjective!,
      this.sideMenuElements.toToggleWrapper!,
    );
  }

  private wrapsHandlesValuesToggle(): void {
    this.sideMenuElements.handleValuesToggleWrapper!.append(
      this.sideMenuElements.handleValuesToggle!,
      this.sideMenuElements.handleValuesToggleBorder!,
    );
    this.sideMenuElements.handleValuesWrapper!.append(
      this.sideMenuElements.handleValuesObjective!,
      this.sideMenuElements.handleValuesToggleWrapper!,
    );
  }

  private wrapsValuesScaleToggle(): void {
    this.sideMenuElements.valueScaleToggleWrapper!.append(
      this.sideMenuElements.valueScaleToggle!,
      this.sideMenuElements.valueScaleToggleBorder!,
    );
    this.sideMenuElements.valueScaleWrapper!.append(
      this.sideMenuElements.valueScaleObjective!,
      this.sideMenuElements.valueScaleToggleWrapper!,
    );
  }

  private wrapsPlaneToggle(): void {
    this.sideMenuElements.planeToggleWrapper!.append(
      this.sideMenuElements.planeToggle!,
      this.sideMenuElements.planeToggleBorder!,
    );
    this.sideMenuElements.planeWrapper!.append(
      this.sideMenuElements.planeObjective!,
      this.sideMenuElements.planeToggleWrapper!,
    );
  }

  private wrapsIntegerToggle(): void {
    this.sideMenuElements.integerToggleWrapper!.append(
      this.sideMenuElements.integerToggle!,
      this.sideMenuElements.integerToggleBorder!,
    );
    this.sideMenuElements.integerWrapper!.append(
      this.sideMenuElements.integerObjective!,
      this.sideMenuElements.integerToggleWrapper!,
    );
  }

  public collectSideMenu(): void {
    this.wrapsOutputs();
    this.wrapsElementsInWrappers();
    this.wrapsToToggle();
    this.wrapsHandlesValuesToggle();
    this.wrapsValuesScaleToggle();
    this.wrapsPlaneToggle();
    this.wrapsIntegerToggle();

    this.sideMenuElements.sideMenuContainer!.append(
      this.sideMenuElements.currentValuesWrapper!,
      this.sideMenuElements.inputWrapper!,
      this.sideMenuElements.toWrapper!,
      this.sideMenuElements.handleValuesWrapper!,
      this.sideMenuElements.valueScaleWrapper!,
      this.sideMenuElements.planeWrapper!,
      this.sideMenuElements.integerWrapper!,
    );
  }

  public refreshValues(refreshData: RefreshData): void {
    const isRoundUpNeed = refreshData.isToFixed && !this.isInputChanges;
    const bringsValuesToForm = (value: string): string => (
      isRoundUpNeed ? `${Math.round(Number(value))}` : value
    );

    switch (refreshData.target) {
      case 'from':
        this.sideMenuElements.fromOutput!.value = bringsValuesToForm(refreshData.value);
        this.sideMenuElements.fromInput!.value = bringsValuesToForm(refreshData.value);
        break;
      case 'to':
        this.sideMenuElements.toOutput!.value = ` - ${bringsValuesToForm(refreshData.value)}`;
        this.sideMenuElements.toInput!.value = bringsValuesToForm(refreshData.value);
        break;
      case 'min':
        this.sideMenuElements.minimumInput!.value = refreshData.value;
        break;
      case 'max':
        this.sideMenuElements.maximumInput!.value = refreshData.value;
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
