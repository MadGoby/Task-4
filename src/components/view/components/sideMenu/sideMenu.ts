import { RefreshData } from "./../../interfaces/RefreshData";
import { ElementParams } from "./interfaces/ElementParams";

export class SideMenu {
  readonly sideMenuContainer: HTMLDivElement;
  readonly currentValuesWrapper: HTMLDivElement;
  readonly currentValuesObjective: HTMLSpanElement;
  readonly fromOutput: HTMLOutputElement;
  readonly toOutput: HTMLOutputElement;
  readonly toWraper: HTMLDivElement;
  readonly toToggleObjective: HTMLSpanElement;
  readonly toToggleWrapper: HTMLLabelElement;
  readonly toToggle: HTMLInputElement;
  readonly toToggleBorder: HTMLSpanElement;
  readonly inputWrapper: HTMLDivElement;
  readonly inputObjective: HTMLSpanElement;
  readonly toInputWrapper: HTMLLabelElement;
  readonly fromInputWrapper: HTMLLabelElement;
  readonly stepInputWrapper: HTMLLabelElement;
  readonly minInputWrapper: HTMLLabelElement;
  readonly maxInputWrapper: HTMLLabelElement;
  readonly fromInput: HTMLInputElement;
  readonly toInput: HTMLInputElement;
  readonly stepInput: HTMLInputElement;
  readonly minimumInput: HTMLInputElement;
  readonly maximumInput: HTMLInputElement;
  readonly handelValuesWrapper: HTMLDivElement;
  readonly handelValuesObjective: HTMLSpanElement;
  readonly handelValuesToggleWrapper: HTMLLabelElement;
  readonly handelValuesToggle: HTMLInputElement;
  readonly handelValuesToggleborder: HTMLSpanElement;
  readonly valueScaleWrapper: HTMLDivElement;
  readonly valueScaleObjective: HTMLSpanElement;
  readonly valueScaleToggleWrapper: HTMLLabelElement;
  readonly valueScaleToggle: HTMLInputElement; 
  readonly valueScaleToggleBorder: HTMLSpanElement;
  readonly planeWrapper: HTMLDivElement;
  readonly planeObjective: HTMLSpanElement;
  readonly planeToggleWrapper: HTMLLabelElement;
  readonly planeToggle: HTMLInputElement;
  readonly planeToggleBorder: HTMLSpanElement;
  

  constructor () {
    function createElement(elementParams: ElementParams): HTMLSpanElement {
      let element: HTMLElement = document.createElement(elementParams.name);

      elementParams.cssClases.map(function(cssClass: string) {
        element.classList.add(cssClass);
      })
      if(elementParams.text) element.textContent = elementParams.text;
      if(elementParams.attr) element.setAttribute(elementParams.attr.name, elementParams.attr.value);
      return element;
    };

    this.sideMenuContainer = createElement({
      name: "div",
      cssClases: ["cs-side-menu__container"]
    }) as HTMLDivElement;

    // Values Output
    this.currentValuesWrapper = createElement({
      name: "div", 
      cssClases: ["cs-side-menu__item-wrapper"],
     }) as HTMLDivElement;
    this.currentValuesObjective = createElement({
      name: "span", 
      cssClases: ["cs-side-menu__item-objective"],
      text: "Текущее занчение: "
     }) as HTMLSpanElement;
    this.fromOutput = createElement({
      name: "output",
      cssClases: ["cs-side-menu__value", "cs-side-menu__value_from"]
    }) as HTMLOutputElement;
    this.toOutput = createElement({
      name: "output",
      cssClases: ["cs-side-menu__value", "cs-side-menu__value_to"],
      attr: {name: "style", value: "display: inline"}
    }) as HTMLOutputElement;
    // To handel toggle
    this.toWraper = createElement({
      name: "div", 
      cssClases: ["cs-side-menu__item-wrapper"],
    }) as HTMLDivElement;
    this.toToggleObjective = createElement({
      name: "span", 
      cssClases: ["cs-side-menu__item-objective"],
      text: "Включить второй ползунок: "
    }) as HTMLSpanElement;
    this.toToggleWrapper = createElement({
      name: "label", 
      cssClases: ["cs-side-menu__item-toggle-wrapper"]
    }) as HTMLLabelElement;
    this.toToggle = createElement({
      name: "input", 
      cssClases: ["cs-side-menu__item-toggle"],
      attr: {name: "type", value: "checkbox"}
    }) as HTMLInputElement;
    this.toToggleBorder = createElement({
      name: "span", 
      cssClases: ["cs-side-menu__item-toggle-border"],
    }) as HTMLSpanElement;
    // Inputs
    this.inputWrapper = createElement({
      name: "div", 
      cssClases: ["cs-side-menu__item-wrapper"],
    }) as HTMLDivElement;
    this.inputObjective = createElement({
      name: "span", 
      cssClases: ["cs-side-menu__item-objective"],
      text: "Изменить значение: "
    }) as HTMLSpanElement;
    this.toInputWrapper = createElement({
      name: "label", 
      cssClases: ["cs-side-menu__input-wrapper"],
      text: "До: ",
      attr: {name: "style", value: "display: block"}
    }) as HTMLLabelElement;
    this.fromInputWrapper = createElement({
      name: "label", 
      cssClases: ["cs-side-menu__input-wrapper"],
      text: "От: ",
    }) as HTMLLabelElement;
    this.stepInputWrapper = createElement({
      name: "label", 
      cssClases: ["cs-side-menu__input-wrapper"],
      text: "Шаг: "
    }) as HTMLLabelElement;
    this.minInputWrapper = createElement({
      name: "label", 
      cssClases: ["cs-side-menu__input-wrapper"],
      text: "Мин: "
    }) as HTMLLabelElement;
    this.maxInputWrapper = createElement({
      name: "label", 
      cssClases: ["cs-side-menu__input-wrapper"],
      text: "Макс: "
    }) as HTMLLabelElement;
    this.fromInput = createElement({
      name: "input", 
      cssClases: ["cs-side-menu__input"],
      attr: {name: "type", value: "number"}
    }) as HTMLInputElement;
    this.toInput = createElement({
      name: "input", 
      cssClases: ["cs-side-menu__input"],
      attr: {name: "type", value: "number"}
    }) as HTMLInputElement;
    this.stepInput = createElement({
      name: "input", 
      cssClases: ["cs-side-menu__input"],
      attr: {name: "type", value: "number"}
    }) as HTMLInputElement;
    this.minimumInput = createElement({
      name: "input", 
      cssClases: ["cs-side-menu__input"],
      attr: {name: "type", value: "number"}
    }) as HTMLInputElement;
    this.maximumInput = createElement({
      name: "input", 
      cssClases: ["cs-side-menu__input"],
      attr: {name: "type", value: "number"}
    }) as HTMLInputElement;
    // Values on handels toggle
    this.handelValuesWrapper = createElement({
      name: "div", 
      cssClases: ["cs-side-menu__item-wrapper"],
    }) as HTMLDivElement;
    this.handelValuesObjective = createElement({
      name: "span", 
      cssClases: ["cs-side-menu__item-objective"],
      text: "Включить значения под ползунками: "
    }) as HTMLSpanElement;
    this.handelValuesToggleWrapper = createElement({
      name: "label", 
      cssClases: ["cs-side-menu__item-toggle-wrapper"],
    }) as HTMLLabelElement;
    this.handelValuesToggle = createElement({
      name: "input", 
      cssClases: ["cs-side-menu__item-toggle"],
      attr: {name: "type", value: "checkbox"}
    }) as HTMLInputElement;
    this.handelValuesToggleborder = createElement({
      name: "span", 
      cssClases: ["cs-side-menu__item-toggle-border"],
    }) as HTMLSpanElement;
    // Value scale toggle
    this.valueScaleWrapper = createElement({
      name: "div", 
      cssClases: ["cs-side-menu__item-wrapper"],
    }) as HTMLDivElement;
    this.valueScaleObjective = createElement({
      name: "span", 
      cssClases: ["cs-side-menu__item-objective"],
      text: "Включить шкалу значений: "
    }) as HTMLSpanElement;
    this.valueScaleToggleWrapper = createElement({
      name: "label", 
      cssClases: ["cs-side-menu__item-toggle-wrapper"],
    }) as HTMLLabelElement;
    this.valueScaleToggle = createElement({
      name: "input", 
      cssClases: ["cs-side-menu__item-toggle"],
      attr: {name: "type", value: "checkbox"}
    }) as HTMLInputElement;
    this.valueScaleToggleBorder = createElement({
      name: "span", 
      cssClases: ["cs-side-menu__item-toggle-border"],
    }) as HTMLSpanElement;
    // Plane toggle
    this.planeWrapper = createElement({
      name: "div", 
      cssClases: ["cs-side-menu__item-wrapper"],
    }) as HTMLDivElement;
    this.planeObjective = createElement({
      name: "span", 
      cssClases: ["cs-side-menu__item-objective"],
      text: "Изменить плоскость: "
    }) as HTMLSpanElement;
    this.planeToggleWrapper = createElement({
      name: "label", 
      cssClases: ["cs-side-menu__item-toggle-wrapper"],
    }) as HTMLLabelElement;
    this.planeToggle = createElement({
      name: "input", 
      cssClases: ["cs-side-menu__item-toggle"],
      attr: {name: "type", value: "checkbox"}
    }) as HTMLInputElement;
    this.planeToggleBorder = createElement({
      name: "span", 
      cssClases: ["cs-side-menu__item-toggle-border"],
    }) as HTMLSpanElement;
  };

  public colectSideMenu(): void {
    this.currentValuesWrapper.append(this.currentValuesObjective, this.fromOutput, this.toOutput);

    this.fromInputWrapper.append(this.fromInput)
    this.toInputWrapper.append(this.toInput);
    this.stepInputWrapper.append(this.stepInput);
    this.minInputWrapper.append(this.minimumInput);
    this.maxInputWrapper.append(this.maximumInput);
    this.inputWrapper.append(this.inputObjective, this.fromInputWrapper, this.toInputWrapper, this.stepInputWrapper, this.minInputWrapper, this.maxInputWrapper);

    this.toToggleWrapper.append(this.toToggle, this.toToggleBorder);
    this.toWraper.append(this.toToggleObjective, this.toToggleWrapper);

    this.handelValuesToggleWrapper.append(this.handelValuesToggle, this.handelValuesToggleborder);
    this.handelValuesWrapper.append(this.handelValuesObjective, this.handelValuesToggleWrapper);

    this.valueScaleToggleWrapper.append(this.valueScaleToggle, this.valueScaleToggleBorder);
    this.valueScaleWrapper.append(this.valueScaleObjective, this.valueScaleToggleWrapper);

    this.planeToggleWrapper.append(this.planeToggle, this.planeToggleBorder);
    this.planeWrapper.append(this.planeObjective, this.planeToggleWrapper);

    this.sideMenuContainer.append(
      this.currentValuesWrapper,
      this.inputWrapper,
      this.toWraper,
      this.handelValuesWrapper,
      this.valueScaleWrapper,
      this.planeWrapper
    );
  };

  public refreshValues(refreshData: RefreshData): void {
    if(refreshData.target == "from") {
      this.fromOutput.value = refreshData.value;
      this.fromInput.value = refreshData.value;
    }
    if(refreshData.target == "to") {
      this.toOutput.value = ` - ${refreshData.value}`;
      this.toInput.value = refreshData.value;
    };
    if(refreshData.target == "min") {
      this.minimumInput.value = refreshData.value;
    };
    if(refreshData.target == "max") {
      this.maximumInput.value = refreshData.value;
    };
  };

  public hideToValues(isHideToValues: boolean): void {
    if (isHideToValues == false) {
      this.toInputWrapper.style.display = "none";
      this.toOutput.style.display = "none";
    } else {
      this.toInputWrapper.style.display = "block";
      this.toOutput.style.display = "inline";
    };
  };
}