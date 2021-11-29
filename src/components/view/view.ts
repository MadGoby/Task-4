import autobind from 'autobind-decorator';
import { Slider } from './components/slider/slider';
import { Handles } from './components/handels/handles';
import { Movement } from './components/movement/movement';
import { SelectedInterval } from './components/selectedInterval/selectedInterval';
import { ValuesScale } from './components/valuesScale/valuesScale';
import { SideMenu } from './components/sideMenu/sideMenu';
import {
  RefreshData,
  BasicViewSettings,
  DataRequestFromModel,
  TargetsForViewUpdate,
} from './types';

@autobind
export class View {
  readonly target: HTMLElement;

  readonly slider: Slider;

  readonly handles: Handles;

  readonly movement: Movement;

  readonly interval: SelectedInterval;

  readonly valuesScale: ValuesScale;

  readonly sideMenu: SideMenu;

  public basicSettings: BasicViewSettings;

  public dataRequestFromModel: DataRequestFromModel = {
    needDataForScale: false,
    needDataForStartPosition: false,
    needStepWidth: false,
    needApplyValueFromScale: '',
    needApplyNewValue: { name: '', value: '' },
    needChangeSliderValuesRange: { name: '', value: '' },
  };

  constructor(settings: BasicViewSettings, target: HTMLElement) {
    this.target = target;
    this.slider = new Slider();
    this.handles = new Handles();
    this.interval = new SelectedInterval();
    this.valuesScale = new ValuesScale();
    this.sideMenu = new SideMenu();
    this.basicSettings = settings;
    this.movement = new Movement({
      slider: this.slider.slider,
      fromHandel: this.handles.fromHandel,
      toHandel: this.handles.toHandel,
      interval: this.interval.interval,
      basicSettings: this.basicSettings,
    });
  }

  private addSliderToDOM(): void {
    this.slider.collectSlider({
      from: this.handles.fromHandel,
      to: this.handles.toHandel,
      interval: this.interval.interval,
      valueScale: this.valuesScale,
    });
    this.target.append(this.slider.sliderWrapper);
  }

  private addSideMenuToDOM(): void {
    this.sideMenu.collectSideMenu();

    if (typeof this.basicSettings['side-menu'] === 'string') {
      document.querySelector(this.basicSettings['side-menu'])?.append(this.sideMenu.sideMenuElements.sideMenuContainer!);
    } else {
      this.target.append(this.sideMenu.sideMenuElements.sideMenuContainer!);
    }
  }

  public prepareSliderForUse(): void {
    const isStepRequired = (this.basicSettings.step) && (typeof this.basicSettings.step === 'number');

    this.addSliderToDOM();

    if (this.basicSettings['side-menu']) this.addSideMenuToDOM();

    this.dataRequestFromModel.needDataForScale = true;
    this.dataRequestFromModel.needDataForStartPosition = true;

    if (isStepRequired) this.dataRequestFromModel.needStepWidth = true;

    this.updateView({
      vertical: this.basicSettings.vertical,
      double: this.basicSettings.double,
      sideMenu: this.basicSettings['side-menu'],
      handlesValues: this.basicSettings.handlesValues,
      valueScale: this.basicSettings.valueScale,
    });
  }

  private turnOnMenuToggles(targets: TargetsForViewUpdate): void {
    if (targets.vertical) this.sideMenu.sideMenuElements.planeToggle!.checked = true;
    if (targets.double) this.sideMenu.sideMenuElements.toToggle!.checked = true;
    if (targets.handlesValues) this.sideMenu.sideMenuElements.handelValuesToggle!.checked = true;
    if (targets.valueScale) this.sideMenu.sideMenuElements.valueScaleToggle!.checked = true;
  }

  public updateView(targets: TargetsForViewUpdate): void {
    if (targets.vertical) {
      this.slider.changePlane(targets.vertical);
      this.handles.changePlane(targets.vertical);
      this.valuesScale.changePlane(targets.vertical);
    }
    if (!targets.double) {
      this.handles.controlHandlesDisplay({
        isDouble: this.basicSettings.double,
        positions: this.movement.positions,
        sliderWidth: this.slider.slider.offsetWidth,
      });
      this.interval.hideSelectedInterval({
        isDouble: this.basicSettings.double,
        handleWidth: this.handles.fromHandel.offsetWidth,
      });
      this.sideMenu.hideToValues(this.basicSettings.double);
    }
    if (!targets.valueScale) this.valuesScale.hideValueScale(this.basicSettings.valueScale);
    if (!targets.handlesValues) this.handles.hideHandelValues(this.basicSettings.handlesValues);
    if (targets.sideMenu) {
      this.turnOnMenuToggles(targets);
    }
  }

  public bindMovementOnHandles(): void {
    this.handles.fromHandel.onmousedown = (event): void => {
      if (event.target) {
        this.movement.handelListener({
          eventInfo: {
            target: event.target,
            x: event.clientX,
            y: event.clientY,
          },
        });
      }
    };
    this.handles.toHandel.onmousedown = (event): void => {
      if (event.target) {
        this.movement.handelListener({
          eventInfo: {
            target: event.target,
            x: event.clientX,
            y: event.clientY,
          },
        });
      }
    };
  }

  public refreshAllComponents(settings: RefreshData): void {
    this.handles.refreshValues(settings);
    if (this.basicSettings['side-menu']) this.sideMenu.refreshValues(settings);
  }

  public bindEventListeners(): void {
    this.valuesScale.minValue.addEventListener('click', this.forValueScaleClick);
    this.valuesScale.maxValue.addEventListener('click', this.forValueScaleClick);
    this.valuesScale[20].addEventListener('click', this.forValueScaleClick);
    this.valuesScale[40].addEventListener('click', this.forValueScaleClick);
    this.valuesScale[60].addEventListener('click', this.forValueScaleClick);
    this.valuesScale[80].addEventListener('click', this.forValueScaleClick);
    this.sideMenu.sideMenuElements.toToggle!.addEventListener('change', this.toToggleChange);
    this.sideMenu.sideMenuElements.planeToggle!.addEventListener('change', this.planeChange);
    this.sideMenu.sideMenuElements.valueScaleToggle!.addEventListener('change', this.valueScaleChange);
    this.sideMenu.sideMenuElements.handelValuesToggle!.addEventListener('change', this.handleValuesChanger);
    this.sideMenu.sideMenuElements.fromInput!.addEventListener('change', this.sendNewInputValue);
    this.sideMenu.sideMenuElements.toInput!.addEventListener('change', this.sendNewInputValue);
    this.sideMenu.sideMenuElements.minimumInput!.addEventListener('change', this.changeSliderValuesRange);
    this.sideMenu.sideMenuElements.maximumInput!.addEventListener('change', this.changeSliderValuesRange);
    this.sideMenu.sideMenuElements.stepInput!.addEventListener('change', this.sendNewStep);
  }

  private forValueScaleClick(event: Event): void {
    const element: HTMLSpanElement = event.target as HTMLSpanElement;
    this.dataRequestFromModel.needApplyValueFromScale = element.innerText;
  }

  private toToggleChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.basicSettings.double = element.checked;
    this.handles.controlHandlesDisplay({
      isDouble: this.basicSettings.double,
      positions: this.movement.positions,
      sliderWidth: this.slider.slider.offsetWidth,
    });
    this.interval.hideSelectedInterval({
      isDouble: this.basicSettings.double,
      handleWidth: this.handles.fromHandel.offsetWidth,
    });
    this.sideMenu.hideToValues(this.basicSettings.double);
  }

  private planeChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.basicSettings.vertical = element.checked;
    this.slider.changePlane(this.basicSettings.vertical);
    this.handles.changePlane(this.basicSettings.vertical);
    this.valuesScale.changePlane(this.basicSettings.vertical);
  }

  private valueScaleChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.basicSettings.valueScale = element.checked;
    this.valuesScale.hideValueScale(this.basicSettings.valueScale);
  }

  private handleValuesChanger(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.basicSettings.handlesValues = element.checked;
    this.handles.hideHandelValues(this.basicSettings.handlesValues);
  }

  private sendNewInputValue(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;
    let target: string;

    if (element === this.sideMenu.sideMenuElements.fromInput) {
      target = 'from';
    } else {
      target = 'to';
    }

    this.dataRequestFromModel.needApplyNewValue = { name: target, value: element.value };
  }

  private sendNewStep(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.basicSettings.step = Number(element.value);
    this.dataRequestFromModel.needStepWidth = true;
  }

  private changeSliderValuesRange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;
    let target: string;

    if (element === this.sideMenu.sideMenuElements.minimumInput) {
      target = 'min';
    } else {
      target = 'max';
    }

    this.dataRequestFromModel.needChangeSliderValuesRange = { name: target, value: element.value };
  }
}
