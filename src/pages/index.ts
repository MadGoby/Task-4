import '../plugin/slider.css';
import './index.css';

const sliderSettings = [
  {
    min: '0',
    max: '5',
    double: true,
    'side-menu': true,
    handlesValues: true,
    vertical: false,
    step: false,
    valueScale: true,
    from: '2',
    to: '3',
    integer: false,
  }, {
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
  }, {
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
  }, {
    min: '0',
    max: '10',
    double: false,
    'side-menu': true,
    handlesValues: false,
    vertical: false,
    step: false,
    valueScale: true,
    from: '5',
  }, {
    min: '0',
    max: '1000',
    double: false,
    'side-menu': true,
    handlesValues: false,
    vertical: true,
    step: false,
    valueScale: false,
    from: '500',
    to: '700',
  }, {
    min: '0',
    max: '1000',
    double: true,
    'side-menu': true,
    handlesValues: true,
    vertical: false,
    step: false,
    valueScale: false,
  },
];

$('.js-slider-wrapper').each((index, element) => {
  $(element).gobySlider(sliderSettings[index]);
});
