import { Slider } from "./components/slider/slider";
import { Handels } from "./components/handels/handels";
import { Movement } from "./components/movement/movement";
import { BasicViewSettings } from "./interfaces/ViewInterfaces";
import { RefreshData } from "./interfaces/RefreshData";
import { SelectedInterval } from "./components/selectedInterval/selectedInterval";
import { ValuesScale } from "./components/valuesScale/valuesScale";
import { DataRequestFromModel } from "./interfaces/DataRequestFromModel";
import { TargetsForViewUpdate } from "./interfaces/TargetsForViewUpdate";
import { SideMenu } from "./components/sideMenu/sideMenu";

export class View {
  readonly target: HTMLElement;
  readonly slider: Slider;
  readonly handels: Handels;
  readonly movement: Movement;
  readonly interval: SelectedInterval;
  readonly valuesScale: ValuesScale;
  readonly sideMenu: SideMenu;
  public basicSettings: BasicViewSettings;

  constructor (settings: BasicViewSettings, target: HTMLElement) {
    this.target = target;
    this.slider = new Slider();
    this.handels = new Handels();
    this.interval = new SelectedInterval();
    this.valuesScale = new ValuesScale();
    this.sideMenu = new SideMenu();
    this.basicSettings = settings;
    this.movement = new Movement({
      slider: this.slider.slider,
      fromHandel: this.handels.fromHandel,
      toHandel: this.handels.toHandel,
      interval: this.interval.interval,
      basicSettings: this.basicSettings
    });
  };

  dataRequestFromModel: DataRequestFromModel= {
    needDataForScale: false,
    needDataForStartPosition: false,
    needStepWidth: false,
    needApplyValueFromScale: "",
    needApplyNewValue: {name: "", value: ""},
    needChangeSliderValuesRange: {name: "", value: ""}
  };

  public prepareSliderForUse(): void {
    let that = this;

    function addSliderToDOM(): void {
      that.slider.collectSlider({
        from: that.handels.fromHandel,
        to: that.handels.toHandel,
        interval: that.interval.interval,
        valueScale: that.valuesScale
      });
      that.target.append(that.slider.sliderWrapper);
    };

    function addSideMenuToDOM(): void {
      that.sideMenu.colectSideMenu();
      if (typeof that.basicSettings["side-menu"] == "string") {
        document.querySelector(that.basicSettings["side-menu"])?.append(that.sideMenu.sideMenuContainer);
      } else {
        that.target.append(that.sideMenu.sideMenuContainer);
      }
    };
    addSliderToDOM();
    if(that.basicSettings["side-menu"]) addSideMenuToDOM();

    this.dataRequestFromModel.needDataForScale = true;
    this.dataRequestFromModel.needDataForStartPosition = true;
    if((this.basicSettings.step) && (typeof this.basicSettings.step == "number")) this.dataRequestFromModel.needStepWidth = true;
    this.updateSliderView({
      vertical: this.basicSettings.vertical,
      double: this.basicSettings.double,
      sideMenu: this.basicSettings["side-menu"],
      handelsValues: this.basicSettings.handelsValues,
      valueScale: this.basicSettings.valueScale
    });
  };

  public updateSliderView(targets: TargetsForViewUpdate): void {
    if (targets.vertical) {
      this.slider.changePlane(targets.vertical);
      this.handels.changePlane(targets.vertical);
      this.valuesScale.changePlane(targets.vertical);
    };
    if (targets.double == false) {
      this.handels.hideToHandel(this.basicSettings.double, this.movement.positions, this.slider.slider.offsetWidth);
      this.interval.hideSelectedInterval(this.basicSettings.double, this.movement.positions, this.handels.fromHandel.offsetWidth);
      this.sideMenu.hideToValues(this.basicSettings.double);
    };
    if (targets.valueScale == false) this.valuesScale.hideValueScale(this.basicSettings.valueScale);
    if (targets.handelsValues == false) this.handels.hideHandelValues(this.basicSettings.handelsValues);
    if(targets.sideMenu) {
      if (targets.vertical) this.sideMenu.planeToggle.checked = true;
      if (targets.double) this.sideMenu.toToggle.checked = true;
      if (targets.handelsValues) this.sideMenu.handelValuesToggle.checked = true;
      if (targets.valueScale) this.sideMenu.valueScaleToggle.checked = true;
    }
  };

  public bindMovementOnHandels(): void {
    let that = this;
    this.handels.fromHandel.onmousedown = function(event): void {
      if (event.target) {
        that.movement.handelListener({
          target: event.target,
          x: event.clientX,
          y: event.clientY
        });
      };
    };
    this.handels.toHandel.onmousedown = function(event): void {
      if (event.target) {
        that.movement.handelListener({
          target: event.target,
          x: event.clientX,
          y: event.clientY
        }); 
      };
    };
  };

  public refreshAllComponents(settings: RefreshData): void {
    this.handels.refreshValues(settings);
    if(this.basicSettings["side-menu"])this.sideMenu.refreshValues(settings);
  };

  public bindEventListeners(): void {
    this.valuesScale.minValue.addEventListener("click", this.forValueScaleClick.bind(null, this));
    this.valuesScale.maxValue.addEventListener("click", this.forValueScaleClick.bind(null, this));
    this.valuesScale[20].addEventListener("click", this.forValueScaleClick.bind(null, this));
    this.valuesScale[40].addEventListener("click", this.forValueScaleClick.bind(null, this));
    this.valuesScale[60].addEventListener("click", this.forValueScaleClick.bind(null, this));
    this.valuesScale[80].addEventListener("click", this.forValueScaleClick.bind(null, this));
    this.sideMenu.toToggle.addEventListener("change", this.toToggleChange.bind(null, this));
    this.sideMenu.planeToggle.addEventListener("change", this.planeChange.bind(null, this));
    this.sideMenu.valueScaleToggle.addEventListener("change", this.valueScaleChange.bind(null, this));
    this.sideMenu.handelValuesToggle.addEventListener("change", this.handelValuesChanger.bind(null, this));
    this.sideMenu.fromInput.addEventListener("change", this.sendNewValueFromInput.bind(null, this));
    this.sideMenu.toInput.addEventListener("change", this.sendNewValueFromInput.bind(null, this));
    this.sideMenu.minimumInput.addEventListener("change", this.changeSliderValuesRange.bind(null, this));
    this.sideMenu.maximumInput.addEventListener("change", this.changeSliderValuesRange.bind(null, this));
    this.sideMenu.stepInput.addEventListener("change", this.sendNewStepFromInput.bind(null, this));
  };

  private forValueScaleClick(viewLink: View, event: Event): void {
    let element: HTMLSpanElement = event.target as HTMLSpanElement;
    viewLink.dataRequestFromModel.needApplyValueFromScale = element.innerText;
  };

  private toToggleChange(viewLink: View, event: Event):void {
    let element: HTMLInputElement = event.target as HTMLInputElement;
    element.checked ? viewLink.basicSettings.double = true : viewLink.basicSettings.double = false;
    viewLink.handels.hideToHandel(viewLink.basicSettings.double, viewLink.movement.positions, viewLink.slider.slider.offsetWidth);
    viewLink.interval.hideSelectedInterval(viewLink.basicSettings.double, viewLink.movement.positions, viewLink.handels.fromHandel.offsetWidth);
    viewLink.sideMenu.hideToValues(viewLink.basicSettings.double);
  };

  private planeChange(viewLink: View, event: Event): void {
    let element: HTMLInputElement = event.target as HTMLInputElement;
    element.checked ? viewLink.basicSettings.vertical = true : viewLink.basicSettings.vertical = false;
    viewLink.slider.changePlane(viewLink.basicSettings.vertical);
    viewLink.handels.changePlane(viewLink.basicSettings.vertical);
    viewLink.valuesScale.changePlane(viewLink.basicSettings.vertical);
  };

  private valueScaleChange(viewLink: View, event: Event): void {
    let element: HTMLInputElement = event.target as HTMLInputElement;
    element.checked ? viewLink.basicSettings.valueScale = true : viewLink.basicSettings.valueScale = false;
    viewLink.valuesScale.hideValueScale(viewLink.basicSettings.valueScale);
  };

  private handelValuesChanger(viewLink: View, event: Event): void {
    let element: HTMLInputElement = event.target as HTMLInputElement;
    element.checked ? viewLink.basicSettings.handelsValues = true : viewLink.basicSettings.handelsValues = false;
    viewLink.handels.hideHandelValues(viewLink.basicSettings.handelsValues);
  };

  private sendNewValueFromInput(viewLink: View, event: Event): void {
    let element: HTMLInputElement = event.target as HTMLInputElement;
    let target: string;

    if (element == viewLink.sideMenu.fromInput) {
      target = "from"
    } else {
      target = "to"
    };
    
    viewLink.dataRequestFromModel.needApplyNewValue = {name: target, value: element.value};
  };

  private sendNewStepFromInput(viewLink: View, event: Event): void {
    let element: HTMLInputElement = event.target as HTMLInputElement;
    viewLink.basicSettings.step = Number(element.value);
    viewLink.dataRequestFromModel.needStepWidth = true;
  };

  private changeSliderValuesRange(viewLink: View, event: Event): void {
    let element: HTMLInputElement = event.target as HTMLInputElement;
    let target: string;

    if (element == viewLink.sideMenu.minimumInput) {
      target = "min"
    } else {
      target = "max"
    };

    viewLink.dataRequestFromModel.needChangeSliderValuesRange = {name: target, value: element.value};
  };
};