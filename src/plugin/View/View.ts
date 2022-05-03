import autobind from 'autobind-decorator';
import { Slider } from './Slider/Slider';
import { Handles } from './Handles/Handles';
import { Movement } from './Movement/Movement';
import { SelectedInterval } from './SelectedInterval/SelectedInterval';
import { ValuesScale } from './ValuesScale/ValuesScale';
import { SideMenu } from './SideMenu/SideMenu';
import {
  RefreshData,
  BasicViewSettings,
  TargetsForViewUpdate,
  ViewRequestsData,
} from './types';
import { HandlesOverlaps } from './Handles/types';

@autobind
export class View {
  readonly container: HTMLElement;

  readonly slider: Slider;

  readonly handles: Handles;

  readonly movement: Movement;

  readonly interval: SelectedInterval;

  readonly valuesScale: ValuesScale;

  readonly sideMenu: SideMenu;

  public basicSettings: BasicViewSettings;

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
    this.basicSettings = settings;
    this.movement = new Movement({
      slider: this.slider.slider,
      fromHandle: this.handles.fromHandle,
      toHandle: this.handles.toHandle,
      interval: this.interval.interval,
      basicSettings: this.basicSettings,
    });
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

    if (typeof this.basicSettings.sideMenu === 'string') {
      document.querySelector(this.basicSettings.sideMenu)?.append(this.sideMenu.sideMenuElements.sideMenuContainer);
    } else {
      this.slider.mainWrapper.append(this.sideMenu.sideMenuElements.sideMenuContainer);
    }
  }

  private checkIsStepRequired(): boolean {
    return Object.prototype.hasOwnProperty.call(this.basicSettings, 'step')
      && typeof this.basicSettings.step === 'number';
  }

  public prepareSliderForUse(): void {
    this.addSliderToDOM();

    if (this.basicSettings.sideMenu) this.addSideMenuToDOM();

    this.requests.needDataForScale = { name: '', value: 'true' };
    this.requests.needDataForStartPosition = { name: '', value: 'true' };

    if (this.checkIsStepRequired()) this.requests.needStepWidth = { name: '', value: 'true' };

    this.updateView({
      vertical: this.basicSettings.vertical,
      double: this.basicSettings.double,
      sideMenu: this.basicSettings.sideMenu,
      handlesValues: this.basicSettings.handlesValues,
      valueScale: this.basicSettings.valueScale,
      integer: this.basicSettings.integer,
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
        isDouble: this.basicSettings.double,
        positions: this.movement.positions,
        sliderWidth: this.slider.slider.offsetWidth,
      });
      this.interval.hideSelectedInterval({
        isDouble: this.basicSettings.double,
        handleWidth: this.handles.fromHandle.offsetWidth,
      });
      this.sideMenu.changeToValuesDisplay(this.basicSettings.double);
    }
    if (!targets.valueScale) this.valuesScale.changeValueScaleDisplay(this.basicSettings.valueScale);
    if (!targets.handlesValues) this.handles.hideHandlesValues(this.basicSettings.handlesValues);
    if (targets.sideMenu) this.turnOnMenuToggles(targets);
  }

  public refreshValues(settings: RefreshData): void {
    const isTargetNotRange: boolean = settings.target !== 'min' && settings.target !== 'max';
    const handlesOverlapsData: HandlesOverlaps = {
      positions: this.movement.positions,
      isDouble: this.basicSettings.double,
      sliderWidth: this.slider.slider.offsetWidth,
    };
    const handlesRefreshResult: boolean = isTargetNotRange
      ? this.handles.refreshValues(settings)
      : true;

    const isNeedSideMenuUpdate = handlesRefreshResult && this.basicSettings.sideMenu;
    if (isNeedSideMenuUpdate) this.sideMenu.refreshValues(settings);
  }

  public bindEventListeners(): void {
    Object.values(this.valuesScale).forEach((scaleValue: HTMLSpanElement): void => {
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
      eventInfo: {
        target,
        x: event.clientX,
        y: event.clientY,
      },
    });
  }

  private handleScaleValueClick(event: Event): void {
    const element: HTMLSpanElement = event.target as HTMLSpanElement;
    this.requests.needApplyValueFromScale = { name: '', value: element.innerText };
  }

  private handleToToggleChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.basicSettings.double = element.checked;
    this.handles.changeHandlesDisplay({
      isDouble: this.basicSettings.double,
      positions: this.movement.positions,
      sliderWidth: this.slider.slider.offsetWidth,
    });
    this.interval.hideSelectedInterval({
      isDouble: this.basicSettings.double,
      handleWidth: this.handles.fromHandle.offsetWidth,
    });
    this.sideMenu.changeToValuesDisplay(this.basicSettings.double);
  }

  private handlePlaneToggleChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.basicSettings.vertical = element.checked;
    this.slider.changePlane({
      isVertical: this.basicSettings.vertical,
      isStep: this.checkIsStepRequired(),
      requests: this.requests,
    });
    this.handles.changePlane(this.basicSettings.vertical);
    this.valuesScale.changePlane(this.basicSettings.vertical);
  }

  private handleValueScaleToggleChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.basicSettings.valueScale = element.checked;
    this.valuesScale.changeValueScaleDisplay(this.basicSettings.valueScale);
  }

  private handleHandleValuesChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.basicSettings.handlesValues = element.checked;
    this.handles.hideHandlesValues(this.basicSettings.handlesValues);
  }

  private handleValueInputChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;
    const isTargetFrom: boolean = element === this.sideMenu.sideMenuElements.fromInput;
    const inputTarget: string = isTargetFrom ? 'from' : 'to';

    this.requests.needApplyNewValue = { name: inputTarget, value: element.value };
  }

  private handleStepInputChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    this.basicSettings.step = Number(element.value);
    if (element.value === '0') {
      (this.sideMenu.sideMenuElements.stepInput as HTMLInputElement).value = '';
      this.basicSettings.step = false;
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

    this.basicSettings.integer = element.checked;
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

    const targetPosition: number = this.basicSettings.vertical ? verticalPosition : horizontalPosition;
    const targetHandle: HTMLSpanElement = this.handles.defineHandleToMove({
      targetPosition,
      positions: this.movement.positions,
      isDouble: this.basicSettings.double,
    });
    this.movement.dataForMovement.target = targetHandle;
    const correctedValue: number = this.movement.fixImpossiblePosition(
      this.slider.slider.offsetWidth - targetHandle.offsetWidth,
      targetPosition,
    );
    this.handles.acceptNewPosition({
      target: targetHandle,
      value: correctedValue,
      positions: this.movement.positions,
    });
    this.movement.fixIntervalPosition();
  }

  private handleWindowResize(): void {
    this.requests.needDataForScale = { name: '', value: 'true' };
    this.requests.needDataForStartPosition = { name: '', value: 'true' };
    if (this.checkIsStepRequired()) this.requests.needStepWidth = { name: '', value: 'true' };
  }
}
