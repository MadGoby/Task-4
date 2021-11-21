'use strict';

import { IntervalDisplayData, RefreshIntervalPositions } from './types';

export class SelectedInterval {
  readonly interval: HTMLDivElement;

  constructor() {
    this.interval = document.createElement('div');
    this.interval.classList.add('cs-slider__interval');
    this.interval.setAttribute('style', 'display: block');
  }

  public adjustPositionRelativeValue(dataToRefresh: RefreshIntervalPositions): void {
    if (dataToRefresh.target === 'from') {
      this.interval.style.left = String(Number(dataToRefresh.position) + (dataToRefresh.handelWidth / 2)) + 'px';
    } else {
      this.interval.style.right = String(dataToRefresh.sliderWidth - Number(dataToRefresh.position)
        + (dataToRefresh.handelWidth / 2)) + 'px';
    }
  }

  private isIntervalNeedHide(isDouble: boolean): boolean {
    return (!isDouble) && (this.interval.style.display === 'block');
  }

  private isIntervalNeedShow(isDouble: boolean): boolean {
    return (isDouble) && (this.interval.style.display === 'none');
  }

  public hideSelectedInterval(settings: IntervalDisplayData): void {
    const { isDouble, handleWidth } = settings;

    if (this.isIntervalNeedHide(isDouble)) {
      this.interval.style.display = 'none';
    } else if (this.isIntervalNeedShow(isDouble)) {
      this.interval.style.display = 'block';
      this.interval.style.right = String((handleWidth / 2)) + 'px';
    }
  }
}
