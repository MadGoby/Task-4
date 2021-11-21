'use strict';

import { BasicViewSettings } from '../../types';
import {
  HandlesPosition,
  MovementEvent,
  MovementSettings,
  TestMouseEvent,
} from './types';

export class Movement {
  readonly slider: HTMLDivElement;

  readonly from: HTMLSpanElement;

  readonly to: HTMLSpanElement;

  readonly settings: BasicViewSettings;

  readonly interval: HTMLDivElement;

  public stepWidth: string | boolean;

  public positions: HandlesPosition;

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
  }

  public handleDocumentMouseMove(event: MouseEvent | TestMouseEvent): void {
    console.log(event, this);
    // const x = event.clientX;
    // const y = event.clientY;
    // const rightSliderEdge: number = this.slider.offsetWidth - target.offsetWidth;
    // let newPosition: number;
    // let targetPosition: number;
    //
    // if (target == this.from) ? targetPosition = that.positions.from : targetPosition = that.positions.to;
    //
    // if (that.settings.vertical) {
    //   newPosition = that.slider.offsetWidth - (y - distanceToCursor - that.slider.getBoundingClientRect().top);
    // } else {
    //   newPosition = x - distanceToCursor - that.slider.getBoundingClientRect().left;
    // }
    //
    // function isToBiggerThanRightEdge(): boolean {
    //   return newPosition > rightSliderEdge && target == that.to;
    // }
    // function isFromBiggerThanRightEdge(): boolean {
    //   return newPosition > rightSliderEdge && target == that.from;
    // }
    // function isDouble(): boolean {
    //   return that.settings.double;
    // }
    // function isFromBiggerThanTo(): boolean {
    //   return target == that.from && newPosition > that.positions.to - target.offsetWidth;
    // }
    // function isToSmallerThanFrom(): boolean {
    //   return target == that.to && newPosition < that.positions.from + target.offsetWidth;
    // }
    // function isStepSetCorrectly(): boolean {
    //   return that.settings.step !== false && typeof that.stepWidth === 'string' && +that.stepWidth >= 1;
    // }
    // function isStepWidthPassed(difference: number): boolean {
    //   return Math.abs(difference) >= +that.stepWidth;
    // }
    // function correctsImpossiblePosition(): void {
    //   if (newPosition < 0) newPosition = 0;
    //   if (isFromBiggerThanRightEdge()) newPosition = rightSliderEdge;
    //   if (isDouble()) {
    //     if (isFromBiggerThanTo()) newPosition = that.positions.to - target.offsetWidth;
    //     if (isToSmallerThanFrom()) newPosition = that.positions.from + target.offsetWidth;
    //     if (isToBiggerThanRightEdge()) newPosition = rightSliderEdge;
    //   }
    // }
    //
    // correctsImpossiblePosition();
    //
    // function applyNewPosition(): void {
    //   target.style.left = newPosition + 'px';
    //   target == that.from ? that.positions.from = newPosition : that.positions.to = newPosition;
    //   that.interval.style.left = String(that.positions.from + (target.offsetWidth / 2)) + 'px';
    //   that.interval.style.right = String(
    //   (that.slider.offsetWidth - that.positions.to) - (target.offsetWidth / 2)
    //   ) + 'px';
    // }
    //
    // if (isStepSetCorrectly()) {
    //   if (newPosition == 0 || newPosition == that.slider.offsetWidth - target.offsetWidth) {
    //     applyNewPosition();
    //   } else {
    //     let difference = newPosition - targetPosition;
    //     if (isStepWidthPassed(difference)) {
    //       if (Math.abs(difference) > +that.stepWidth) {
    //         newPosition = targetPosition + +that.stepWidth * (Math.trunc(difference / +that.stepWidth));
    //         applyNewPosition();
    //       }
    //     }
    //   }
    // } else {
    //   applyNewPosition();
    // }
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
