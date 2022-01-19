import { Handles } from '../../src/components/view/components/handles/Handles';
import { Movement } from '../../src/components/view/components/movement/Movement';
import { SelectedInterval } from '../../src/components/view/components/selectedInterval/SelectedInterval';
import { Slider } from '../../src/components/view/components/slider/Slider';

describe('Movement', () => {
  let movement: Movement;

  beforeEach(() => {
    movement = new Movement({
      basicSettings: {
        'side-menu': true,
        double: true,
        handlesValues: true,
        step: false,
        valueScale: true,
        vertical: false,
        integer: true,
      },
      fromHandle: new Handles().fromHandle,
      toHandle: new Handles().toHandle,
      slider: new Slider().slider,
      interval: new SelectedInterval().interval,
    });
    movement.positions = { from: 30, to: 70 };
    document.querySelector('body')?.append(movement.slider, movement.from, movement.to);
    movement.slider.style.width = '120px';
    movement.from.style.width = '20px';
    movement.to.style.width = '20px';
    movement.slider.style.position = 'absolute';
    movement.slider.style.left = '0px';
    movement.slider.style.top = '0px';
    movement.from.style.position = 'absolute';
    movement.from.style.left = '0px';
    movement.from.style.top = '0px';
    movement.to.style.position = 'absolute';
    movement.to.style.left = '0px';
    movement.to.style.top = '0px';
  });

  afterEach(() => {
    movement.slider.remove();
    movement.from.remove();
    movement.to.remove();
  });

  it('Movement can be create', () => {
    expect(movement).toBeTruthy();
  });

  it('handelListener() move from and interval to '
    + 'position bigger than right edge and record the position after fixing', () => {
    movement.settings.double = false;
    movement.handleListener({ eventInfo: { target: movement.from, x: 50, y: 0 }, test: { x: 200, y: 0 } });

    expect(movement.from.style.left).toEqual('100px');
    expect(movement.interval.style.left).toEqual('110px');
    expect(movement.positions.from).toEqual(100);
  });

  it('handelListener() move from and interval to position less than left edge'
    + ' and record the position after fixing', () => {
    movement.settings.double = false;
    movement.handleListener({ eventInfo: { target: movement.from, x: 50, y: 0 }, test: { x: -100, y: 0 } });

    expect(movement.from.style.left).toEqual('0px');
    expect(movement.interval.style.left).toEqual('10px');
    expect(movement.positions.from).toEqual(0);
  });

  it('handelListener() move from and interval to position bigger than to position'
    + ' and record the position after fixing', () => {
    movement.handleListener({ eventInfo: { target: movement.from, x: 50, y: 0 }, test: { x: 200, y: 0 } });

    expect(movement.from.style.left).toEqual('50px');
    expect(movement.interval.style.left).toEqual('60px');
    expect(movement.positions.from).toEqual(50);
  });
});
