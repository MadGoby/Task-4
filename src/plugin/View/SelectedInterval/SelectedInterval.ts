import autobind from 'autobind-decorator';
import { IntervalDisplayData, RefreshIntervalPositions } from './types';

@autobind
export class SelectedInterval {
  readonly interval: HTMLDivElement;

  private readonly intervalClass: string = 'goby-slider__interval';

  constructor() {
    this.interval = document.createElement('div');
    this.initializeHTMLElement();
  }

  private initializeHTMLElement(): void {
    this.interval.classList.add(this.intervalClass);
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
    return (!isDouble) && (!this.interval.classList.contains(`${this.intervalClass}_hidden`));
  }

  private checkIsIntervalShouldBeShown(isDouble: boolean): boolean {
    return (isDouble) && (this.interval.classList.contains(`${this.intervalClass}_hidden`));
  }

  public hideSelectedInterval(settings: IntervalDisplayData): void {
    const { isDouble, handleWidth } = settings;

    switch (true) {
      case this.checkIsIntervalShouldBeHided(isDouble):
        this.interval.classList.add(`${this.intervalClass}_hidden`);
        break;
      case this.checkIsIntervalShouldBeShown(isDouble):
        this.interval.classList.remove(`${this.intervalClass}_hidden`);
        this.interval.style.right = `${handleWidth / 2}px`;
        break;
      default:
        break;
    }
  }
}
