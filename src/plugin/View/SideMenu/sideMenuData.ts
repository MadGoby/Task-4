import {
  SideMenuData,
} from './types';

const sideMenuData: SideMenuData = {
  elements: [
    {
      key: 'currentValuesWrapper',
      name: 'div',
      cssClasses: ['goby-slider__outputs'],
    },
    {
      key: 'currentValuesObjective',
      name: 'span',
      cssClasses: ['goby-slider__output-objective'],
      text: 'Текущее занчение:',
    },
    {
      key: 'fromOutput',
      name: 'output',
      cssClasses: ['goby-slider__output-value', 'goby-slider__output-value_type_from'],
    },
    {
      key: 'toOutput',
      name: 'output',
      cssClasses: ['goby-slider__output-value', 'goby-slider__output-value_type_to'],
    },
    {
      key: 'outputsWrapper',
      name: 'div',
      cssClasses: ['goby-slider__outputs-wrapper'],
    },
    {
      key: 'toWrapper',
      name: 'div',
      cssClasses: ['goby-slider__toggle-item'],
    },
    {
      key: 'toToggleWrapper',
      name: 'label',
      cssClasses: ['goby-slider__toggle-wrapper'],
    },
    {
      key: 'inputWrapper',
      name: 'div',
      cssClasses: ['goby-slider__inputs'],
    },
    {
      key: 'fromInputWrapper',
      name: 'label',
      cssClasses: ['goby-slider__input-wrapper'],
    },
    {
      key: 'fromInputDescription',
      name: 'span',
      cssClasses: ['goby-slider__input-description'],
      text: 'От:',
    },
    {
      key: 'stepInputWrapper',
      name: 'label',
      cssClasses: ['goby-slider__input-wrapper'],
    },
    {
      key: 'stepInputDescription',
      name: 'span',
      cssClasses: ['goby-slider__input-description'],
      text: 'Шаг:',
    },
    {
      key: 'minInputWrapper',
      name: 'label',
      cssClasses: ['goby-slider__input-wrapper'],
    },
    {
      key: 'minInputDescription',
      name: 'span',
      cssClasses: ['goby-slider__input-description'],
      text: 'Мин:',
    },
    {
      key: 'maxInputWrapper',
      name: 'label',
      cssClasses: ['goby-slider__input-wrapper'],
    },
    {
      key: 'maxInputDescription',
      name: 'span',
      cssClasses: ['goby-slider__input-description'],
      text: 'Макс:',
    },
    {
      key: 'toInputWrapper',
      name: 'label',
      cssClasses: ['goby-slider__input-wrapper'],
    },
    {
      key: 'toInputDescription',
      name: 'span',
      cssClasses: ['goby-slider__input-description'],
      text: 'До:',
    },
    {
      key: 'handleValuesWrapper',
      name: 'div',
      cssClasses: ['goby-slider__toggle-item'],
    },
    {
      key: 'valueScaleWrapper',
      name: 'div',
      cssClasses: ['goby-slider__toggle-item'],
    },
    {
      key: 'planeWrapper',
      name: 'div',
      cssClasses: ['goby-slider__toggle-item'],
    },
    {
      key: 'integerWrapper',
      name: 'div',
      cssClasses: ['goby-slider__toggle-item'],
    },
    {
      key: 'inputObjective',
      name: 'span',
      cssClasses: ['goby-slider__item-objective'],
      text: 'Изменить значение: ',
    },
    {
      key: 'fromInput',
      name: 'input',
      cssClasses: ['goby-slider__input'],
      attr: { name: 'type', value: 'number' },
    },
    {
      key: 'toInput',
      name: 'input',
      cssClasses: ['goby-slider__input'],
      attr: { name: 'type', value: 'number' },
    },
    {
      key: 'stepInput',
      name: 'input',
      cssClasses: ['goby-slider__input'],
      attr: { name: 'type', value: 'number' },
    },
    {
      key: 'minimumInput',
      name: 'input',
      cssClasses: ['goby-slider__input'],
      attr: { name: 'type', value: 'number' },
    },
    {
      key: 'maximumInput',
      name: 'input',
      cssClasses: ['goby-slider__input'],
      attr: { name: 'type', value: 'number' },
    },
    {
      key: 'toToggleObjective',
      name: 'span',
      cssClasses: ['goby-slider__toggle-description'],
      text: 'Включить второй ползунок: ',
    },
    {
      key: 'toToggle',
      name: 'input',
      cssClasses: ['goby-slider__toggle'],
      attr: { name: 'type', value: 'checkbox' },
    },
    {
      key: 'toToggleBorder',
      name: 'span',
      cssClasses: ['goby-slider__toggle-border'],
    },
    {
      key: 'handleValuesToggleBorder',
      name: 'span',
      cssClasses: ['goby-slider__toggle-border'],
    },
    {
      key: 'valueScaleToggleBorder',
      name: 'span',
      cssClasses: ['goby-slider__toggle-border'],
    },
    {
      key: 'integerToggleBorder',
      name: 'span',
      cssClasses: ['goby-slider__toggle-border'],
    },
    {
      key: 'planeToggle',
      name: 'input',
      cssClasses: ['goby-slider__toggle'],
      attr: { name: 'type', value: 'checkbox' },
    },
    {
      key: 'planeToggleBorder',
      name: 'span',
      cssClasses: ['goby-slider__toggle-border'],
    },
    {
      key: 'handleValuesObjective',
      name: 'span',
      cssClasses: ['goby-slider__toggle-description'],
      text: 'Включить значения под ползунками: ',
    },
    {
      key: 'valueScaleObjective',
      name: 'span',
      cssClasses: ['goby-slider__toggle-description'],
      text: 'Включить шкалу значений: ',
    },
    {
      key: 'planeObjective',
      name: 'span',
      cssClasses: ['goby-slider__toggle-description'],
      text: 'Изменить плоскость: ',
    },
    {
      key: 'integerObjective',
      name: 'span',
      cssClasses: ['goby-slider__toggle-description'],
      text: 'Только целые числа: ',
    },
    {
      key: 'sideMenuContainer',
      name: 'div',
      cssClasses: ['goby-slider__side-menu'],
    },
  ],
  appendList: {
    currentValuesWrapper: ['currentValuesObjective', 'outputsWrapper'],
    outputsWrapper: ['fromOutput', 'toOutput'],
    fromInputWrapper: ['fromInputDescription', 'fromInput'],
    toInputWrapper: ['toInputDescription', 'toInput'],
    stepInputWrapper: ['stepInputDescription', 'stepInput'],
    minInputWrapper: ['minInputDescription', 'minimumInput'],
    maxInputWrapper: ['maxInputDescription', 'maximumInput'],
    inputWrapper: ['inputObjective', 'fromInputWrapper', 'toInputWrapper', 'stepInputWrapper',
      'minInputWrapper', 'maxInputWrapper'],
    toToggleWrapper: ['toToggle', 'toToggleObjective', 'toToggleBorder'],
    toWrapper: ['toToggleWrapper'],
    handleValuesToggleWrapper: ['handleValuesToggle', 'handleValuesObjective', 'handleValuesToggleBorder'],
    handleValuesWrapper: ['handleValuesToggleWrapper'],
    valueScaleToggleWrapper: ['valueScaleToggle', 'valueScaleObjective', 'valueScaleToggleBorder'],
    valueScaleWrapper: ['valueScaleToggleWrapper'],
    planeToggleWrapper: ['planeToggle', 'planeObjective', 'planeToggleBorder'],
    planeWrapper: ['planeToggleWrapper'],
    integerToggleWrapper: ['integerToggle', 'integerObjective', 'integerToggleBorder'],
    integerWrapper: ['integerToggleWrapper'],
    sideMenuContainer: ['currentValuesWrapper', 'inputWrapper', 'toWrapper', 'handleValuesWrapper',
      'valueScaleWrapper', 'planeWrapper', 'integerWrapper'],
  },
  cloneList: {
    toToggle: ['handleValuesToggle', 'valueScaleToggle', 'integerToggle'],
    toToggleWrapper: ['handleValuesToggleWrapper', 'valueScaleToggleWrapper', 'planeToggleWrapper',
      'integerToggleWrapper'],
  },
};

export {
  sideMenuData,
};
