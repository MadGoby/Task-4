import {
  PluginInfo,
  UserSliderOptions,
} from './types';

declare global {
  interface JQuery {
    gobySlider(options: UserSliderOptions): PluginInfo;
  }
}
