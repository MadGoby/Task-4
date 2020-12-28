import { View } from './components/view/view';
import { Model } from './components/model/model';
import { Facade } from './components/model/facade';
import { Presenter } from './components/presenter/presenter';

declare global {
  interface JQuery {
    testSlider( options: SliderOptions):void;
  }
};

interface SliderOptions {
  [key: string]: boolean | string
};

export interface Settings {
  'min': string;
  'max': string;
  'range': boolean;
  'side-menu': boolean;
  'handelsLabel': boolean;
  'vertical': boolean;
  'step': boolean | string;
  'sideMenuContainer': string;
  'current-min'?: string;
  'current-max'?: string;
}

(function( $ ) {
  $.fn.testSlider = function( options: SliderOptions ) {

    let settings: Settings = $.extend( {
      'min': '0',
      'max': '10',
      'range': false,
      'side-menu': false,
      'handelsLabel': false,
      'vertical': false,
      'step': false,
      'sideMenuContainer': 'false'
    }, options);

    let that: HTMLDivElement = this;
    
    let model: Model;
    if ('current-min' in settings && 'current-max' in settings) {
      model = new Model({'min': settings['min'], max: settings['max'], 'current-min': settings['current-min'] ? settings['current-min'] : '', 'current-max': settings['current-max'] ? settings['current-max'] : ''});
    } else if ('current-min' in settings) {
      model = new Model({'min': settings['min'], max: settings['max'], 'current-min': settings['current-min'] ? settings['current-min'] : '', 'current-max': settings['max']});
    } else if ('current-max' in settings) {
      model = new Model({'min': settings['min'], max: settings['max'], 'current-min': settings['min'], 'current-max': settings['current-max'] ? settings['current-max'] : ''});
    } else {
      model = new Model({'min': settings['min'], max: settings['max'], 'current-min': settings['min'], 'current-max': settings['max']});
    }
    
    let view: View = new View(that, settings);
    
    let facade: Facade = new Facade(model)
    
    let presenter: Presenter = new Presenter(view, facade);

    presenter.startViewMonitoring();
    view.displayElements();
    view.bindEventListeners();
    view.bindEventHandelsMovement();
  };
})(jQuery);