import { RefreshData } from '../../types';
import { ElementParams, SideMenuElements } from './types';

export class SideMenu {
  readonly sideMenuElements: SideMenuElements;

  constructor() {
    this.sideMenuElements = {};
    this.initializeSideMenu();
  }

  private initializeSideMenu(): void {
    this.sideMenuElements.sideMenuContainer = SideMenu.createElement({
      name: 'div',
      cssClasses: ['cs-side-menu__container'],
    }) as HTMLDivElement;
    this.sideMenuElements.currentValuesWrapper = SideMenu.createElement({
      name: 'div',
      cssClasses: ['cs-side-menu__item-wrapper'],
    }) as HTMLDivElement;
    this.sideMenuElements.currentValuesObjective = SideMenu.createElement({
      name: 'span',
      cssClasses: ['cs-side-menu__item-objective'],
      text: 'Текущее занчение: ',
    }) as HTMLSpanElement;
    this.sideMenuElements.fromOutput = SideMenu.createElement({
      name: 'output',
      cssClasses: ['cs-side-menu__value', 'cs-side-menu__value_from'],
    }) as HTMLOutputElement;
    this.sideMenuElements.toOutput = SideMenu.createElement({
      name: 'output',
      cssClasses: ['cs-side-menu__value', 'cs-side-menu__value_to'],
      attr: { name: 'style', value: 'display: inline' },
    }) as HTMLOutputElement;
    this.sideMenuElements.toWrapper = SideMenu.createElement({
      name: 'div',
      cssClasses: ['cs-side-menu__item-wrapper'],
    }) as HTMLDivElement;
    this.sideMenuElements.toToggleObjective = SideMenu.createElement({
      name: 'span',
      cssClasses: ['cs-side-menu__item-objective'],
      text: 'Включить второй ползунок: ',
    }) as HTMLSpanElement;

    this.sideMenuElements.toToggleWrapper = SideMenu.createElement({
      name: 'label',
      cssClasses: ['cs-side-menu__item-toggle-wrapper'],
    }) as HTMLLabelElement;
    const labelElement: Node = this.sideMenuElements.toToggleWrapper.cloneNode();
    this.sideMenuElements.handelValuesToggleWrapper = labelElement.cloneNode() as HTMLLabelElement;
    this.sideMenuElements.valueScaleToggleWrapper = labelElement.cloneNode() as HTMLLabelElement;
    this.sideMenuElements.planeToggleWrapper = labelElement.cloneNode() as HTMLLabelElement;

    this.sideMenuElements.toToggle = SideMenu.createElement({
      name: 'input',
      cssClasses: ['cs-side-menu__item-toggle'],
      attr: { name: 'type', value: 'checkbox' },
    }) as HTMLInputElement;
    const inputElement: Node = this.sideMenuElements.toToggleWrapper.cloneNode();
    this.sideMenuElements.handelValuesToggle = inputElement.cloneNode() as HTMLInputElement;
    this.sideMenuElements.valueScaleToggle = inputElement.cloneNode() as HTMLInputElement;

    this.sideMenuElements.toToggleBorder = SideMenu.createElement({
      name: 'span',
      cssClasses: ['cs-side-menu__item-toggle-border'],
    }) as HTMLSpanElement;
    this.sideMenuElements.inputWrapper = SideMenu.createElement({
      name: 'div',
      cssClasses: ['cs-side-menu__item-wrapper'],
    }) as HTMLDivElement;
    this.sideMenuElements.inputObjective = SideMenu.createElement({
      name: 'span',
      cssClasses: ['cs-side-menu__item-objective'],
      text: 'Изменить значение: ',
    }) as HTMLSpanElement;
    this.sideMenuElements.toInputWrapper = SideMenu.createElement({
      name: 'label',
      cssClasses: ['cs-side-menu__input-wrapper'],
      text: 'До: ',
      attr: { name: 'style', value: 'display: block' },
    }) as HTMLLabelElement;
    this.sideMenuElements.fromInputWrapper = SideMenu.createElement({
      name: 'label',
      cssClasses: ['cs-side-menu__input-wrapper'],
      text: 'От: ',
    }) as HTMLLabelElement;
    this.sideMenuElements.stepInputWrapper = SideMenu.createElement({
      name: 'label',
      cssClasses: ['cs-side-menu__input-wrapper'],
      text: 'Шаг: ',
    }) as HTMLLabelElement;
    this.sideMenuElements.minInputWrapper = SideMenu.createElement({
      name: 'label',
      cssClasses: ['cs-side-menu__input-wrapper'],
      text: 'Мин: ',
    }) as HTMLLabelElement;
    this.sideMenuElements.maxInputWrapper = SideMenu.createElement({
      name: 'label',
      cssClasses: ['cs-side-menu__input-wrapper'],
      text: 'Макс: ',
    }) as HTMLLabelElement;
    this.sideMenuElements.fromInput = SideMenu.createElement({
      name: 'input',
      cssClasses: ['cs-side-menu__input'],
      attr: { name: 'type', value: 'number' },
    }) as HTMLInputElement;
    this.sideMenuElements.toInput = SideMenu.createElement({
      name: 'input',
      cssClasses: ['cs-side-menu__input'],
      attr: { name: 'type', value: 'number' },
    }) as HTMLInputElement;
    this.sideMenuElements.stepInput = SideMenu.createElement({
      name: 'input',
      cssClasses: ['cs-side-menu__input'],
      attr: { name: 'type', value: 'number' },
    }) as HTMLInputElement;
    this.sideMenuElements.minimumInput = SideMenu.createElement({
      name: 'input',
      cssClasses: ['cs-side-menu__input'],
      attr: { name: 'type', value: 'number' },
    }) as HTMLInputElement;
    this.sideMenuElements.maximumInput = SideMenu.createElement({
      name: 'input',
      cssClasses: ['cs-side-menu__input'],
      attr: { name: 'type', value: 'number' },
    }) as HTMLInputElement;
    this.sideMenuElements.handelValuesWrapper = SideMenu.createElement({
      name: 'div',
      cssClasses: ['cs-side-menu__item-wrapper'],
    }) as HTMLDivElement;
    this.sideMenuElements.handelValuesObjective = SideMenu.createElement({
      name: 'span',
      cssClasses: ['cs-side-menu__item-objective'],
      text: 'Включить значения под ползунками: ',
    }) as HTMLSpanElement;
    this.sideMenuElements.handelValuesToggleBorder = SideMenu.createElement({
      name: 'span',
      cssClasses: ['cs-side-menu__item-toggle-border'],
    }) as HTMLSpanElement;
    // Value scale toggle
    this.sideMenuElements.valueScaleWrapper = SideMenu.createElement({
      name: 'div',
      cssClasses: ['cs-side-menu__item-wrapper'],
    }) as HTMLDivElement;
    this.sideMenuElements.valueScaleObjective = SideMenu.createElement({
      name: 'span',
      cssClasses: ['cs-side-menu__item-objective'],
      text: 'Включить шкалу значений: ',
    }) as HTMLSpanElement;
    this.sideMenuElements.valueScaleToggleBorder = SideMenu.createElement({
      name: 'span',
      cssClasses: ['cs-side-menu__item-toggle-border'],
    }) as HTMLSpanElement;
    this.sideMenuElements.planeWrapper = SideMenu.createElement({
      name: 'div',
      cssClasses: ['cs-side-menu__item-wrapper'],
    }) as HTMLDivElement;
    this.sideMenuElements.planeObjective = SideMenu.createElement({
      name: 'span',
      cssClasses: ['cs-side-menu__item-objective'],
      text: 'Изменить плоскость: ',
    }) as HTMLSpanElement;
    this.sideMenuElements.planeToggle = SideMenu.createElement({
      name: 'input',
      cssClasses: ['cs-side-menu__item-toggle'],
      attr: { name: 'type', value: 'checkbox' },
    }) as HTMLInputElement;
    this.sideMenuElements.planeToggleBorder = SideMenu.createElement({
      name: 'span',
      cssClasses: ['cs-side-menu__item-toggle-border'],
    }) as HTMLSpanElement;
  }

  private static createElement(elementParams: ElementParams): HTMLSpanElement {
    let element: HTMLElement = document.createElement(elementParams.name);

    elementParams.cssClasses.forEach((cssClass: string): void => {
      element.classList.add(cssClass);
    });

    if (elementParams.text) element.textContent = elementParams.text;
    if (elementParams.attr) element.setAttribute(elementParams.attr.name, elementParams.attr.value);

    return element;
  }

  public collectSideMenu(): void {
    this.sideMenuElements.currentValuesWrapper!.append(
      this.sideMenuElements.currentValuesObjective!,
      this.sideMenuElements.fromOutput!,
      this.sideMenuElements.toOutput!,
    );

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

    this.sideMenuElements.toToggleWrapper!.append(
      this.sideMenuElements.toToggle!,
      this.sideMenuElements.toToggleBorder!,
    );
    this.sideMenuElements.toWrapper!.append(
      this.sideMenuElements.toToggleObjective!,
      this.sideMenuElements.toToggleWrapper!,
    );

    this.sideMenuElements.handelValuesToggleWrapper!.append(
      this.sideMenuElements.handelValuesToggle!,
      this.sideMenuElements.handelValuesToggleBorder!,
    );
    this.sideMenuElements.handelValuesWrapper!.append(
      this.sideMenuElements.handelValuesObjective!,
      this.sideMenuElements.handelValuesToggleWrapper!,
    );

    this.sideMenuElements.valueScaleToggleWrapper!.append(
      this.sideMenuElements.valueScaleToggle!,
      this.sideMenuElements.valueScaleToggleBorder!,
    );
    this.sideMenuElements.valueScaleWrapper!.append(
      this.sideMenuElements.valueScaleObjective!,
      this.sideMenuElements.valueScaleToggleWrapper!,
    );

    this.sideMenuElements.planeToggleWrapper!.append(
      this.sideMenuElements.planeToggle!,
      this.sideMenuElements.planeToggleBorder!,
    );
    this.sideMenuElements.planeWrapper!.append(
      this.sideMenuElements.planeObjective!,
      this.sideMenuElements.planeToggleWrapper!,
    );

    this.sideMenuElements.sideMenuContainer!.append(
      this.sideMenuElements.currentValuesWrapper!,
      this.sideMenuElements.inputWrapper!,
      this.sideMenuElements.toWrapper!,
      this.sideMenuElements.handelValuesWrapper!,
      this.sideMenuElements.valueScaleWrapper!,
      this.sideMenuElements.planeWrapper!,
    );
  }

  public refreshValues(refreshData: RefreshData): void {
    if (refreshData.target === 'from') {
      this.sideMenuElements.fromOutput!.value = refreshData.value;
      this.sideMenuElements.fromInput!.value = refreshData.value;
    }
    if (refreshData.target === 'to') {
      this.sideMenuElements.toOutput!.value = ` - ${refreshData.value}`;
      this.sideMenuElements.toInput!.value = refreshData.value;
    }
    if (refreshData.target === 'min') {
      this.sideMenuElements.minimumInput!.value = refreshData.value;
    }
    if (refreshData.target === 'max') {
      this.sideMenuElements.maximumInput!.value = refreshData.value;
    }
  }

  public hideToValues(isHideToValues: boolean): void {
    if (!isHideToValues) {
      this.sideMenuElements.toInputWrapper!.style.display = 'none';
      this.sideMenuElements.toOutput!.style.display = 'none';
    } else {
      this.sideMenuElements.toInputWrapper!.style.display = 'block';
      this.sideMenuElements.toOutput!.style.display = 'inline';
    }
  }
}
