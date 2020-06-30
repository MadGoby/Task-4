import { View } from './components/view/view.ts';
import { Model } from './components/model/model.ts';

(function( $ ) {
  $.fn.testSlider = function( options ) {

    var settings = $.extend( {
      'min': '0',
      'max': '10',
      'range': false,
    }, options);
    let that:HTMLDivElement = this;
    
    // Model
    {
      let model = new Model({'min': settings.min, 'max': settings.max})
    }

    // View
    {
      let view = new View(that, settings);
      view.displayElements();
    }

    // Presenter
    {

    }
    
  };
})(jQuery);