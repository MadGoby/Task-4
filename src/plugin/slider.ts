import { Model } from './Model/Model';
import { View } from './View/View';
import { Presenter } from './Presenter/Presenter';
import {
  PluginInfo,
  SliderOptions,
} from './types';
import { IPlugin } from './interfaces';
import { gobyDefaults } from './common/defaultSettings';

class Plugin implements IPlugin {
  readonly element: HTMLElement;

  readonly options: SliderOptions;

  constructor(element: HTMLElement, options: SliderOptions) {
    this.element = element;
    this.options = $.extend({}, gobyDefaults, options);

    Plugin.initialize(this.element, this.options);
  }

  private static initialize(element: HTMLElement, options: SliderOptions): void {
    const model: Model = new Model(options);
    const view: View = new View(options, element);
    const presenter: Presenter = new Presenter(view, model);

    presenter.initialize();
  }
}

$.fn.gobySlider = function gobySlider(sliderSettings: SliderOptions): PluginInfo {
  return this.each(() => {
    $.data(this, 'plugin_gobySlider', new Plugin(this, sliderSettings));
  });
};
