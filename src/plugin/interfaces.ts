import { SliderOptions, Update } from './types';

interface IPlugin {
  element: HTMLElement;
  options: SliderOptions;
  update: Update;
}

export { IPlugin };
