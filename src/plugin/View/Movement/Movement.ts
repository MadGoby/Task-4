import autobind from 'autobind-decorator';
import { BasicViewSettings } from '../types';
import {
  HandleClickData,
  HandlesPosition,
  MovementEvent,
  MovementSettings,
} from './types';

@autobind
export class Movement {
  readonly slider: HTMLDivElement;

  readonly from: HTMLSpanElement;

  readonly to: HTMLSpanElement;

  readonly basicSettings: BasicViewSettings;

  readonly interval: HTMLDivElement;

  public stepWidth: string | boolean;

  public positions: HandlesPosition;

  public dataForMovement: HandleClickData;

  constructor(settings: MovementSettings) {
    this.slider = settings.slider;
    this.from = settings.fromHandle;
    this.to = settings.toHandle;
    this.basicSettings = settings.basicSettings;
    this.interval = settings.interval;
    this.positions = { from: 0, to: 100 };
    if (!this.basicSettings.step) {
      this.stepWidth = false;
    } else {
      this.stepWidth = '';
    }
    this.dataForMovement = {
      distanceToCursor: 0,
      target: this.from,
    };
  }

  private checkIsToBiggerThanRightEdge(rightSliderEdge: number, newPosition: number): boolean {
    return newPosition > rightSliderEdge && this.dataForMovement.target === this.to;
  }

  private checkIsFromBiggerThanRightEdge(rightSliderEdge: number, newPosition: number): boolean {
    return newPosition > rightSliderEdge && this.dataForMovement.target === this.from;
  }

  private checkIsDouble(): boolean {
    return this.basicSettings.double;
  }

  private checkIsFromBiggerThanTo(newPosition: number): boolean {
    return (this.dataForMovement.target === this.from)
      && (newPosition > this.positions.to);
  }

  private checkIsToSmallerThanFrom(newPosition: number): boolean {
    return (this.dataForMovement.target === this.to)
      && (newPosition < this.positions.from);
  }

  private checkIsStepSetCorrectly(): boolean {
    const minStepWidth: number = 0.01;
    return (this.basicSettings.step !== false)
      && (typeof this.stepWidth === 'string') && (Number(this.stepWidth) >= minStepWidth);
  }

  private checkIsStepWidthPassed(targetPosition: number, currentPosition: number): boolean {
    const isStepWidthPassed: boolean = Math.abs(targetPosition - currentPosition) >= Number(this.stepWidth);
    const stepRate: number = currentPosition / Number(this.stepWidth);
    const isNotInStepRange: boolean = !Number.isInteger(stepRate);
    const isStepRangePassed: boolean = Math.floor(stepRate) * Number(this.stepWidth) > targetPosition
      || Math.ceil(stepRate) * Number(this.stepWidth) < targetPosition;

    return isStepWidthPassed || (isNotInStepRange && isStepRangePassed);
  }

  public fixImpossiblePosition(rightSliderEdge: number, newPosition: number): number {
    const fixDoublePositions = (position: number): number => {
      if (this.checkIsFromBiggerThanTo(newPosition)) {
        position = this.positions.to;
      }
      if (this.checkIsToSmallerThanFrom(newPosition)) {
        position = this.positions.from;
      }
      if (this.checkIsToBiggerThanRightEdge(rightSliderEdge, newPosition)) position = rightSliderEdge;

      return position;
    };

    const fixPosition = (position: number): number => {
      if (newPosition < 0) position = 0;
      if (this.checkIsFromBiggerThanRightEdge(rightSliderEdge, newPosition)) position = rightSliderEdge;
      if (this.checkIsDouble()) return fixDoublePositions(position);

      return position;
    };

    return fixPosition(newPosition);
  }

  public fixIntervalPosition(): void {
    this.interval.style.left = `${(this.positions.from + (this.dataForMovement.target.offsetWidth / 2))}px`;
    this.interval.style.right = `${(this.slider.offsetWidth - this.positions.to)
    - (this.dataForMovement.target.offsetWidth / 2)}px`;
  }

  private applyNewPosition(newPosition: number): void {
    const { target: targetHandle } = this.dataForMovement;
    targetHandle.style.left = `${newPosition}px`;

    if (this.dataForMovement.target === this.from) {
      this.positions.from = newPosition;
    } else {
      this.positions.to = newPosition;
    }

    this.fixIntervalPosition();
  }

  private checkIsExtremePosition(newPosition: number): boolean {
    return (newPosition === 0) || (newPosition === this.slider.offsetWidth - this.dataForMovement.target.offsetWidth);
  }

  private performStepMovement(newPosition: number, targetPosition: number): void {
    const currentStepWidth: number = newPosition - targetPosition;
    const newTargetPosition: number = targetPosition + Number(this.stepWidth)
      * (Math.trunc(currentStepWidth / Number(this.stepWidth)));

    switch (true) {
      case this.checkIsExtremePosition(newPosition):
        this.applyNewPosition(newPosition);
        break;
      case this.checkIsStepWidthPassed(newPosition, targetPosition):
        this.applyNewPosition(
          Math.round(newTargetPosition / Number(this.stepWidth)) * Number(this.stepWidth),
        );
        break;
      default:
        break;
    }
  }

  updateMainHandleClass(targetHandle: HTMLSpanElement) {
    const className: string = 'goby-slider__handle_type_main';

    if (this.from.classList.contains(className)) this.from.classList.remove(className);
    if (this.to.classList.contains(className)) this.to.classList.remove(className);
    targetHandle.classList.add(className);
  }

  private handleDocumentMouseMove(event: MouseEvent): void {
    const x: number = event.clientX;
    const y: number = event.clientY;
    const rightSliderEdge: number = this.slider.offsetWidth - this.dataForMovement.target.offsetWidth;
    const isFromTarget = this.dataForMovement.target === this.from;
    const targetHandlePosition: number = isFromTarget ? this.positions.from : this.positions.to;
    const newPosition: number = this.basicSettings.vertical
      ? this.slider.offsetWidth - (
        y - this.dataForMovement.distanceToCursor - this.slider.getBoundingClientRect().top)
      : x - this.dataForMovement.distanceToCursor - this.slider.getBoundingClientRect().left;
    const fixedPosition: number = this.fixImpossiblePosition(rightSliderEdge, newPosition);

    if (this.checkIsStepSetCorrectly()) {
      this.performStepMovement(fixedPosition, targetHandlePosition);
    } else {
      this.applyNewPosition(fixedPosition);
    }
  }

  private updateFocusedHandleClass(targetHandle: HTMLSpanElement | false): void {
    const className: string = 'goby-slider__handle_focused';
    const defineActiveHandle = (): HTMLSpanElement => {
      if (this.from.classList.contains(className)) return this.from;
      return this.to;
    };

    if (targetHandle) {
      targetHandle.classList.add(className);
    } else {
      const oldTargetHandle: HTMLSpanElement = defineActiveHandle();
      oldTargetHandle.classList.remove(className);
    }
  }

  public handleListener(setting: MovementEvent): void {
    const {
      eventInfo = {
        x: 0,
        y: 0,
        target: false,
      },
    } = setting;
    const isFromHandle: boolean = eventInfo.target === this.from;
    const isVertical: boolean = this.basicSettings.vertical;
    const targetHandle: HTMLSpanElement = isFromHandle ? this.from : this.to;
    const distanceToCursor: number = isVertical
      ? eventInfo.y - targetHandle.getBoundingClientRect().top - (targetHandle.offsetWidth)
      : eventInfo.x - targetHandle.getBoundingClientRect().left;

    this.updateFocusedHandleClass(targetHandle);
    this.updateMainHandleClass(targetHandle);

    this.dataForMovement = {
      target: targetHandle,
      distanceToCursor,
    };

    this.bindDocumentEventListeners();
  }

  private removeDocumentEventListeners(): void {
    document.removeEventListener('mousemove', this.handleDocumentMouseMove);
    document.removeEventListener('mouseup', this.handleDocumentMouseUp);
  }

  private handleDocumentMouseUp(): void {
    this.removeDocumentEventListeners();
    this.updateFocusedHandleClass(false);
  }

  private bindDocumentEventListeners(): void {
    document.addEventListener('mousemove', this.handleDocumentMouseMove);
    document.addEventListener('mouseup', this.handleDocumentMouseUp);
  }
}
