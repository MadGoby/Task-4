import autobind from 'autobind-decorator';
import { Model } from './Model/Model';
import { View } from './View/View';
import { Presenter } from './Presenter/Presenter';
import {
  PluginInfo,
  SliderOptions, UserSliderOptions,
} from './types';
import { IPlugin } from './interfaces';
import { gobyDefaults } from './common/defaultSettings';

@autobind
class Plugin implements IPlugin {
  readonly element: HTMLElement;

  public options: SliderOptions;

  constructor(element: HTMLElement, options: UserSliderOptions) {
    this.element = element;
    this.options = $.extend({}, gobyDefaults, options);

    Plugin.initialize(this.element, this.getOptions);
  }

  private static initialize(element: HTMLElement, getOptions: () => SliderOptions): void {
    const model: Model = new Model(getOptions);
    const view: View = new View(getOptions, element);
    const presenter: Presenter = new Presenter(view, model, getOptions);

    presenter.initialize();
  }

  private getOptions(): SliderOptions {
    return this.options;
  }
}

$.fn.gobySlider = function gobySlider(sliderSettings: SliderOptions): PluginInfo {
  return this.each(() => {
    $.data(this, 'plugin_gobySlider', new Plugin(this, sliderSettings));
  });
};
