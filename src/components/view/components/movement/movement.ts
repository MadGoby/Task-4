import autobind from 'autobind-decorator';
import { BasicViewSettings } from '../../types';
import {
  HandleClickData,
  HandlesPosition,
  MovementEvent,
  MovementSettings,
  TestMouseEvent,
} from './types';

@autobind
export class Movement {
  readonly slider: HTMLDivElement;

  readonly from: HTMLSpanElement;

  readonly to: HTMLSpanElement;

  readonly settings: BasicViewSettings;

  readonly interval: HTMLDivElement;

  public stepWidth: string | boolean;

  public positions: HandlesPosition;

  private dataForMovement: HandleClickData;

  constructor(settings: MovementSettings) {
    this.slider = settings.slider;
    this.from = settings.fromHandel;
    this.to = settings.toHandel;
    this.settings = settings.basicSettings;
    this.interval = settings.interval;
    this.positions = { from: 0, to: 0 };
    if (!this.settings.step) {
      this.stepWidth = false;
    } else {
      this.stepWidth = '';
    }
    this.dataForMovement = {
      distanceToCursor: 0,
      target: this.from,
    };
  }

  isToBiggerThanRightEdge(rightSliderEdge: number, newPosition: number): boolean {
    return newPosition > rightSliderEdge && this.dataForMovement.target === this.to;
  }

  isFromBiggerThanRightEdge(rightSliderEdge: number, newPosition: number): boolean {
    return newPosition > rightSliderEdge && this.dataForMovement.target === this.from;
  }

  isDouble(): boolean {
    return this.settings.double;
  }

  isFromBiggerThanTo(newPosition: number): boolean {
    return (this.dataForMovement.target === this.from)
      && (newPosition > this.positions.to - this.dataForMovement.target.offsetWidth);
  }

  isToSmallerThanFrom(newPosition: number): boolean {
    return (this.dataForMovement.target === this.to)
      && (newPosition < this.positions.from + this.dataForMovement.target.offsetWidth);
  }

  isStepSetCorrectly(): boolean {
    return (this.settings.step !== false) && (typeof this.stepWidth === 'string') && (Number(this.stepWidth) >= 1);
  }

  isStepWidthPassed(difference: number): boolean {
    return Math.abs(difference) >= Number(this.stepWidth);
  }

  correctsImpossiblePosition(rightSliderEdge: number, newPosition: number): number {
    let value: number = newPosition;

    const correctDoublePositions = (): void => {
      if (this.isFromBiggerThanTo(newPosition)) value = this.positions.to - this.dataForMovement.target.offsetWidth;
      if (this.isToSmallerThanFrom(newPosition)) value = this.positions.from + this.dataForMovement.target.offsetWidth;
      if (this.isToBiggerThanRightEdge(rightSliderEdge, newPosition)) value = rightSliderEdge;
    };

    if (newPosition < 0) value = 0;
    if (this.isFromBiggerThanRightEdge(rightSliderEdge, newPosition)) value = rightSliderEdge;
    if (this.isDouble()) {
      correctDoublePositions();
    }

    return value;
  }

  applyNewPosition(newPosition: number): void {
    this.dataForMovement.target.style.left = `${newPosition}px`;
    if (this.dataForMovement.target === this.from) {
      this.positions.from = newPosition;
    } else {
      this.positions.to = newPosition;
    }
    this.interval.style.left = `${(this.positions.from + (this.dataForMovement.target.offsetWidth / 2))}px`;
    this.interval.style.right = `${(this.slider.offsetWidth - this.positions.to)
      - (this.dataForMovement.target.offsetWidth / 2)}px`;
  }

  isEdgePosition(newPosition: number): boolean {
    return (newPosition === 0) || (newPosition === this.slider.offsetWidth - this.dataForMovement.target.offsetWidth);
  }

  controlStepMovement(newPosition: number, targetPosition: number): void {
    const difference = newPosition - targetPosition;

    if (this.isEdgePosition(newPosition)) {
      this.applyNewPosition(newPosition);
    } else if (this.isStepWidthPassed(difference)) {
      const stepPosition = targetPosition + Number(this.stepWidth) * (Math.trunc(difference / Number(this.stepWidth)));
      this.applyNewPosition(stepPosition);
    }
  }

  public handleDocumentMouseMove(event: MouseEvent | TestMouseEvent): void {
    const x = event.clientX;
    const y = event.clientY;
    const rightSliderEdge: number = this.slider.offsetWidth - this.dataForMovement.target.offsetWidth;
    let targetPosition: number;

    if (this.dataForMovement.target === this.from) {
      targetPosition = this.positions.from;
    } else {
      targetPosition = this.positions.to;
    }

    let newPosition: number;

    if (this.settings.vertical) {
      newPosition = this.slider.offsetWidth - (
        y - this.dataForMovement.distanceToCursor - this.slider.getBoundingClientRect().top
      );
    } else {
      newPosition = x - this.dataForMovement.distanceToCursor - this.slider.getBoundingClientRect().left;
    }

    newPosition = this.correctsImpossiblePosition(rightSliderEdge, newPosition);

    if (this.isStepSetCorrectly()) {
      this.controlStepMovement(newPosition, targetPosition);
    } else {
      this.applyNewPosition(newPosition);
    }
  }

  public handelListener(setting: MovementEvent): void {
    const {
      eventInfo = {
        x: 0,
        y: 0,
        target: false,
      },
      test = false,
    } = setting;
    const isTargetFrom = (eventInfo.target === this.from);

    let target: HTMLSpanElement;

    if (isTargetFrom) {
      target = this.from;
    } else {
      target = this.to;
    }

    let distanceToCursor: number;
    if (this.settings.vertical) {
      distanceToCursor = eventInfo.y - target.getBoundingClientRect().top - target.offsetWidth;
    } else {
      distanceToCursor = eventInfo.x - target.getBoundingClientRect().left;
    }

    if (test) {
      this.handleDocumentMouseMove({
        clientX: test.x,
        clientY: test.y,
      });
    }

    this.dataForMovement = {
      target,
      distanceToCursor,
    };

    this.bindEventListeners();
  }

  private removeEventListeners(): void {
    document.removeEventListener('mousemove', this.handleDocumentMouseMove);
    document.removeEventListener('mouseup', this.handleDocumentMouseUp);
  }

  private handleDocumentMouseUp(): void {
    this.removeEventListeners();
  }

  private bindEventListeners(): void {
    document.addEventListener('mousemove', this.handleDocumentMouseMove);
    document.addEventListener('mouseup', this.handleDocumentMouseUp);
  }
}
