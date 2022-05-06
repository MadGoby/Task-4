import autobind from 'autobind-decorator';
import { Slider } from './Slider/Slider';
import { Handles } from './Handles/Handles';
import { Movement } from './Movement/Movement';
import { SelectedInterval } from './SelectedInterval/SelectedInterval';
import { ValuesScale } from './ValuesScale/ValuesScale';
import { SideMenu } from './SideMenu/SideMenu';
import {
  DataFromModel,
  BasicViewSettings,
  TargetsForViewUpdate,
  ViewRequestsData, HandlePositions, NewHandlesData,
} from './types';
import { DataForValueScale } from '../Model/types';

@autobind
export class View {
  readonly container: HTMLElement;

  readonly slider: Slider;

  readonly handles: Handles;

  readonly movement: Movement;

  readonly interval: SelectedInterval;

  readonly valuesScale: ValuesScale;

  readonly sideMenu: SideMenu;

  public settings: BasicViewSettings;

  public positions: HandlePositions;

  public requests: ViewRequestsData = {
    needDataForScale: { name: '', value: '' },
    needDataForStartPosition: { name: '', value: '' },
    needStepWidth: { name: '', value: '' },
    needApplyValueFromScale: { name: '', value: '' },
    needApplyNewValue: { name: '', value: '' },
    needChangeSliderValuesRange: { name: '', value: '' },
  };

  constructor(settings: BasicViewSettings, target: HTMLElement) {
    this.container = target;
    this.slider = new Slider();
    this.handles = new Handles();
    this.interval = new SelectedInterval();
    this.valuesScale = new ValuesScale();
    this.sideMenu = new SideMenu();
    this.settings = settings;
    this.positions = {
      from: 0,
      to: 100,
    };
    this.movement = new Movement({
      slider: this.slider.slider,
      handles: this.handles,
      interval: this.interval,
      updatePositions: this.updatePositions,
      basicSettings: this.settings,
    });

    this.prepareSliderForUse();
    this.bindEventListeners();
  }

  updatePositions(isTargetFrom: boolean, newPosition: number): void {
    if (isTargetFrom) {
      this.positions.from = newPosition;
    } else {
      this.positions.to = newPosition;
    }
  }

  private addSliderToDOM(): void {
    this.slider.initializeSliderElements({
      from: this.handles.fromHandle,
      to: this.handles.toHandle,
      interval: this.interval.interval,
      valueScale: this.valuesScale,
    });
    this.container.append(this.slider.mainWrapper);
  }

  private addSideMenuToDOM(): void {
    this.sideMenu.collectSideMenu();

    if (typeof this.settings.sideMenu === 'string') {
      document.querySelector(this.settings.sideMenu)?.append(this.sideMenu.sideMenuElements.sideMenuContainer);
    } else {
      this.slider.mainWrapper.append(this.sideMenu.sideMenuElements.sideMenuContainer);
    }
  }

  private checkIsStepRequired(): boolean {
    return Object.prototype.hasOwnProperty.call(this.settings, 'step')
      && typeof this.settings.step === 'number';
  }

  private prepareSliderForUse(): void {
    this.addSliderToDOM();

    if (this.settings.sideMenu) this.addSideMenuToDOM();

    this.requests.needDataForScale = { name: '', value: 'true' };
    this.requests.needDataForStartPosition = { name: '', value: 'true' };

    if (this.checkIsStepRequired()) this.requests.needStepWidth = { name: '', value: 'true' };

    this.updateView({
      vertical: this.settings.vertical,
      double: this.settings.double,
      sideMenu: this.settings.sideMenu,
      handlesValues: this.settings.handlesValues,
      valueScale: this.settings.valueScale,
      integer: this.settings.integer,
    });
  }

  private turnOnMenuToggles(targets: TargetsForViewUpdate): void {
    if (targets.vertical) (this.sideMenu.sideMenuElements.planeToggle as HTMLInputElement).checked = true;
    if (targets.double) (this.sideMenu.sideMenuElements.toToggle as HTMLInputElement).checked = true;
    if (targets.handlesValues) (this.sideMenu.sideMenuElements.handleValuesToggle as HTMLInputElement).checked = true;
    if (targets.valueScale) (this.sideMenu.sideMenuElements.valueScaleToggle as HTMLInputElement).checked = true;
    if (targets.integer) (this.sideMenu.sideMenuElements.integerToggle as HTMLInputElement).checked = true;
  }

  public updateView(targets: TargetsForViewUpdate): void {
    if (targets.vertical) {
      this.slider.changePlane({
        isVertical: targets.vertical,
        isStep: this.checkIsStepRequired(),
        requests: this.requests,
      });
      this.handles.changePlane(targets.vertical);
      this.valuesScale.changePlane(targets.vertical);
    }
    if (!targets.double) {
      this.handles.changeHandlesDisplay({
        isDouble: this.settings.double,
        positions: this.positions,
        sliderWidth: this.slider.slider.offsetWidth,
      });
      this.interval.hideSelectedInterval({
        isDouble: this.settings.double,
        handleWidth: this.handles.fromHandle.offsetWidth,
      });
      this.sideMenu.changeToValuesDisplay(this.settings.double);
    }
    if (!targets.valueScale) this.valuesScale.changeValueScaleDisplay(this.settings.valueScale);
    if (!targets.handlesValues) this.handles.hideHandlesValues(this.settings.handlesValues);
    if (targets.sideMenu) this.turnOnMenuToggles(targets);
  }

  private convertValueToPosition(settings: DataFromModel):string {
    const { totalValues, minValue, value } = settings;
    const workRange: number = this.slider.slider.offsetWidth;
    const handleWidth: number = this.handles.fromHandle.offsetWidth;

    return String(((workRange - handleWidth) / totalValues)
        * (Number(value) - Number(minValue)));
  }

  public refreshValueScale(values: DataForValueScale): void {
    this.valuesScale.refreshValueScale(values);
    this.valuesScale.centerValues(
      this.slider.slider.offsetWidth - this.handles.fromHandle.offsetWidth,
      this.handles.fromHandle.offsetWidth,
    );
  }

  public refreshHandleValues(settings: DataFromModel): void {
    const newHandlesData: NewHandlesData = {
      target: settings.target,
      value: settings.value,
      isToFixed: settings.isToFixed,
      position: this.convertValueToPosition(settings),
    };

    this.handles.refreshValues(newHandlesData);
    this.interval.refreshIntervalPositions({
      target: settings.target,
      position: newHandlesData.position,
      handleWidth: this.handles.fromHandle.offsetWidth,
      sliderWidth: this.slider.slider.offsetWidth,
    });
  }

  private bindEventListeners(): void {
    this.valuesScale.values.forEach((scaleValue: HTMLSpanElement): void => {
      scaleValue.addEventListener('click', this.handleScaleValueClick);
    });
    this.sideMenu.sideMenuElements.toToggle.addEventListener('change', this.handleToToggleChange);
    this.sideMenu.sideMenuElements.planeToggle.addEventListener('change', this.handlePlaneToggleChange);
    this.sideMenu.sideMenuElements.valueScaleToggle.addEventListener('change', this.handleValueScaleToggleChange);
    this.sideMenu.sideMenuElements.handleValuesToggle.addEventListener('change', this.handleHandleValuesChange);
    this.sideMenu.sideMenuElements.integerToggle.addEventListener('change', this.handleIntegerToggleChange);
    [this.sideMenu.sideMenuElements.fromInput, this.sideMenu.sideMenuElements.toInput].forEach(
      (valueInput: HTMLElement): void => {
        valueInput.addEventListener('change', this.handleValueInputChange);
      },
    );
    [this.sideMenu.sideMenuElements.minimumInput, this.sideMenu.sideMenuElements.maximumInput].forEach(
      (rangeInput: HTMLElement): void => {
        rangeInput.addEventListener('change', this.handleRangeInputChange);
      },
    );
    this.sideMenu.sideMenuElements.stepInput.addEventListener('change', this.handleStepInputChange);
    [this.handles.fromHandle, this.handles.toHandle].forEach((handle: HTMLSpanElement):void => {
      handle.addEventListener('mousedown', this.handleHandleMouseDown);
    });
    this.slider.slider.addEventListener('mousedown', this.handleSliderMouseDown);
    window.addEventListener('resize', this.handleWindowResize);
  }

  private handleHandleMouseDown(event: MouseEvent): void {
    const target: HTMLSpanElement = event.target as HTMLSpanElement;
    this.movement.handleListener({
      target,
      x: event.clientX,
      y: event.clientY,
    });
  }

  private handleScaleValueClick(event: Event): void {
    const element: HTMLSpanElement = event.target as HTMLSpanElement;
    this.requests.needApplyValueFromScale = { name: '', value: element.innerText };
  }

  private handleToToggleChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.settings.double = element.checked;
    this.handles.changeHandlesDisplay({
      isDouble: this.settings.double,
      positions: this.positions,
      sliderWidth: this.slider.slider.offsetWidth,
    });
    this.interval.hideSelectedInterval({
      isDouble: this.settings.double,
      handleWidth: this.handles.fromHandle.offsetWidth,
    });
  }

  private handlePlaneToggleChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.settings.vertical = element.checked;
    this.slider.changePlane({
      isVertical: this.settings.vertical,
      isStep: this.checkIsStepRequired(),
      requests: this.requests,
    });
    this.handles.changePlane(this.settings.vertical);
    this.valuesScale.changePlane(this.settings.vertical);
  }

  private handleValueScaleToggleChange(): void {
    this.valuesScale.changeValueScaleDisplay(this.settings.valueScale);
  }

  private handleHandleValuesChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.settings.handlesValues = element.checked;
    this.handles.hideHandlesValues(this.settings.handlesValues);
  }

  private handleValueInputChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;
    const isTargetFrom: boolean = element === this.sideMenu.sideMenuElements.fromInput;
    const inputTarget: string = isTargetFrom ? 'from' : 'to';

    this.requests.needApplyNewValue = { name: inputTarget, value: element.value };
  }

  private handleStepInputChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.settings.step = Number(element.value);
    if (element.value === '0') {
      (this.sideMenu.sideMenuElements.stepInput as HTMLInputElement).value = '';
      this.settings.step = false;
    } else {
      this.requests.needStepWidth = { name: '', value: 'true' };
    }
  }

  private handleRangeInputChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;
    const inTargetMinInput: boolean = element === this.sideMenu.sideMenuElements.minimumInput;
    const inputTarget: string = inTargetMinInput ? 'min' : 'max';

    this.requests.needChangeSliderValuesRange = { name: inputTarget, value: element.value };
  }

  private handleIntegerToggleChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.settings.integer = element.checked;
    this.requests.needDataForStartPosition = { name: '', value: 'true' };
  }

  private handleSliderMouseDown(event: MouseEvent): void {
    const isNotSliderBody = event.target !== this.interval.interval && event.target !== this.slider.slider;
    const horizontalPosition: number = (
      event.clientX - this.slider.slider.getBoundingClientRect().x - (this.handles.fromHandle.offsetWidth / 2)
    );
    const verticalPosition: number = this.slider.slider.offsetWidth - (
      event.clientY - this.slider.slider.getBoundingClientRect().y + (this.handles.fromHandle.offsetWidth / 2)
    );
    if (isNotSliderBody) return;

    const targetPosition: number = this.settings.vertical ? verticalPosition : horizontalPosition;
    const targetHandle: HTMLSpanElement = this.handles.defineHandleToMove({
      targetPosition,
      positions: this.positions,
      isDouble: this.settings.double,
    });
    this.handles.acceptNewPosition({
      target: targetHandle,
      value: targetPosition,
      positions: this.positions,
    });
  }

  private handleWindowResize(): void {
    this.requests.needDataForScale = { name: '', value: 'true' };
    this.requests.needDataForStartPosition = { name: '', value: 'true' };
    if (this.checkIsStepRequired()) this.requests.needStepWidth = { name: '', value: 'true' };
  }
}
