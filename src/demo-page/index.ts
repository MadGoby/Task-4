import './index.scss';
import '../plugin/slider.scss';
import { UserSliderSettings } from './types';
import { SideMenu } from './SideMenu/SideMenu';
import { sliderSettings } from './indexData';

function handleTextInputChange(sideMenu: SideMenu, event: Event) {
  const target: HTMLInputElement = event.target as HTMLInputElement;

  const passValue = (key: string) => {
    const correctKey: string = key.replace('Input', '');

    if (correctKey === 'from') this.data('plugin_gobySlider').update({ from: Number(target.value) });
    if (correctKey === 'to') this.data('plugin_gobySlider').update({ to: Number(target.value) });
    if (correctKey === 'min') this.data('plugin_gobySlider').update({ min: Number(target.value) });
    if (correctKey === 'max') this.data('plugin_gobySlider').update({ max: Number(target.value) });
    if (correctKey === 'step') this.data('plugin_gobySlider').update({ step: Number(target.value) });
  };

  Object.keys(sideMenu.sideMenuElements).forEach((key: string): void => {
    if (sideMenu.sideMenuElements[key] === target) passValue(key);
  });
}

function handleToggleInputChange(sideMenu: SideMenu, event: Event): void {
  const target: HTMLInputElement = event.target as HTMLInputElement;

  const passValue = (key: string) => {
    const optionsKey: string = key.replace('Toggle', '');

    if (optionsKey === 'double') this.data('plugin_gobySlider').update({ double: target.checked });
    if (optionsKey === 'handlesValues') this.data('plugin_gobySlider').update({ handlesValues: target.checked });
    if (optionsKey === 'valueScale') this.data('plugin_gobySlider').update({ valueScale: target.checked });
    if (optionsKey === 'vertical') this.data('plugin_gobySlider').update({ vertical: target.checked });
    if (optionsKey === 'integer') this.data('plugin_gobySlider').update({ integer: target.checked });
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
