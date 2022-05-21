import { UserSliderSettings } from './types';

const sliderSettings: Array<UserSliderSettings> = [
  {
    containerElement: document.querySelector('.js-slider-wrapper_number_1')!,
    sliderOptions: {
      min: -100,
      step: 5,
      isDouble: true,
      isHandlesValues: true,
      isStep: true,
      isInteger: false,
    },
  }, {
    containerElement: document.querySelector('.js-slider-wrapper_number_2')!,
    sliderOptions: {
      min: -10000,
      max: 10000,
      from: -5000,
      to: 5000,
      isDouble: true,
      isHandlesValues: true,
      isVertical: true,
      isInteger: false,
    },
  }, {
    containerElement: document.querySelector('.js-slider-wrapper_number_3')!,
    sliderOptions: {
      min: 0,
      max: 10,
      from: 5,
    },
  }, {
    containerElement: document.querySelector('.js-slider-wrapper_number_4')!,
    sliderOptions: {
      min: 0,
      max: 1000,
      from: 500,
      isValueScale: false,
      isInteger: false,
    },
  }, {
    containerElement: document.querySelector('.js-slider-wrapper_number_5')!,
    sliderOptions: {
      min: 0,
      max: 1000,
      step: 10,
      isDouble: true,
      isHandlesValues: true,
      isStep: true,
      isInteger: false,
    },
  },
];

export { sliderSettings };
