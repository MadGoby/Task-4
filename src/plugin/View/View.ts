import autobind from 'autobind-decorator';
import { Slider } from './Slider/Slider';
import { Handles } from './Handles/Handles';
import { Movement } from './Movement/Movement';
import { SelectedInterval } from './SelectedInterval/SelectedInterval';
import { ValuesScale } from './ValuesScale/ValuesScale';
import {
  DataFromModel,
  BasicViewSettings,
  NewHandlesData,
  UpdatePositionsData,
  PassNewValue,
} from './types';
import { DataForValueScale } from '../Model/types';

@autobind
export class View {
  public readonly slider: Slider;

  public readonly handles: Handles;

  public readonly valuesScale: ValuesScale;

  public passNewValue: PassNewValue = (data: UpdatePositionsData) => data;

  public updatePositions: PassNewValue = (data: UpdatePositionsData) => data;

  public callViewUpdate: (target: string) => string = (target) => target;

  private readonly container: HTMLElement;

  private readonly movement: Movement;

  private readonly interval: SelectedInterval;

  private readonly getOptions: () => BasicViewSettings;

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
      environmentLink: this,
      getOptions: this.getOptions,
    });
  }

  public initialize(): void {
    this.bindEventListeners();
    this.addSliderToDOM();
    this.updateView();
    this.callViewUpdate('start');
  }

  public updateView(): void {
    const options: BasicViewSettings = this.getOptions();

    this.slider.changePlane(options.vertical);
    this.handles.changePlane(options.vertical);
    this.valuesScale.changePlane(options.vertical);
    this.handles.changeHandlesDisplay({
      isDouble: options.double,
      sliderWidth: this.slider.slider.offsetWidth,
    });
    this.interval.changeIntervalDisplay(options.double);
    this.valuesScale.changeValueScaleDisplay(options.valueScale);
    this.handles.changeHandlesValuesDisplay(options.handlesValues);
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

  private addSliderToDOM(): void {
    this.slider.initializeSliderElements({
      from: this.handles.fromHandle,
      to: this.handles.toHandle,
      interval: this.interval.interval,
      valueScale: this.valuesScale,
    });
    this.container.append(this.slider.mainWrapper);
  }

  private convertValueToPosition(settings: DataFromModel):string {
    const { totalValues, minValue, value } = settings;
    const workRange: number = this.slider.slider.offsetWidth;
    const handleWidth: number = this.handles.fromHandle.offsetWidth;

    return String(((workRange - handleWidth) / totalValues)
        * (Number(value) - Number(minValue)));
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

  private handleWindowResize(): void {
    this.callViewUpdate('resize');
  }

  private bindEventListeners(): void {
    [this.handles.fromHandle, this.handles.toHandle].forEach((handle: HTMLSpanElement):void => {
      handle.addEventListener('mousedown', this.handleHandleMouseDown);
    });
    this.slider.slider.addEventListener('mousedown', this.handleSliderMouseDown);
    window.addEventListener('resize', this.handleWindowResize);
  }
}
