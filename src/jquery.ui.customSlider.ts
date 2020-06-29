import {createDiv} from './components/view/view.ts';
import { View } from './components/view/view.ts';
(function( $ ) {
  $.fn.testSlider = function() {
    let that:HTMLDivElement = this;

    let view = new View(that);
    view.displayElements();

  };
})(jQuery);