import {createDiv} from './test.ts';
(function( $ ) {
  $.fn.testSlider = function() {
    let that = this;
    createDiv(that)
  };
})(jQuery);