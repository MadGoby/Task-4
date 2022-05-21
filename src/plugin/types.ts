type UserCallback = (data: SliderOptions) => void;

type Update = (data: UserSliderOptions) => UserSliderOptions;

type SliderOptions = {
  min: number;
  max: number;
  isStep: boolean;
  isDouble: boolean;
  isHandlesValues: boolean;
  isVertical: boolean;
  isValueScale: boolean;
  isInteger: boolean;
  step?: number;
  from?: number;
  to?: number;
  onChange?: UserCallback;
  onStart?: UserCallback;
};

type UserSliderOptions = {
  min?: number;
  max?: number;
  step?: number;
  isDouble?: boolean;
  isHandlesValues?: boolean;
  isVertical?: boolean;
  isStep?: boolean;
  isValueScale?: boolean;
  isInteger?: boolean;
  from?: number;
  to?: number;
  onChange?: UserCallback;
  onStart?: UserCallback;
};

type PluginInfo = {
  element: [HTMLElement, Object];
  options: SliderOptions;
};

export {
  SliderOptions,
  PluginInfo,
  UserSliderOptions,
  UserCallback,
  Update,
};
