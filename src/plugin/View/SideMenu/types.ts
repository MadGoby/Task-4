type SideMenuElements = {
  sideMenuContainer?: HTMLDivElement;
  currentValuesWrapper?: HTMLDivElement;
  currentValuesObjective?: HTMLSpanElement;
  fromOutput?: HTMLOutputElement;
  toOutput?: HTMLOutputElement;
  toWrapper?: HTMLDivElement;
  toToggleObjective?: HTMLSpanElement;
  toToggleWrapper?: HTMLLabelElement;
  toToggle?: HTMLInputElement;
  toToggleBorder?: HTMLSpanElement;
  inputWrapper?: HTMLDivElement;
  inputObjective?: HTMLSpanElement;
  toInputWrapper?: HTMLLabelElement;
  fromInputWrapper?: HTMLLabelElement;
  stepInputWrapper?: HTMLLabelElement;
  minInputWrapper?: HTMLLabelElement;
  maxInputWrapper?: HTMLLabelElement;
  fromInput?: HTMLInputElement;
  toInput?: HTMLInputElement;
  stepInput?: HTMLInputElement;
  minimumInput?: HTMLInputElement;
  maximumInput?: HTMLInputElement;
  handleValuesWrapper?: HTMLDivElement;
  handleValuesObjective?: HTMLSpanElement;
  handleValuesToggleWrapper?: HTMLLabelElement;
  handleValuesToggle?: HTMLInputElement;
  handleValuesToggleBorder?: HTMLSpanElement;
  valueScaleWrapper?: HTMLDivElement;
  valueScaleObjective?: HTMLSpanElement;
  valueScaleToggleWrapper?: HTMLLabelElement;
  valueScaleToggle?: HTMLInputElement;
  valueScaleToggleBorder?: HTMLSpanElement;
  planeWrapper?: HTMLDivElement;
  planeObjective?: HTMLSpanElement;
  planeToggleWrapper?: HTMLLabelElement;
  planeToggle?: HTMLInputElement;
  planeToggleBorder?: HTMLSpanElement;
  integerToggle?: HTMLInputElement;
  integerToggleBorder?: HTMLSpanElement;
  integerObjective?: HTMLSpanElement;
  integerWrapper?: HTMLDivElement;
  integerToggleWrapper?: HTMLLabelElement;
};

type SideMenuDivKeys = 'currentValuesWrapper';

type SideMenuSpanKeys = 'currentValuesObjective';

type SideMenuOutputKeys = 'fromOutput' | 'toOutput';

type SideMenuBaseData = {
  name: string;
  cssClasses: Array<string>;
  text?: string;
  attr?: {
    name?: string;
    value?: string;
  };
};

type SideMenuDivData = SideMenuBaseData & {
  key: SideMenuDivKeys;
  getElement(element: HTMLElement): HTMLDivElement;
};

type SideMenuSpanData = SideMenuBaseData & {
  key: SideMenuSpanKeys;
  getElement(element: HTMLElement): HTMLSpanElement;
};

type SideMenuOutputData = SideMenuBaseData & {
  key: SideMenuOutputKeys;
  getElement(element: HTMLElement): HTMLOutputElement;
};

type SideMenuData = {
  divElements: Array<SideMenuDivData>;
  spanElements: Array<SideMenuSpanData>;
  outputElements: Array<SideMenuOutputData>;
};

type SideMenuDataTypes = Array<SideMenuDivData> | Array<SideMenuSpanData> | Array<SideMenuOutputData>;

type SideMenuDataKeys = 'divElements' | 'spanElements' | 'outputElements';

type ElementParams = {
  name: string;
  cssClasses: Array<string>;
  text?: string;
  attr?: {
    name: string,
    value: string
  };
};

export {
  ElementParams,
  SideMenuElements,
  SideMenuDivData,
  SideMenuSpanData,
  SideMenuOutputData,
  SideMenuData,
  SideMenuDataTypes,
  SideMenuDataKeys,
};
