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
    this.from = settings.fromHandle;
    this.to = settings.toHandle;
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

  private checkIsToBiggerThanRightEdge(rightSliderEdge: number, newPosition: number): boolean {
    return newPosition > rightSliderEdge && this.dataForMovement.target === this.to;
  }

  private checkIsFromBiggerThanRightEdge(rightSliderEdge: number, newPosition: number): boolean {
    return newPosition > rightSliderEdge && this.dataForMovement.target === this.from;
  }

  private checkIsDouble(): boolean {
    return this.settings.double;
  }

  private checkIsFromBiggerThanTo(newPosition: number): boolean {
    return (this.dataForMovement.target === this.from)
      && (newPosition > this.positions.to - this.dataForMovement.target.offsetWidth);
  }

  private checkIsToSmallerThanFrom(newPosition: number): boolean {
    return (this.dataForMovement.target === this.to)
      && (newPosition < this.positions.from + this.dataForMovement.target.offsetWidth);
  }

  private checkIsStepSetCorrectly(): boolean {
    return (this.settings.step !== false) && (typeof this.stepWidth === 'string') && (Number(this.stepWidth) >= 1);
  }

  checkIsStepWidthPassed(difference: number): boolean {
    return Math.abs(difference) >= Number(this.stepWidth);
  }

  private correctsImpossiblePosition(rightSliderEdge: number, newPosition: number): number {
    let value: number = newPosition;

    const correctDoublePositions = (): void => {
      if (this.checkIsFromBiggerThanTo(newPosition)) value = this.positions.to - this.dataForMovement.target.offsetWidth;
      if (this.checkIsToSmallerThanFrom(newPosition)) {
        value = this.positions.from + this.dataForMovement.target.offsetWidth;
      }
      if (this.checkIsToBiggerThanRightEdge(rightSliderEdge, newPosition)) value = rightSliderEdge;
    };

    if (newPosition < 0) value = 0;
    if (this.checkIsFromBiggerThanRightEdge(rightSliderEdge, newPosition)) value = rightSliderEdge;
    if (this.checkIsDouble()) {
      correctDoublePositions();
    }

    return value;
  }

  private correctsIntervalPosition(): void {
    this.interval.style.left = `${(this.positions.from + (this.dataForMovement.target.offsetWidth / 2))}px`;
    this.interval.style.right = `${(this.slider.offsetWidth - this.positions.to)
    - (this.dataForMovement.target.offsetWidth / 2)}px`;
  }

  private applyNewPosition(newPosition: number): void {
    this.dataForMovement.target.style.left = `${newPosition}px`;
    if (this.dataForMovement.target === this.from) {
      this.positions.from = newPosition;
    } else {
      this.positions.to = newPosition;
    }
    this.correctsIntervalPosition();
  }

  private checkIsEdgePosition(newPosition: number): boolean {
    return (newPosition === 0) || (newPosition === this.slider.offsetWidth - this.dataForMovement.target.offsetWidth);
  }

  private controlStepMovement(newPosition: number, targetPosition: number): void {
    const difference = newPosition - targetPosition;

    switch (true) {
      case this.checkIsEdgePosition(newPosition):
        this.applyNewPosition(newPosition);
        break;
      case this.checkIsStepWidthPassed(difference):
        this.applyNewPosition(
          targetPosition + Number(this.stepWidth) * (Math.trunc(difference / Number(this.stepWidth))),
        );
        break;
      default:
        break;
    }
  }

  private handleDocumentMouseMove(event: MouseEvent | TestMouseEvent): void {
    const x: number = event.clientX;
    const y: number = event.clientY;
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

    if (this.checkIsStepSetCorrectly()) {
      this.controlStepMovement(newPosition, targetPosition);
    } else {
      this.applyNewPosition(newPosition);
    }
  }

  public handleListener(setting: MovementEvent): void {
    const {
      eventInfo = {
        x: 0,
        y: 0,
        target: false,
      },
      test = false,
    } = setting;

    let target: HTMLSpanElement;
    if (eventInfo.target === this.from) {
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
