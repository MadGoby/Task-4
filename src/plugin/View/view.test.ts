import { BasicViewSettings } from './types';
import { View } from './View';

require('jasmine-jquery');

describe('View', () => {
  let view: View;
  const settings: BasicViewSettings = {
    double: true,
    sideMenu: true,
    handlesValues: true,
    step: true,
    valueScale: true,
    vertical: true,
    integer: true,
  };
  const target: HTMLDivElement = document.createElement('div');

  beforeEach(() => {
    view = new View(settings, target);
  });

  it('View can be create', () => {
    expect(view).toBeTruthy();
  });

  it('prepareSliderForUse() work correctly', () => {
    view.prepareSliderForUse();
    expect(target).toContainElement('div.goby-slider');
  });

  it('prepareSliderForUse() add side menu in user container', () => {
    const testContainer: HTMLDivElement = document.createElement('div');
    testContainer.classList.add('sideMenuTestContainer');
    document.querySelector('body')?.append(testContainer);
    view.basicSettings.sideMenu = '.sideMenuTestContainer';
    view.prepareSliderForUse();
    expect(testContainer).toContainElement('div.goby-slider__side-menu');
  });

  it('updateSliderView() call plane changers to make vertical', () => {
    view.updateView({
      vertical: true,
      sideMenu: true,
      integer: true,
    });
    expect(view.slider.slider).toHaveClass('goby-slider__body_state_vertical');
    expect(view.handles.fromValue).toHaveClass('goby-slider__handle-value_state_vertical');
    expect(view.handles.toValue).toHaveClass('goby-slider__handle-value_state_vertical');
    expect(view.valuesScale.minValue).toHaveClass('goby-slider__value_state_vertical');
  });

  it('updateSliderView() call plane changers to make horizontally', () => {
    view.updateView({
      vertical: false,
      sideMenu: true,
      integer: true,
    });
    expect(view.slider.slider).not.toHaveClass('goby-slider_state_vertical');
    expect(view.handles.fromValue).not.toHaveClass('goby-slider__handle-value_state_vertical');
    expect(view.handles.toValue).not.toHaveClass('goby-slider__handle-value_state_vertical');
    expect(view.valuesScale.minValue).not.toHaveClass('goby-slider__value_state_vertical');
  });

  it('updateSliderView() call display changers to hide to handel', () => {
    view.basicSettings.double = false;
    view.updateView({
      vertical: false,
      sideMenu: true,
      double: false,
      integer: true,
    });
    expect(view.handles.toHandle.style.display).toEqual('none');
    expect(view.interval.interval.style.display).toEqual('none');
    expect(view.sideMenu.sideMenuElements.toInputWrapper.style.display).toEqual('none');
  });

  it('updateSliderView() call display changers to hide valueScale', () => {
    view.basicSettings.valueScale = false;
    view.updateView({
      vertical: false,
      sideMenu: true,
      valueScale: false,
      integer: true,
    });
    expect(view.valuesScale.minValue.style.display).toEqual('none');
  });

  it('updateSliderView() call display changers to hide handlesValues', () => {
    view.basicSettings.handlesValues = false;
    view.updateView({
      vertical: false,
      sideMenu: true,
      handlesValues: false,
      integer: true,
    });
    expect(view.handles.fromValue.style.display).toEqual('none');
    expect(view.handles.toValue.style.display).toEqual('none');
  });

  it('updateSliderView() check inputs in side-menu', () => {
    view.basicSettings.sideMenu = true;
    view.updateView({
      vertical: true,
      sideMenu: true,
      double: true,
      handlesValues: true,
      valueScale: true,
      integer: true,
    });
    expect(view.sideMenu.sideMenuElements.toToggle).toBeChecked();
    expect(view.sideMenu.sideMenuElements.valueScaleToggle).toBeChecked();
    expect(view.sideMenu.sideMenuElements.handleValuesToggle).toBeChecked();
    expect(view.sideMenu.sideMenuElements.planeToggle).toBeChecked();
  });

  it('refreshAllComponents() refresh handel values', () => {
    view.refreshValues({
      target: 'from',
      value: '50',
      isToFixed: true,
    });
    expect(view.handles.fromValue.innerText).toEqual('50');
    view.refreshValues({
      target: 'to',
      value: '50',
      isToFixed: true,
    });
    expect(view.handles.toValue.innerText).toEqual('50');
  });

  it('refreshAllComponents() refresh sideMenu values', () => {
    view.refreshValues({
      target: 'from',
      value: '50',
      isToFixed: true,
    });
    expect(view.sideMenu.sideMenuElements.fromOutput.innerText).toEqual('50');
    expect((view.sideMenu.sideMenuElements.fromInput as HTMLInputElement).value).toEqual('50');
    view.refreshValues({
      target: 'to',
      value: '50',
      isToFixed: true,
    });
    expect(view.sideMenu.sideMenuElements.toOutput.innerText).toEqual(' - 50');
    expect((view.sideMenu.sideMenuElements.toInput as HTMLInputElement).value).toEqual('50');
  });

  it('bindEventListeners() correctly responds to toToggle input changes', () => {
    view.bindEventListeners();
    (view.sideMenu.sideMenuElements.toToggle as HTMLInputElement).checked = false;
    view.sideMenu.sideMenuElements.toToggle.dispatchEvent(new Event('change'));
    expect(view.basicSettings.double).toBeFalse();
    expect(view.handles.toHandle.style.display).toEqual('none');
    expect(view.interval.interval.style.display).toEqual('none');
    expect(view.sideMenu.sideMenuElements.toInputWrapper.style.display).toEqual('none');
    (view.sideMenu.sideMenuElements.toToggle as HTMLInputElement).checked = true;
    view.sideMenu.sideMenuElements.toToggle.dispatchEvent(new Event('change'));
    expect(view.basicSettings.double).toBeTrue();
    expect(view.handles.toHandle.style.display).toEqual('inline-block');
    expect(view.interval.interval.style.display).toEqual('block');
    expect(view.sideMenu.sideMenuElements.toInputWrapper.style.display).toEqual('block');
  });

  it('bindEventListeners() correctly responds to plane input changes', () => {
    view.bindEventListeners();
    (view.sideMenu.sideMenuElements.planeToggle as HTMLInputElement).checked = true;
    view.sideMenu.sideMenuElements.planeToggle.dispatchEvent(new Event('change'));
    expect(view.basicSettings.vertical).toBeTrue();
    expect(view.slider.slider).toHaveClass('goby-slider__body_state_vertical');
    expect(view.handles.fromValue).toHaveClass('goby-slider__handle-value_state_vertical');
    expect(view.handles.toValue).toHaveClass('goby-slider__handle-value_state_vertical');
    expect(view.valuesScale.minValue).toHaveClass('goby-slider__value_state_vertical');
    (view.sideMenu.sideMenuElements.planeToggle as HTMLInputElement).checked = false;
    view.sideMenu.sideMenuElements.planeToggle.dispatchEvent(new Event('change'));
    expect(view.basicSettings.vertical).toBeFalse();
    expect(view.slider.slider).not.toHaveClass('goby-slider__body_state_vertical');
    expect(view.handles.fromValue).not.toHaveClass('goby-slider__handle-value_state_vertical');
    expect(view.handles.toValue).not.toHaveClass('goby-slider__handle-value_state_vertical');
    expect(view.valuesScale.minValue).not.toHaveClass('goby-slider__value_state_vertical');
  });

  it('bindEventListeners() correctly responds to valueScale input changes', () => {
    view.bindEventListeners();
    (view.sideMenu.sideMenuElements.valueScaleToggle as HTMLInputElement).checked = false;
    view.sideMenu.sideMenuElements.valueScaleToggle.dispatchEvent(new Event('change'));
    expect(view.basicSettings.valueScale).toBeFalsy();
    expect(view.valuesScale.minValue.style.display).toEqual('none');
    (view.sideMenu.sideMenuElements.valueScaleToggle as HTMLInputElement).checked = true;
    view.sideMenu.sideMenuElements.valueScaleToggle.dispatchEvent(new Event('change'));
    expect(view.basicSettings.valueScale).toBeTrue();
    expect(view.valuesScale.minValue.style.display).toEqual('inline-block');
  });

  it('bindEventListeners() correctly responds to handelValues input changes', () => {
    view.bindEventListeners();
    (view.sideMenu.sideMenuElements.handleValuesToggle as HTMLInputElement).checked = false;
    view.sideMenu.sideMenuElements.handleValuesToggle.dispatchEvent(new Event('change'));
    expect(view.basicSettings.handlesValues).toBeFalsy();
    expect(view.handles.fromValue.style.display).toEqual('none');
    expect(view.handles.toValue.style.display).toEqual('none');
    (view.sideMenu.sideMenuElements.handleValuesToggle as HTMLInputElement).checked = true;
    view.sideMenu.sideMenuElements.handleValuesToggle.dispatchEvent(new Event('change'));
    expect(view.basicSettings.handlesValues).toBeTrue();
    expect(view.handles.fromValue.style.display).toEqual('inline-block');
    expect(view.handles.toValue.style.display).toEqual('inline-block');
  });

  it('bindEventListeners() send new value from input', () => {
    view.bindEventListeners();
    (view.sideMenu.sideMenuElements.fromInput as HTMLInputElement).value = '50';
    view.sideMenu.sideMenuElements.fromInput.dispatchEvent(new Event('change'));
    expect(view.requests.needApplyNewValue).toEqual({ name: 'from', value: '50' });
    (view.sideMenu.sideMenuElements.toInput as HTMLInputElement).value = '80';
    view.sideMenu.sideMenuElements.toInput.dispatchEvent(new Event('change'));
    expect(view.requests.needApplyNewValue).toEqual({ name: 'to', value: '80' });
  });

  it('bindEventListeners() send new step from input', () => {
    view.requests.needStepWidth = { name: '', value: 'true' };
    expect(view.requests.needStepWidth).toEqual({ name: '', value: 'true' });
    view.bindEventListeners();
    (view.sideMenu.sideMenuElements.stepInput as HTMLInputElement).value = '50';
    view.sideMenu.sideMenuElements.stepInput.dispatchEvent(new Event('change'));
    expect(view.requests.needStepWidth).toEqual({ name: '', value: 'true' });
  });
});
