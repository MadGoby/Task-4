import { BasicModelSettings } from "../../src/components/model/interfaces/ModelInterfaces";
import { Model } from "../../src/components/model/model";
import { Presenter } from "../../src/components/presenter/presenter";
import { BasicViewSettings } from "../../src/components/view/interfaces/ViewInterfaces";
import { View } from "../../src/components/view/view";

describe("Presenter", () => {
  let presenter: Presenter;
  let view: View;
  let model: Model;
  let viewSettings: BasicViewSettings = {
    "side-menu": true,
    double: true,
    handelsValues: true,
    step: 10,
    valueScale: true,
    vertical: true
  }
  let viewTarget: HTMLDivElement = document.createElement("div"); 
  let modelSettings: BasicModelSettings = {
    min: "0",
    max: "100",
    from: "30",
    to: "70"
  };
  beforeEach(() => {
    model = new Model(modelSettings);
    view = new View(viewSettings, viewTarget);
    presenter = new Presenter(view, model);

    document.querySelector("body")?.append(view.slider.slider, view.handels.fromHandel, view.handels.toHandel);
    view.slider.slider.style.width = "120px";
    view.handels.fromHandel.style.width = "20px";
    view.handels.toHandel.style.width = "20px";

    presenter.bindProxyToView();
    presenter.bindProxyToModel();
    view.bindMovementOnHandles();
    view.prepareSliderForUse();
    view.bindEventListeners();
  });

  it("Presenter can be create", () => {
    expect(presenter).toBeTruthy();
  });
  
  it("needApplyValueFromScale() choose from value", () => {
    view.basicSettings.double = true;
    view.valuesScale[20].dispatchEvent(new Event("click"));
    expect(model.values.from).toEqual("20")
  });

  it("needApplyValueFromScale() choose to value", () => {
    view.basicSettings.double = true;
    view.valuesScale[80].dispatchEvent(new Event("click"));
    expect(model.values.to).toEqual("80")
  });

  it("needDataForScale() fill value scale with correct values", () => {
    view.dataRequestFromModel.needDataForScale = true;
    expect(view.valuesScale.minValue.innerText).toEqual("0");
    expect(view.valuesScale[20].innerText).toEqual("20");
    expect(view.valuesScale[40].innerText).toEqual("40");
    expect(view.valuesScale[60].innerText).toEqual("60");
    expect(view.valuesScale[80].innerText).toEqual("80");
    expect(view.valuesScale.maxValue.innerText).toEqual("100");
  });

  it("needDataForStartPosition() set correct positions", () => {
    view.dataRequestFromModel.needDataForStartPosition = true;
    expect(view.movement.positions.from).toEqual(30);
    expect(view.movement.positions.to).toEqual(70);
  });

  it("needStepWidth() set correct stepWidth", () => {
    view.basicSettings.step = 10;
    view.dataRequestFromModel.needStepWidth = true;
    expect(view.movement.stepWidth).toEqual("10");
  });

  it("needApplyNewValue() apply new value for from correctly", () => {
    view.dataRequestFromModel.needApplyNewValue = {name: "from", value: "40"};
    expect(view.movement.positions.from).toEqual(40);
    expect(model.values.from).toEqual("40");
  });

  it("needApplyNewValue() apply new value for to correctly", () => {
    view.dataRequestFromModel.needApplyNewValue = {name: "to", value: "60"};
    expect(view.movement.positions.to).toEqual(60);
    expect(model.values.to).toEqual("60");
  });

  it("needApplyValueFromScale() apply value from scale correctly", () => {
    view.dataRequestFromModel.needApplyValueFromScale = "20"
    expect(model.values.from).toEqual("20");
    view.dataRequestFromModel.needApplyValueFromScale = "40"
    expect(model.values.from).toEqual("40");

    view.dataRequestFromModel.needApplyValueFromScale = "80"
    expect(model.values.to).toEqual("80");
    view.dataRequestFromModel.needApplyValueFromScale = "60"
    expect(model.values.to).toEqual("60");
  });

  
});