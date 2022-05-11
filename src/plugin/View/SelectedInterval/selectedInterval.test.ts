import { SelectedInterval } from './SelectedInterval';

describe('SelectedInterval', () => {
  let interval: SelectedInterval;

  beforeEach(() => {
    interval = new SelectedInterval();
  });

  it('Interval cal be created', () => {
    expect(interval).toBeTruthy();
  });

  it('refreshIntervalPositions() change position correctly for left side', () => {
    interval.refreshIntervalPositions({
      target: 'from',
      position: '50',
      handleWidth: 20,
      sliderWidth: 120,
    });
    expect(interval.interval.style.left).toEqual('60px');
  });

  it('refreshIntervalPositions() change position correctly for right side', () => {
    interval.refreshIntervalPositions({
      target: 'to',
      position: '50',
      handleWidth: 20,
      sliderWidth: 120,
    });
    expect(interval.interval.style.right).toEqual('60px');
  });

  it('hideSelectedInterval() operates the display function correctly', () => {
    interval.changeIntervalDisplay(false);
    expect(interval.interval).toHaveClass('goby-slider__interval_hidden');
    interval.changeIntervalDisplay(true);
    expect(interval.interval).not.toHaveClass('goby-slider__interval_hidden');
  });
});
