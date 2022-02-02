import '../plugin/slider.css';
import './index.css';

const sliderSettings = [
  {
    min: '-10000',
    max: '10000',
    double: true,
    'side-menu': true,
    handlesValues: true,
    vertical: false,
    step: 300,
    valueScale: true,
    integer: true,
    from: '-7000',
    to: '7000',
  }, {
    min: '-10000',
    max: '10000',
    double: true,
    'side-menu': true,
    handlesValues: true,
    vertical: true,
    step: false,
    valueScale: true,
    from: '-5000',
    to: '5000',
    integer: false,
  }, {
    min: '0',
    max: '10',
    double: false,
    'side-menu': true,
    handlesValues: false,
    vertical: false,
    step: false,
    valueScale: true,
    integer: true,
    from: '5',
  }, {
    min: '0',
    max: '1000',
    double: false,
    'side-menu': true,
    handlesValues: false,
    vertical: false,
    step: false,
    valueScale: false,
    integer: false,
    from: '500',
  }, {
    min: '0',
    max: '1000',
    double: true,
    'side-menu': true,
    handlesValues: true,
    vertical: false,
    step: 10,
    valueScale: true,
  },
];

$('.js-slider-wrapper').each((index, element) => {
  $(element).gobySlider(sliderSettings[index]);
});
