import '../slider.css';
import './index.css';

$('.js-slider_1').gobySlider(
  {
    min: '0',
    max: '10',
    double: false,
    'side-menu': true,
    handlesValues: true,
    vertical: false,
    step: false,
    valueScale: true,
    from: '0',
    to: '8',
    integer: true,
  },
);

// $('.js-slider_2').gobySlider(
//   {
//     min: '-10000',
//     max: '10000',
//     double: true,
//     'side-menu': true,
//     handlesValues: true,
//     vertical: true,
//     step: '500',
//     valueScale: false,
//     from: '-5000',
//     to: '5000',
//   },
// );
// $('.js-slider_3').gobySlider(
//   {
//     min: '0',
//     max: '10',
//     double: false,
//     'side-menu': true,
//     handlesValues: false,
//     vertical: false,
//     step: false,
//     valueScale: true,
//     from: '5',
//   },
// );
// $('.js-slider_4').gobySlider(
//   {
//     min: '0',
//     max: '1000',
//     double: false,
//     'side-menu': true,
//     handlesValues: false,
//     vertical: true,
//     step: false,
//     valueScale: false,
//     from: '500',
//     to: '700',
//   },
// );
// $('.js-slider_5').gobySlider(
//   {
//     min: '0',
//     max: '1000',
//     double: true,
//     'side-menu': true,
//     handlesValues: true,
//     vertical: false,
//     step: false,
//     valueScale: false,
//   },
// );
