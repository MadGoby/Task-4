import { Model } from './Model/Model';
import { View } from './View/View';
import { Presenter } from './Presenter/Presenter';
import {
  PluginInfo,
  SliderOptions,
} from './types';
import { IPlugin } from './interfaces';

const pluginName = 'gobySlider';

class Plugin implements IPlugin {
  readonly element;

  readonly options;

  constructor(element: HTMLElement, options: SliderOptions) {
    this.element = element;
    this.options = options;

    Plugin.initialize(this.element, this.options);
  }

  private static initialize(element: HTMLElement, options: SliderOptions): void {
    const model: Model = new Model(options);
    const view: View = new View(options, element);
    const presenter: Presenter = new Presenter(view, model);

    presenter.initialize();
    view.prepareSliderForUse();
    view.bindEventListeners();
  }
}

$.fn[pluginName] = function gobySlider(sliderSettings: SliderOptions): PluginInfo {
  return this.each(() => {
    $.data(this, `plugin_${pluginName}`, new Plugin(this, sliderSettings));
  });
};
