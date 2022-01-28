import { BasicViewSettings } from './types';
import { View } from './View';

require('jasmine-jquery');

describe('View', () => {
  let view: View;
  const settings: BasicViewSettings = {
    double: true,
    'side-menu': true,
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
    expect(target).toContainElement('div.cs-slider');
  });

  it('prepareSliderForUse() add side menu in user container', () => {
    const testContainer: HTMLDivElement = document.createElement('div');
    testContainer.classList.add('sideMenuTestContainer');
    document.querySelector('body')?.append(testContainer);
    view.basicSettings['side-menu'] = '.sideMenuTestContainer';
    view.prepareSliderForUse();
    expect(testContainer).toContainElement('div.cs-side-menu__container');
  });

  it('updateSliderView() call plane changers to make vertical', () => {
    view.updateView({
      vertical: true,
      sideMenu: true,
      integer: true,
    });
    expect(view.slider.slider).toHaveClass('cs-slider_vertical');
    expect(view.handles.fromValue).toHaveClass('cs-slider__handle-value_vertical');
    expect(view.handles.toValue).toHaveClass('cs-slider__handle-value_vertical');
    expect(view.valuesScale.minValue).toHaveClass('cs-slider__value_vertical');
  });

  it('updateSliderView() call plane changers to make horizontally', () => {
    view.updateView({
      vertical: false,
      sideMenu: true,
      integer: true,
    });
    expect(view.slider.slider).not.toHaveClass('cs-slider_vertical');
    expect(view.handles.fromValue).not.toHaveClass('cs-slider__handle-value_vertical');
    expect(view.handles.toValue).not.toHaveClass('cs-slider__handle-value_vertical');
    expect(view.valuesScale.minValue).not.toHaveClass('cs-slider__value_vertical');
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
    expect(view.sideMenu.sideMenuElements.toInputWrapper!.style.display).toEqual('none');
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
    view.basicSettings['side-menu'] = true;
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
    view.refreshAllComponents({
      target: 'from',
      value: '50',
      isToFixed: true,
    });
    expect(view.handles.fromValue.innerText).toEqual('50');
    view.refreshAllComponents({
      target: 'to',
      value: '50',
      isToFixed: true,
    });
    expect(view.handles.toValue.innerText).toEqual('50');
  });

  it('refreshAllComponents() refresh sideMenu values', () => {
    view.refreshAllComponents({
      target: 'from',
      value: '50',
      isToFixed: true,
    });
    expect(view.sideMenu.sideMenuElements.fromOutput!.innerText).toEqual('50');
    expect(view.sideMenu.sideMenuElements.fromInput!.value).toEqual('50');
    view.refreshAllComponents({
      target: 'to',
      value: '50',
      isToFixed: true,
    });
    expect(view.sideMenu.sideMenuElements.toOutput!.innerText).toEqual(' - 50');
    expect(view.sideMenu.sideMenuElements.toInput!.value).toEqual('50');
  });

  it('bindEventListeners() correctly responds to toToggle input changes', () => {
    view.bindEventListeners();
    view.sideMenu.sideMenuElements.toToggle!.checked = false;
    view.sideMenu.sideMenuElements.toToggle!.dispatchEvent(new Event('change'));
    expect(view.basicSettings.double).toBeFalse();
    expect(view.handles.toHandle.style.display).toEqual('none');
    expect(view.interval.interval.style.display).toEqual('none');
    expect(view.sideMenu.sideMenuElements.toInputWrapper!.style.display).toEqual('none');
    view.sideMenu.sideMenuElements.toToggle!.checked = true;
    view.sideMenu.sideMenuElements.toToggle!.dispatchEvent(new Event('change'));
    expect(view.basicSettings.double).toBeTrue();
    expect(view.handles.toHandle.style.display).toEqual('inline-block');
    expect(view.interval.interval.style.display).toEqual('block');
    expect(view.sideMenu.sideMenuElements.toInputWrapper!.style.display).toEqual('block');
  });

  it('bindEventListeners() correctly responds to plane input changes', () => {
    view.bindEventListeners();
    view.sideMenu.sideMenuElements.planeToggle!.checked = true;
    view.sideMenu.sideMenuElements.planeToggle!.dispatchEvent(new Event('change'));
    expect(view.basicSettings.vertical).toBeTrue();
    expect(view.slider.slider).toHaveClass('cs-slider_vertical');
    expect(view.handles.fromValue).toHaveClass('cs-slider__handle-value_vertical');
    expect(view.handles.toValue).toHaveClass('cs-slider__handle-value_vertical');
    expect(view.valuesScale.minValue).toHaveClass('cs-slider__value_vertical');
    view.sideMenu.sideMenuElements.planeToggle!.checked = false;
    view.sideMenu.sideMenuElements.planeToggle!.dispatchEvent(new Event('change'));
    expect(view.basicSettings.vertical).toBeFalse();
    expect(view.slider.slider).not.toHaveClass('cs-slider_vertical');
    expect(view.handles.fromValue).not.toHaveClass('cs-slider__handle-value_vertical');
    expect(view.handles.toValue).not.toHaveClass('cs-slider__handle-value_vertical');
    expect(view.valuesScale.minValue).not.toHaveClass('cs-slider__value_vertical');
  });

  it('bindEventListeners() correctly responds to valueScale input changes', () => {
    view.bindEventListeners();
    view.sideMenu.sideMenuElements.valueScaleToggle!.checked = false;
    view.sideMenu.sideMenuElements.valueScaleToggle!.dispatchEvent(new Event('change'));
    expect(view.basicSettings.valueScale).toBeFalsy();
    expect(view.valuesScale.minValue.style.display).toEqual('none');
    view.sideMenu.sideMenuElements.valueScaleToggle!.checked = true;
    view.sideMenu.sideMenuElements.valueScaleToggle!.dispatchEvent(new Event('change'));
    expect(view.basicSettings.valueScale).toBeTrue();
    expect(view.valuesScale.minValue.style.display).toEqual('inline-block');
  });

  it('bindEventListeners() correctly responds to handelValues input changes', () => {
    view.bindEventListeners();
    view.sideMenu.sideMenuElements.handleValuesToggle!.checked = false;
    view.sideMenu.sideMenuElements.handleValuesToggle!.dispatchEvent(new Event('change'));
    expect(view.basicSettings.handlesValues).toBeFalsy();
    expect(view.handles.fromValue.style.display).toEqual('none');
    expect(view.handles.toValue.style.display).toEqual('none');
    view.sideMenu.sideMenuElements.handleValuesToggle!.checked = true;
    view.sideMenu.sideMenuElements.handleValuesToggle!.dispatchEvent(new Event('change'));
    expect(view.basicSettings.handlesValues).toBeTrue();
    expect(view.handles.fromValue.style.display).toEqual('inline-block');
    expect(view.handles.toValue.style.display).toEqual('inline-block');
  });

  it('bindEventListeners() send new value from input', () => {
    view.bindEventListeners();
    view.sideMenu.sideMenuElements.fromInput!.value = '50';
    view.sideMenu.sideMenuElements.fromInput!.dispatchEvent(new Event('change'));
    expect(view.dataRequestToModel.needApplyNewValue).toEqual({ name: 'from', value: '50' });
    view.sideMenu.sideMenuElements.toInput!.value = '80';
    view.sideMenu.sideMenuElements.toInput!.dispatchEvent(new Event('change'));
    expect(view.dataRequestToModel.needApplyNewValue).toEqual({ name: 'to', value: '80' });
  });

  it('bindEventListeners() send new step from input', () => {
    view.dataRequestToModel.needStepWidth = { name: '', value: 'true' };
    expect(view.dataRequestToModel.needStepWidth).toEqual({ name: '', value: 'true' });
    view.bindEventListeners();
    view.sideMenu.sideMenuElements.stepInput!.value = '50';
    view.sideMenu.sideMenuElements.stepInput!.dispatchEvent(new Event('change'));
    expect(view.dataRequestToModel.needStepWidth).toEqual({ name: '', value: 'true' });
  });
});
