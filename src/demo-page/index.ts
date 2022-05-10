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

function binHandleTextInputChange(textInput: HTMLInputElement, element: JQuery<HTMLElement>, sideMenu: SideMenu): void {
  textInput.addEventListener('change', handleTextInputChange.bind(element, sideMenu));
}

function initializeEventListeners(textInputs: Array<HTMLInputElement>,
  element: JQuery<HTMLElement>, sideMenu: SideMenu): void {
  textInputs.forEach((textInput: HTMLInputElement) => {
    binHandleTextInputChange(textInput, element, sideMenu);
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
  initializeEventListeners(sideMenu.textInputs, container, sideMenu);
});
