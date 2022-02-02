import { Model } from '../Model/Model';
import { View } from '../View/View';
import { Presenter } from '../Presenter/Presenter';
import { SliderOptions } from './types';
import { passDefaultSettings } from '../common/defaultSettings';

const pluginName = 'gobySlider';

function Plugin(element: HTMLElement, options: SliderOptions): void {
  this.element = element;
  this.options = passDefaultSettings(options);

  this.init(this.element, this.options);
}

Plugin.prototype.init = (element: HTMLElement, options: SliderOptions): void => {
  const model: Model = new Model(options);
  const view: View = new View(options, element);
  const presenter: Presenter = new Presenter(view, model);

  presenter.initialize();
  view.prepareSliderForUse();
  view.bindEventListeners();
};

$.fn[pluginName] = function gobySlider(sliderSettings: SliderOptions): JQuery {
  return this.each(() => {
    if (!$.data(this, `plugin_${pluginName}`)) {
      $.data(this, `plugin_${pluginName}`,
        new (Plugin as any)(this, sliderSettings));
    }
  });
};
