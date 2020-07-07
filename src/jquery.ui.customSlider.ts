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
      'sideMenuContainer': 'false',
    }, options);

    let that:HTMLDivElement = this;
    
    let model = new Model({'min': settings['min'], max: settings['max']});

    let facade = new Facade(model)
    
    let view = new View(that, settings);
    view.displayElements();

    let presenter = Presenter(view, facade);
  };
})(jQuery);