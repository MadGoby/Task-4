import autobind from 'autobind-decorator';
import { IntervalDisplayData, RefreshIntervalPositions } from './types';

@autobind
export class SelectedInterval {
  readonly interval: HTMLDivElement;

  constructor() {
    this.interval = document.createElement('div');
    this.initializeHTMLElement();
  }

  private initializeHTMLElement(): void {
    this.interval.classList.add('goby-slider__interval');
    this.interval.setAttribute('style', 'display: block');
  }

  public adjustPositionRelativeToValue(dataToRefresh: RefreshIntervalPositions): void {
    if (dataToRefresh.target === 'from') {
      this.interval.style.left = `${Number(dataToRefresh.position) + (dataToRefresh.handleWidth / 2)}px`;
    } else {
      this.interval.style.right = `${dataToRefresh.sliderWidth - Number(dataToRefresh.position)
        + (dataToRefresh.handleWidth / 2)}px`;
    }
  }

  private checkIsIntervalShouldBeHided(isDouble: boolean): boolean {
    return (!isDouble) && (this.interval.style.display === 'block');
  }

  private checkIsIntervalShouldBeShown(isDouble: boolean): boolean {
    return (isDouble) && (this.interval.style.display === 'none');
  }

  public hideSelectedInterval(settings: IntervalDisplayData): void {
    const { isDouble, handleWidth } = settings;

    switch (true) {
      case this.checkIsIntervalShouldBeHided(isDouble):
        this.interval.style.display = 'none';
        break;
      case this.checkIsIntervalShouldBeShown(isDouble):
        this.interval.style.display = 'block';
        this.interval.style.right = `${handleWidth / 2}px`;
        break;
      default:
        break;
    }
  }
}
