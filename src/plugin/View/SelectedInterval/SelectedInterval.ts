import autobind from 'autobind-decorator';
import { IntervalDisplayData, NewIntervalData } from './types';

@autobind
export class SelectedInterval {
  readonly interval: HTMLDivElement;

  private readonly intervalClass: string = 'goby-slider__interval';

  constructor() {
    this.interval = document.createElement('div');
    this.initializeHTMLElement();
  }

  public refreshIntervalPositions(settings: NewIntervalData):void {
    const {
      target,
      position,
      sliderWidth,
      handleWidth,
    } = settings;

    if (target === 'from') {
      this.interval.style.left = `${Number(position) + (handleWidth / 2)}px`;
    } else if (target === 'to') {
      this.interval.style.right = `${(sliderWidth - Number(position)) - (handleWidth / 2)}px`;
    }
  }

  private initializeHTMLElement(): void {
    this.interval.classList.add(this.intervalClass);
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
