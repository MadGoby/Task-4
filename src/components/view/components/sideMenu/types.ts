type ElementParams = {
  name: string;
  cssClasses: Array<string>;
  text?: string;
  attr?: {
    name: string,
    value: string
  };
};

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
  handelValuesWrapper?: HTMLDivElement;
  handelValuesObjective?: HTMLSpanElement;
  handelValuesToggleWrapper?: HTMLLabelElement;
  handelValuesToggle?: HTMLInputElement;
  handelValuesToggleBorder?: HTMLSpanElement;
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
};

export {
  ElementParams,
  SideMenuElements,
};
