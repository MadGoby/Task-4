type SliderOptions = {
  min: string;
  max: string;
  double: boolean;
  sideMenu: boolean | string;
  handlesValues: boolean;
  vertical: boolean;
  step: boolean | number;
  valueScale: boolean;
  integer: boolean;
  from: string;
  to: string;
};

type PluginInfo = {
  element: [HTMLElement, Object];
  options: SliderOptions;
};

export {
  SliderOptions,
  PluginInfo,
};
