import { View } from './components/view/view.ts';
import { Model } from './components/model/Model.ts';
import { Facade } from './components/model/facade.ts';
import { Presenter } from './components/presenter/presenter.ts';

(function( $ ) {
  $.fn.testSlider = function( options ) {

    var settings = $.extend( {
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
    
    let model;
    if ('current-min' in settings && 'current-max' in settings) {
      model = new Model({'min': settings['min'], max: settings['max'], 'current-min': settings['current-min'], 'current-max': settings['current-max']});
    } else if ('current-min' in settings) {
      model = new Model({'min': settings['min'], max: settings['max'], 'current-min': settings['current-min'], 'current-max': settings['max']});
    } else if ('current-max' in settings) {
      model = new Model({'min': settings['min'], max: settings['max'], 'current-min': settings['min'], 'current-max': settings['current-max']});
    } else {
      model = new Model({'min': settings['min'], max: settings['max'], 'current-min': settings['min'], 'current-max': settings['max']});
    }
    
    let view = new View(that, settings);
    
    let facade = new Facade(model)
    
    let presenter = Presenter(view, facade);
  };
})(jQuery);