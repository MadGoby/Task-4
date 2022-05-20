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
  public readonly movementSettings: MovementSettings;

  private handleClickData: HandleClickData;

  private readonly slider: HTMLDivElement;

  private readonly getOptions: () => BasicViewSettings;

  private readonly handles: Handles;

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

  private handleDocumentMouseMove(event: PointerEvent): void {
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

  private removeDocumentEventListeners(): void {
    document.removeEventListener('pointermove', this.handleDocumentMouseMove);
    document.removeEventListener('pointerup', this.handleDocumentMouseUp);
  }

  private handleDocumentMouseUp(): void {
    this.removeDocumentEventListeners();
  }

  private bindDocumentEventListeners(): void {
    document.addEventListener('pointermove', this.handleDocumentMouseMove);
    document.addEventListener('pointerup', this.handleDocumentMouseUp);
  }
}
