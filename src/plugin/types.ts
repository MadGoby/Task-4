import { ModelValues } from './Model/types';

type SliderOptions = {
  min: number;
  max: number;
  double: boolean;
  handlesValues: boolean;
  vertical: boolean;
  step: boolean | number;
  valueScale: boolean;
  integer: boolean;
  from: number;
  to: number;
  onChange?: (data: { property: ModelValues, value: number }) => void;
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
  onChange?: (data: { property: ModelValues, value: number }) => void;
};

type PluginInfo = {
  element: [HTMLElement, Object];
  options: SliderOptions;
};

export {
  SliderOptions,
  PluginInfo,
  UserSliderOptions,
};
