import {
  PluginInfo,
  SliderOptions,
} from './types';

declare global {
  interface JQuery {
    gobySlider(options: SliderOptions): PluginInfo;
  }
}
