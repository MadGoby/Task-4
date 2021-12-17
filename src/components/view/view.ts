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
  DataRequestToModel,
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

  public dataRequestToModel: DataRequestToModel = {
    needDataForScale: { name: '', value: '' },
    needDataForStartPosition: { name: '', value: '' },
    needStepWidth: { name: '', value: '' },
    needApplyValueFromScale: { name: '', value: '' },
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

    this.dataRequestToModel.needDataForScale = { name: '', value: 'true' };
    this.dataRequestToModel.needDataForStartPosition = { name: '', value: 'true' };

    if (isStepRequired) this.dataRequestToModel.needStepWidth = { name: '', value: 'true' };

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
    if (targets.handlesValues) this.sideMenu.sideMenuElements.handleValuesToggle!.checked = true;
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

  public refreshAllComponents(settings: RefreshData): void {
    const isTargetNotRange = settings.target !== 'min' && settings.target !== 'max';
    if (isTargetNotRange) this.handles.refreshValues(settings);
    if (this.basicSettings['side-menu']) this.sideMenu.refreshValues(settings);
  }

  public bindEventListeners(): void {
    Object.values(this.valuesScale).forEach((scaleValue: HTMLSpanElement): void => {
      scaleValue.addEventListener('click', this.handleScaleValueClick);
    });
    this.sideMenu.sideMenuElements.toToggle!.addEventListener('change', this.handleToToggleChange);
    this.sideMenu.sideMenuElements.planeToggle!.addEventListener('change', this.handlePlaneToggleChange);
    this.sideMenu.sideMenuElements.valueScaleToggle!.addEventListener('change', this.handleValueScaleToggleChange);
    this.sideMenu.sideMenuElements.handleValuesToggle!.addEventListener('change', this.handleHandleValuesChange);
    [this.sideMenu.sideMenuElements.fromInput, this.sideMenu.sideMenuElements.toInput].forEach(
      (valueInput: HTMLInputElement | undefined): void => {
        valueInput!.addEventListener('change', this.handleValueInputChange);
      },
    );
    [this.sideMenu.sideMenuElements.minimumInput, this.sideMenu.sideMenuElements.maximumInput].forEach(
      (rangeInput: HTMLInputElement | undefined): void => {
        rangeInput!.addEventListener('change', this.handleRangeInputChange);
      },
    );
    this.sideMenu.sideMenuElements.stepInput!.addEventListener('change', this.handleStepInputChange);
    [this.handles.fromHandel, this.handles.toHandel].forEach((handle: HTMLSpanElement):void => {
      handle.addEventListener('mousedown', this.handleHandleClick);
    });
  }

  private handleHandleClick(event: MouseEvent): void {
    const target: HTMLSpanElement = event.target as HTMLSpanElement;
    this.movement.handleListener({
      eventInfo: {
        target,
        x: event.clientX,
        y: event.clientY,
      },
    });
  }

  private handleScaleValueClick(event: Event): void {
    const element: HTMLSpanElement = event.target as HTMLSpanElement;
    this.dataRequestToModel.needApplyValueFromScale = { name: '', value: element.innerText };
  }

  private handleToToggleChange(event: Event): void {
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

  private handlePlaneToggleChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.basicSettings.vertical = element.checked;
    this.slider.changePlane(this.basicSettings.vertical);
    this.handles.changePlane(this.basicSettings.vertical);
    this.valuesScale.changePlane(this.basicSettings.vertical);
  }

  private handleValueScaleToggleChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.basicSettings.valueScale = element.checked;
    this.valuesScale.hideValueScale(this.basicSettings.valueScale);
  }

  private handleHandleValuesChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.basicSettings.handlesValues = element.checked;
    this.handles.hideHandelValues(this.basicSettings.handlesValues);
  }

  private handleValueInputChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;
    let target: string;

    if (element === this.sideMenu.sideMenuElements.fromInput) {
      target = 'from';
    } else {
      target = 'to';
    }

    this.dataRequestToModel.needApplyNewValue = { name: target, value: element.value };
  }

  private handleStepInputChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.basicSettings.step = Number(element.value);
    this.dataRequestToModel.needStepWidth = { name: '', value: 'true' };
  }

  private handleRangeInputChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;
    let target: string;

    if (element === this.sideMenu.sideMenuElements.minimumInput) {
      target = 'min';
    } else {
      target = 'max';
    }

    this.dataRequestToModel.needChangeSliderValuesRange = { name: target, value: element.value };
  }
}
