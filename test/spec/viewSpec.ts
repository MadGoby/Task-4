import { BasicViewSettings } from "../../src/components/view/interfaces/ViewInterfaces";
import { View } from "../../src/components/view/view";
require("jasmine-jquery");

describe("View", () => {
  let view: View;
  let settings: BasicViewSettings = {
    double: true,
    "side-menu": true,
    handelsValues: true,
    step: true,
    valueScale: true,
    vertical: true
  };
  let target: HTMLDivElement = document.createElement("div");

  beforeEach(() => {
    view = new View(settings, target);
  });

  it("View can be create", () => {
    expect(view).toBeTruthy();
  });

  it("prepareSliderForUse() work correctly", () => {
    view.prepareSliderForUse();
    expect(target).toContainElement("div.cs-slider")
  });

  it("prepareSliderForUse() add side menu in user container", () => {
    let testContainer: HTMLDivElement = document.createElement("div");
    testContainer.classList.add("sideMenuTestContainer");
    document.querySelector("body")?.append(testContainer);
    view.basicSettings["side-menu"] = ".sideMenuTestContainer";
    view.prepareSliderForUse();
    expect(testContainer).toContainElement("div.cs-side-menu__container");
  });

  it("prepareSliderForUse() change dataRequestFromModel", () => {
    expect(view.dataRequestFromModel.needDataForScale).toBeFalse();
    expect(view.dataRequestFromModel.needDataForStartPosition).toBeFalse();
    expect(view.dataRequestFromModel.needStepWidth).toBeFalse();
    view.basicSettings.step = 20;

    view.prepareSliderForUse();

    expect(view.dataRequestFromModel.needDataForScale).toBeTrue();
    expect(view.dataRequestFromModel.needDataForStartPosition).toBeTrue();
    expect(view.dataRequestFromModel.needStepWidth).toBeTrue();
  });

  it("updateSliderView() call plane changers to make vertical", () => {
    view.updateSliderView({vertical: true, sideMenu: true});
    expect(view.slider.slider).toHaveClass("cs-slider_vertical");
    expect(view.handels.fromValue).toHaveClass("cs-slider__handel-value_vertical");
    expect(view.handels.toValue).toHaveClass("cs-slider__handel-value_vertical");
    expect(view.valuesScale.minValue).toHaveClass("cs-slider__value_vertical");
  });

  it("updateSliderView() call plane changers to make horizontall", () => {
    view.updateSliderView({vertical: false, sideMenu: true});
    expect(view.slider.slider).not.toHaveClass("cs-slider_vertical");
    expect(view.handels.fromValue).not.toHaveClass("cs-slider__handel-value_vertical");
    expect(view.handels.toValue).not.toHaveClass("cs-slider__handel-value_vertical");
    expect(view.valuesScale.minValue).not.toHaveClass("cs-slider__value_vertical");
  });

  it("updateSliderView() call display changers to hide to handel", () => {
    view.basicSettings.double = false;
    view.updateSliderView({vertical: false, sideMenu: true, double: false});
    expect(view.handels.toHandel.style.display).toEqual("none");
    expect(view.interval.interval.style.display).toEqual("none");
    expect(view.sideMenu.toInputWrapper.style.display).toEqual("none");
  });

  it("updateSliderView() call display changers to hide valueScale", () => {
    view.basicSettings.valueScale = false;
    view.updateSliderView({vertical: false, sideMenu: true, valueScale: false});
    expect(view.valuesScale.minValue.style.display).toEqual("none");
  });

  it("updateSliderView() call display changers to hide handelsValues", () => {
    view.basicSettings.handelsValues = false;
    view.updateSliderView({vertical: false, sideMenu: true, handelsValues: false});
    expect(view.handels.fromValue.style.display).toEqual("none");
    expect(view.handels.toValue.style.display).toEqual("none");
  });

  it("updateSliderView() check inputs in side-menu", () => {
    view.basicSettings["side-menu"] = true;
    view.updateSliderView({vertical: true, sideMenu: true, double: true, handelsValues: true, valueScale: true});
    expect(view.sideMenu.toToggle).toBeChecked();
    expect(view.sideMenu.valueScaleToggle).toBeChecked();
    expect(view.sideMenu.handelValuesToggle).toBeChecked();
    expect(view.sideMenu.planeToggle).toBeChecked();
  });

  it("refreshAllComponents() refresh handel values", () => {
    view.refreshAllComponents({target: "from", value: "50"});
    expect(view.handels.fromValue.innerText).toEqual("50");
    view.refreshAllComponents({target: "to", value: "50"});
    expect(view.handels.toValue.innerText).toEqual("50");
  });

  it("refreshAllComponents() refresh sideMenu values", () => {
    view.refreshAllComponents({target: "from", value: "50"});
    expect(view.sideMenu.fromOutput.innerText).toEqual("50");
    expect(view.sideMenu.fromInput.value).toEqual("50");
    view.refreshAllComponents({target: "to", value: "50"});
    expect(view.sideMenu.toOutput.innerText).toEqual(" - 50");
    expect(view.sideMenu.toInput.value).toEqual("50");
  });

  it("bindEventListeners() correctly responds to toToggle input changes", () => {
    view.bindEventListeners();
    view.sideMenu.toToggle.checked = false;
    view.sideMenu.toToggle.dispatchEvent(new Event("change"));
    expect(view.basicSettings.double).toBeFalse();
    expect(view.handels.toHandel.style.display).toEqual("none");
    expect(view.interval.interval.style.display).toEqual("none");
    expect(view.sideMenu.toInputWrapper.style.display).toEqual("none");
    view.sideMenu.toToggle.checked = true;
    view.sideMenu.toToggle.dispatchEvent(new Event("change"));
    expect(view.basicSettings.double).toBeTrue();
    expect(view.handels.toHandel.style.display).toEqual("inline-block");
    expect(view.interval.interval.style.display).toEqual("block");
    expect(view.sideMenu.toInputWrapper.style.display).toEqual("block");
  });

  it("bindEventListeners() correctly responds to plane input changes", () => {
    view.bindEventListeners();
    view.sideMenu.planeToggle.checked = true;
    view.sideMenu.planeToggle.dispatchEvent(new Event("change"));
    expect(view.basicSettings.vertical).toBeTrue();
    expect(view.slider.slider).toHaveClass("cs-slider_vertical");
    expect(view.handels.fromValue).toHaveClass("cs-slider__handel-value_vertical");
    expect(view.handels.toValue).toHaveClass("cs-slider__handel-value_vertical");
    expect(view.valuesScale.minValue).toHaveClass("cs-slider__value_vertical");
    view.sideMenu.planeToggle.checked = false;
    view.sideMenu.planeToggle.dispatchEvent(new Event("change"));
    expect(view.basicSettings.vertical).toBeFalse();
    expect(view.slider.slider).not.toHaveClass("cs-slider_vertical");
    expect(view.handels.fromValue).not.toHaveClass("cs-slider__handel-value_vertical");
    expect(view.handels.toValue).not.toHaveClass("cs-slider__handel-value_vertical");
    expect(view.valuesScale.minValue).not.toHaveClass("cs-slider__value_vertical");
  });

  it("bindEventListeners() correctly responds to valueScale input changes", () => {
    view.bindEventListeners();
    view.sideMenu.valueScaleToggle.checked = false;
    view.sideMenu.valueScaleToggle.dispatchEvent(new Event("change"));
    expect(view.basicSettings.valueScale).toBeFalsy();
    expect(view.valuesScale.minValue.style.display).toEqual("none");
    view.sideMenu.valueScaleToggle.checked = true;
    view.sideMenu.valueScaleToggle.dispatchEvent(new Event("change"));
    expect(view.basicSettings.valueScale).toBeTrue();
    expect(view.valuesScale.minValue.style.display).toEqual("inline-block");
  });

  it("bindEventListeners() correctly responds to handelValues input changes", () => {
    view.bindEventListeners();
    view.sideMenu.handelValuesToggle.checked = false;
    view.sideMenu.handelValuesToggle.dispatchEvent(new Event("change"));
    expect(view.basicSettings.handelsValues).toBeFalsy();
    expect(view.handels.fromValue.style.display).toEqual("none");
    expect(view.handels.toValue.style.display).toEqual("none");
    view.sideMenu.handelValuesToggle.checked = true;
    view.sideMenu.handelValuesToggle.dispatchEvent(new Event("change"));
    expect(view.basicSettings.handelsValues).toBeTrue();
    expect(view.handels.fromValue.style.display).toEqual("inline-block");
    expect(view.handels.toValue.style.display).toEqual("inline-block");
  });

  it("bindEventListeners() send new value from input", () => {
    view.bindEventListeners();
    view.sideMenu.fromInput.value = "50";
    view.sideMenu.fromInput.dispatchEvent(new Event("change"));
    expect(view.dataRequestFromModel.needApplyNewValue).toEqual({name: "from", value: "50"});
    view.sideMenu.toInput.value = "80";
    view.sideMenu.toInput.dispatchEvent(new Event("change"));
    expect(view.dataRequestFromModel.needApplyNewValue).toEqual({name: "to", value: "80"});
  });

  it("bindEventListeners() send new step from input", () => {
    view.dataRequestFromModel.needStepWidth = false;
    expect(view.dataRequestFromModel.needStepWidth).toBeFalse()
    view.bindEventListeners();
    view.sideMenu.stepInput.value = "50";
    view.sideMenu.stepInput.dispatchEvent(new Event("change"));
    expect(view.dataRequestFromModel.needStepWidth).toBeTrue();
  });
});