// import { BasicModelSettings } from './components/model/types';
// import { BasicViewSettings } from './components/view/types';
// import { Model } from './components/model/model';
// import { View } from './components/view/view';
// import { Presenter } from './components/presenter/presenter';
import { SliderOptions } from './types';

$.fn.gobySlider = function gobySlider(options: SliderOptions) {
  // const defaults = {};
  //
  // function Plugin(element: HTMLElement, options: SliderOptions) {
  //   this.element = element;
  //   this.options = $.extend({}, defaults, options);
  //
  //   this.init();
  // }
  //
  // Plugin.prototype.init = function () {
  // };
  //
  // return this.each(function () {
  //   if (!$.data(this, 'plugin_gobySlider')) {
  //     $.data(this, 'plugin_gobySlider',
  //       new Plugin(this, options));
  //   }
  // });
};

// declare global {
//   interface JQuery {
//     customSlider(options: SliderOptions): void;
//   }
// }

// interface SliderOptions {
//   [key: string]: boolean | string
// }
//
// export interface Settings {
//   'min': string,
//   'max': string,
//   'double': boolean,
//   'side-menu': boolean | string,
//   'handlesValues': boolean,
//   'vertical': boolean,
//   'step': boolean | number,
//   'valueScale': boolean,
//   'from'?: string,
//   'to'?: string
// }
//
// (function ($) {
//   $.fn.customSlider = function (options: SliderOptions) {
//     const settings: Settings = $.extend({
//       min: '0',
//       max: '10',
//       double: false,
//       handlesValues: false,
//       vertical: false,
//       step: false,
//       valueScale: false,
//       'side-menu': false,
//     }, options);
//
//     const modelSettings: BasicModelSettings = {
//       min: settings.min,
//       max: settings.max,
//       from: '',
//       to: '',
//     };
//
//     const viewSettings: BasicViewSettings = {
//       double: settings.double,
//       'side-menu': settings['side-menu'],
//       handlesValues: settings.handlesValues,
//       vertical: settings.vertical,
//       step: Number(settings.step),
//       valueScale: settings.valueScale,
//     };
//
//     if (settings.from) {
//       modelSettings.from = settings.from;
//     } else {
//       modelSettings.from = settings.min;
//     }
//
//     if (settings.to) {
//       modelSettings.to = settings.to;
//     } else {
//       modelSettings.to = settings.max;
//     }
//
//     const that: HTMLElement = this;
//
//     const model: Model = new Model(modelSettings);
//     const view: View = new View(viewSettings, that);
//     const presenter: Presenter = new Presenter(view, model);
//
//     presenter.bindProxyToView();
//     presenter.bindProxyToModel();
//     view.bindMovementOnHandles();
//     view.prepareSliderForUse();
//     view.bindEventListeners();
//
//     return this;
//   };
// }(jQuery));
