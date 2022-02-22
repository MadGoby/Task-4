import '../plugin/slider.css';
import './index.css';
import { SliderOptions } from '../plugin/types';

const sliderSettings: Array<SliderOptions> = [
  {
    min: '-10000',
    max: '10000',
    double: true,
    sideMenu: true,
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
    sideMenu: true,
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
    sideMenu: true,
    handlesValues: false,
    vertical: false,
    step: false,
    valueScale: true,
    integer: true,
    from: '5',
    to: '10',
  }, {
    min: '0',
    max: '1000',
    double: false,
    sideMenu: true,
    handlesValues: false,
    vertical: false,
    step: false,
    valueScale: false,
    integer: false,
    from: '500',
    to: '1000',
  }, {
    min: '0',
    max: '1000',
    double: true,
    sideMenu: true,
    handlesValues: true,
    vertical: false,
    step: 10,
    valueScale: true,
    integer: false,
    from: '0',
    to: '1000',
  },
];

$('.js-slider-wrapper').each((index, element) => {
  const settings = sliderSettings[index];
  $(element).gobySlider(settings);
});