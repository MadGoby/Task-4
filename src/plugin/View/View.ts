import autobind from 'autobind-decorator';
import { Slider } from './Slider/Slider';
import { Handles } from './Handles/Handles';
import { Movement } from './Movement/Movement';
import { SelectedInterval } from './SelectedInterval/SelectedInterval';
import { ValuesScale } from './ValuesScale/ValuesScale';
import {
  DataFromModel,
  BasicViewSettings,
  TargetsForViewUpdate,
  NewHandlesData,
  UpdatePositionsData,
  PassNewValue,
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

  public getOptions: () => BasicViewSettings;

  public passNewValue: PassNewValue = (data: UpdatePositionsData) => data;

  public updatePositions: PassNewValue = (data: UpdatePositionsData) => data;

  public callViewUpdate: (target: string) => string = (target) => target;

  constructor(getOptions: () => BasicViewSettings, target: HTMLElement) {
    this.container = target;
    this.slider = new Slider();
    this.handles = new Handles();
    this.interval = new SelectedInterval();
    this.valuesScale = new ValuesScale(this);
    this.getOptions = getOptions;
    this.movement = new Movement({
      slider: this.slider.slider,
      handles: this.handles,
      interval: this.interval,
      environmentLink: this,
      getOptions: this.getOptions,
    });

    this.prepareSliderForUse();
    this.bindEventListeners();
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

  private prepareSliderForUse(): void {
    this.addSliderToDOM();

    const options: BasicViewSettings = this.getOptions();
    this.updateView({
      vertical: options.vertical,
      double: options.double,
      handlesValues: options.handlesValues,
      valueScale: options.valueScale,
      integer: options.integer,
    });
  }

  public updateView(targets: TargetsForViewUpdate): void {
    const options: BasicViewSettings = this.getOptions();

    if (targets.vertical) {
      this.slider.changePlane({
        isVertical: targets.vertical,
      });
      this.handles.changePlane(targets.vertical);
      this.valuesScale.changePlane(targets.vertical);
    }
    if (!targets.double) {
      this.handles.changeHandlesDisplay({
        isDouble: options.double,
        sliderWidth: this.slider.slider.offsetWidth,
      });
      this.interval.hideSelectedInterval({
        isDouble: options.double,
        handleWidth: this.handles.fromHandle.offsetWidth,
      });
    }
    if (!targets.valueScale) this.valuesScale.changeValueScaleDisplay(options.valueScale);
    if (!targets.handlesValues) this.handles.hideHandlesValues(options.handlesValues);
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

    this.handles.refreshValues(newHandlesData, this.slider.slider.offsetWidth);
    this.interval.refreshIntervalPositions({
      target: settings.target,
      position: newHandlesData.position,
      handleWidth: this.handles.fromHandle.offsetWidth,
      sliderWidth: this.slider.slider.offsetWidth,
    });
  }

  private bindEventListeners(): void {
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

  private handleSliderMouseDown(event: MouseEvent): void {
    const isNotSliderBody = event.target !== this.interval.interval && event.target !== this.slider.slider;
    if (isNotSliderBody) return;

    const halfHandleWidth: number = this.handles.fromHandle.offsetWidth / 2;
    this.updatePositions({
      target: 'unspecified',
      newPosition: this.movement.calculateNewPosition({
        x: event.clientX,
        y: event.clientY,
        distanceToCursor: halfHandleWidth,
      }),
    });
  }

  public handleWindowResize(): void {
    this.callViewUpdate('resize');
  }
}
