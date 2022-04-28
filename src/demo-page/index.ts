import './index.scss';
import '../plugin/slider.scss';
import { SliderOptions } from '../plugin/types';

const sliderSettings: Array<{ containerElement: HTMLElement, sliderOptions: SliderOptions }> = [
  {
    containerElement: document.querySelector('.js-slider-wrapper_number_1')!,
    sliderOptions: {
      min: '-100',
      max: '100',
      double: true,
      sideMenu: true,
      handlesValues: true,
      vertical: false,
      step: 0.12,
      valueScale: true,
      integer: true,
      from: '-100',
      to: '100',
    },
  }, {
    containerElement: document.querySelector('.js-slider-wrapper_number_2')!,
    sliderOptions: {
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
    },
  }, {
    containerElement: document.querySelector('.js-slider-wrapper_number_3')!,
    sliderOptions: {
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
    },
  }, {
    containerElement: document.querySelector('.js-slider-wrapper_number_4')!,
    sliderOptions: {
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
    },
  }, {
    containerElement: document.querySelector('.js-slider-wrapper_number_5')!,
    sliderOptions: {
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
  },
];

sliderSettings.forEach((settings: { containerElement: HTMLElement, sliderOptions: SliderOptions }) => {
  const { containerElement, sliderOptions } = settings;

  $(containerElement).gobySlider(sliderOptions);
});
