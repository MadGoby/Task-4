import '../plugin/slider.css';
import './index.css';

$('.js-slider_1').gobySlider(
  {
    min: '1',
    max: '5',
    double: true,
    'side-menu': true,
    handlesValues: true,
    vertical: true,
    step: 0.2,
    valueScale: true,
    from: '2',
    to: '3',
    integer: false,
  },
);

$('.js-slider_2').gobySlider(
  {
    min: '0',
    max: '5',
    double: false,
    'side-menu': true,
    handlesValues: true,
    vertical: false,
    step: false,
    valueScale: true,
    from: '1',
    to: '4',
  },
);
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
