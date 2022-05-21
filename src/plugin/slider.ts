import autobind from 'autobind-decorator';
import { Model } from './Model/Model';
import { View } from './View/View';
import { Presenter } from './Presenter/Presenter';
import {
  PluginInfo,
  SliderOptions,
  Update, UserCallback,
  UserSliderOptions,
} from './types';
import { IPlugin } from './interfaces';
import { gobyDefaults } from './common/defaultSettings';

@autobind
class Plugin implements IPlugin {
  readonly element: HTMLElement;

  public options: SliderOptions;

  public update: Update = (data: UserSliderOptions) => data;

  constructor(element: HTMLElement, options: UserSliderOptions) {
    this.element = element;
    this.options = $.extend({}, gobyDefaults, this.getDataConfig(), options);
    this.initialize(this.element, this.getOptions);
  }

  private getDataConfig(): UserSliderOptions {
    const element: JQuery<HTMLElement> = $(this.element);
    return {
      min: element.data('min'),
      max: element.data('max'),
      step: element.data('step'),
      isDouble: element.data('is-double'),
      isHandlesValues: element.data('is-handlesValues'),
      isVertical: element.data('is-vertical'),
      isStep: element.data('is-step'),
      isValueScale: element.data('is-valueScale'),
      isInteger: element.data('is-integer'),
      from: element.data('from'),
      to: element.data('to'),
    };
  }

  private initialize(element: HTMLElement, getOptions: () => SliderOptions): void {
    const model: Model = new Model(getOptions);
    const view: View = new View(getOptions, element);
    const presenter: Presenter = new Presenter({
      viewLink: view,
      modelLink: model,
      getOptions,
      environment: this,
    });

    presenter.initialize();
    view.initialize();
  }

  private getOptions(): SliderOptions {
    return this.options;
  }
}

$.fn.gobySlider = function initializeGobySlider(sliderSettings: SliderOptions): PluginInfo {
  return this.each(function returnGobySliderData() {
    $.data(this, 'plugin_gobySlider', new Plugin(this, sliderSettings));
  });
};

$((): void => {
  $('.js-gobySliderWrapper').gobySlider({});
});
