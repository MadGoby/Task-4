import {
  SideMenuData,
} from './types';

function returnDivElement(element: HTMLElement): HTMLDivElement {
  return element as HTMLDivElement;
}

function returnSpanElement(element: HTMLElement): HTMLSpanElement {
  return element as HTMLSpanElement;
}

function returnOutputElement(element: HTMLElement): HTMLOutputElement {
  return element as HTMLOutputElement;
}

const sideMenuData: SideMenuData = {
  divElements: [
    {
      key: 'currentValuesWrapper',
      name: 'div',
      cssClasses: ['goby-side-menu__item-wrapper'],
      getElement: returnDivElement,
    },
  ],
  spanElements: [
    {
      key: 'currentValuesObjective',
      name: 'span',
      cssClasses: ['goby-side-menu__item-objective'],
      text: 'Текущее занчение: ',
      getElement: returnSpanElement,
    },
  ],
  outputElements: [
    {
      key: 'fromOutput',
      name: 'output',
      cssClasses: ['goby-side-menu__value', 'goby-side-menu__value_type_from'],
      getElement: returnOutputElement,
    },
    {
      key: 'toOutput',
      name: 'output',
      cssClasses: ['goby-side-menu__value', 'goby-side-menu__value_type_to'],
      attr: { name: 'style', value: 'display: inline' },
      getElement: returnOutputElement,
    },
  ],
};

export {
  sideMenuData,
};
