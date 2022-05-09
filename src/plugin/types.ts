import { BasicModelSettings, ModelValues } from './Model/types';

type UserCallback = (data: BasicModelSettings) => void;

type SliderOptions = {
  min: number;
  max: number;
  double: boolean;
  handlesValues: boolean;
  vertical: boolean;
  step: boolean | number;
  valueScale: boolean;
  integer: boolean;
  from?: number;
  to?: number;
  onChange?: UserCallback;
  onStart?: UserCallback;
};

type UserSliderOptions = {
  min?: number;
  max?: number;
  double?: boolean;
  handlesValues?: boolean;
  vertical?: boolean;
  step?: boolean | number;
  valueScale?: boolean;
  integer?: boolean;
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
};
