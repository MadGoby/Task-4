import { BasicModelSettings } from './Model/types';

type UserCallback = (data: BasicModelSettings) => void;

type Update = (data: UserSliderOptions) => UserSliderOptions;

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

type SliderOptionsKey = 'min'
| 'max'
| 'double'
| 'handlesValues'
| 'vertical'
| 'step'
| 'valueScale'
| 'integer'
| 'from'
| 'to'
| 'onChange'
| 'onStart';

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
  Update,
  SliderOptionsKey,
};
