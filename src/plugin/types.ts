type SliderOptions = {
  min: number;
  max: number;
  double: boolean;
  sideMenu: boolean | string;
  handlesValues: boolean;
  vertical: boolean;
  step: boolean | number;
  valueScale: boolean;
  integer: boolean;
  from: number;
  to: number;
};

type PluginInfo = {
  element: [HTMLElement, Object];
  options: SliderOptions;
};

export {
  SliderOptions,
  PluginInfo,
};
