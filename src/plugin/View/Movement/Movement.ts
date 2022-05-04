import autobind from 'autobind-decorator';
import {
  BasicViewSettings,
} from '../types';
import {
  HandleClickData,
  MovementEvent,
  MovementSettings,
} from './types';
import { Handles } from '../Handles/Handles';

@autobind
export class Movement {
  readonly slider: HTMLDivElement;

  private readonly handles: Handles;

  readonly basicSettings: BasicViewSettings;

  private handleClickData: HandleClickData;

  public movementSettings: MovementSettings;

  constructor(settings: MovementSettings) {
    this.slider = settings.slider;
    this.handles = settings.handles;
    this.basicSettings = settings.basicSettings;
    this.movementSettings = settings;
    this.handleClickData = {
      target: this.handles.fromHandle,
      distanceToCursor: 0,
    };
  }

  private handleDocumentMouseMove(event: MouseEvent): void {
    const x: number = event.clientX;
    const y: number = event.clientY;
    const newPosition: number = this.basicSettings.vertical
      ? this.slider.offsetWidth - (
        y - Number(this.handleClickData.distanceToCursor) - this.slider.getBoundingClientRect().top)
      : x - Number(this.handleClickData.distanceToCursor) - this.slider.getBoundingClientRect().left;
    const isTargetFrom: boolean = this.handleClickData.target === this.handles.fromHandle;

    this.movementSettings.updatePositions(isTargetFrom, newPosition);
  }

  public handleListener(setting: MovementEvent): void {
    const {
      x = 0,
      y = 0,
      target = false,
    } = setting;
    const isFromHandle: boolean = target === this.handles.fromHandle;
    const targetHandle: HTMLSpanElement = isFromHandle ? this.handles.fromHandle : this.handles.toHandle;
    const distanceToCursor: number = this.basicSettings.vertical
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
