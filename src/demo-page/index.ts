import './index.scss';
import '../plugin/slider.scss';
import '../plugin/slider';
import { UserSliderSettings } from './types';
import { SideMenu } from './SideMenu/SideMenu';
import { sliderSettings } from './indexData';
import { IPlugin } from '../plugin/interfaces';

function handleTextInputChange(sideMenu: SideMenu, event: Event) {
  const target: HTMLInputElement = event.target as HTMLInputElement;

  const passValue = (key: string) => {
    const correctKey: string = key.replace('Input', '');
    const slider: IPlugin = this.data('plugin_gobySlider');

    if (correctKey === 'from') slider.update({ from: Number(target.value) });
    if (correctKey === 'to') slider.update({ to: Number(target.value) });
    if (correctKey === 'min') slider.update({ min: Number(target.value) });
    if (correctKey === 'max') slider.update({ max: Number(target.value) });
    if (correctKey === 'step') slider.update({ step: Number(target.value) });
  };

  Object.keys(sideMenu.sideMenuElements).forEach((key: string): void => {
    if (sideMenu.sideMenuElements[key] === target) passValue(key);
  });
}

function handleToggleInputChange(sideMenu: SideMenu, event: Event): void {
  const target: HTMLInputElement = event.target as HTMLInputElement;

  const passValue = (key: string) => {
    const optionsKey: string = key.replace('Toggle', '');
    const slider: IPlugin = this.data('plugin_gobySlider');

    if (optionsKey === 'double') slider.update({ double: target.checked });
    if (optionsKey === 'handlesValues') slider.update({ handlesValues: target.checked });
    if (optionsKey === 'valueScale') slider.update({ valueScale: target.checked });
    if (optionsKey === 'vertical') slider.update({ vertical: target.checked });
    if (optionsKey === 'integer') slider.update({ integer: target.checked });
    if (optionsKey === 'step') slider.update({ step: target.checked });
  };

  Object.keys(sideMenu.sideMenuElements).forEach((key: string): void => {
    if (sideMenu.sideMenuElements[key] === target) passValue(key);
  });
}

function bindHandleToggleInputChange(
  toggleInput: HTMLInputElement, element: JQuery<HTMLElement>, sideMenu: SideMenu,
): void {
  toggleInput.addEventListener('change', handleToggleInputChange.bind(element, sideMenu));
}

function bindHandleTextInputChange(
  textInput: HTMLInputElement, element: JQuery<HTMLElement>, sideMenu: SideMenu,
): void {
  textInput.addEventListener('change', handleTextInputChange.bind(element, sideMenu));
}

function initializeEventListeners(inputs: Array<HTMLInputElement>,
  element: JQuery<HTMLElement>, sideMenu: SideMenu): void {
  inputs.forEach((textInput: HTMLInputElement) => {
    if (inputs === sideMenu.textInputs) bindHandleTextInputChange(textInput, element, sideMenu);
    if (inputs === sideMenu.toggleInputs) bindHandleToggleInputChange(textInput, element, sideMenu);
  });
}

sliderSettings.forEach((settings: UserSliderSettings) => {
  const { containerElement, sliderOptions } = settings;
  const container: JQuery<HTMLElement> = $(containerElement);

  const sideMenu: SideMenu = new SideMenu();
  sliderOptions.onChange = sideMenu.updateSideMenu;
  sliderOptions.onStart = sideMenu.updateSideMenu;

  container.gobySlider(sliderOptions);
  sideMenu.appendToDom(container);
  initializeEventListeners(sideMenu.textInputs!, container, sideMenu);
  initializeEventListeners(sideMenu.toggleInputs!, container, sideMenu);
});
