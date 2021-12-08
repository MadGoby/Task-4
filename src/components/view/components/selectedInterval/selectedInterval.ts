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
      this.interval.style.left = `${Number(dataToRefresh.position) + (dataToRefresh.handelWidth / 2)}px`;
    } else {
      this.interval.style.right = `${dataToRefresh.sliderWidth - Number(dataToRefresh.position)
        + (dataToRefresh.handelWidth / 2)}px`;
    }
  }

  private checkIsIntervalNeedHide(isDouble: boolean): boolean {
    return (!isDouble) && (this.interval.style.display === 'block');
  }

  private checkIsIntervalNeedShow(isDouble: boolean): boolean {
    return (isDouble) && (this.interval.style.display === 'none');
  }

  public hideSelectedInterval(settings: IntervalDisplayData): void {
    const { isDouble, handleWidth } = settings;

    switch (true) {
      case this.checkIsIntervalNeedHide(isDouble):
        this.interval.style.display = 'none';
        break;
      case this.checkIsIntervalNeedShow(isDouble):
        this.interval.style.display = 'block';
        this.interval.style.right = `${handleWidth / 2}px`;
        break;
      default:
        break;
    }
  }
}
