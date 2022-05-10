import autobind from 'autobind-decorator';
import {
  BasicViewSettings,
} from '../types';
import {
  HandleClickData, MovementCalculateData,
  MovementEvent,
  MovementSettings,
} from './types';
import { Handles } from '../Handles/Handles';

@autobind
export class Movement {
  readonly slider: HTMLDivElement;

  private readonly handles: Handles;

  readonly getOptions: () => BasicViewSettings;

  private handleClickData: HandleClickData;

  public movementSettings: MovementSettings;

  constructor(settings: MovementSettings) {
    this.slider = settings.slider;
    this.handles = settings.handles;
    this.getOptions = settings.getOptions;
    this.movementSettings = settings;
    this.handleClickData = {
      target: this.handles.fromHandle,
      distanceToCursor: 0,
    };
  }

  public calculateNewPosition(settings: MovementCalculateData): number {
    const {
      x,
      y,
      distanceToCursor,
    } = settings;

    return this.getOptions().vertical
      ? this.slider.offsetWidth - (
        y - Number(distanceToCursor) - this.slider.getBoundingClientRect().top)
      : x - Number(distanceToCursor) - this.slider.getBoundingClientRect().left;
  }

  private handleDocumentMouseMove(event: MouseEvent): void {
    const x: number = event.clientX;
    const y: number = event.clientY;
    const newPosition: number = this.calculateNewPosition({
      x,
      y,
      distanceToCursor: this.handleClickData.distanceToCursor,
    });
    const isTargetFrom: boolean = this.handleClickData.target === this.handles.fromHandle;
    const target = isTargetFrom ? 'from' : 'to';

    this.movementSettings.environmentLink.updatePositions({
      target,
      newPosition,
    });
  }

  public handleListener(setting: MovementEvent): void {
    const {
      x = 0,
      y = 0,
      target = false,
    } = setting;
    const isFromHandle: boolean = target === this.handles.fromHandle;
    const targetHandle: HTMLSpanElement = isFromHandle ? this.handles.fromHandle : this.handles.toHandle;
    const distanceToCursor: number = this.getOptions().vertical
      ? y - targetHandle.getBoundingClientRect().top - (targetHandle.offsetWidth)
      : x - targetHandle.getBoundingClientRect().left;
    this.handleClickData = {
      target: targetHandle,
      distanceToCursor,
    };

    this.handles.updateMainHandleClass(targetHandle);

    this.bindDocumentEventListeners();
  }

  private removeDocumentEventListeners(): void {
    document.removeEventListener('mousemove', this.handleDocumentMouseMove);
    document.removeEventListener('mouseup', this.handleDocumentMouseUp);
  }

  private handleDocumentMouseUp(): void {
    this.removeDocumentEventListeners();
  }

  private bindDocumentEventListeners(): void {
    document.addEventListener('mousemove', this.handleDocumentMouseMove);
    document.addEventListener('mouseup', this.handleDocumentMouseUp);
  }
}
