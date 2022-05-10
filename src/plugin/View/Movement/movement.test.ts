import { Movement } from './Movement';
import { Handles } from '../Handles/Handles';
import { UpdatePositionsData } from '../types';
import {MovementSettings} from "./types";

describe('Movement', () => {
  let movement: Movement;

  const settings: MovementSettings = {
    slider: document.createElement('div'),
    environmentLink: { updatePositions: (data: UpdatePositionsData) => data },
    getOptions: () => ({
      double: true,
      handlesValues: true,
      vertical: false,
      step: false,
      valueScale: true,
      integer: true,
    }),
    handles: new Handles(),
  };

  beforeEach(() => {
    movement = new Movement(settings);
  });

  it('Movement can be create', () => {
    expect(movement).toBeTruthy();
  });

  it('calculateNewPosition() work correctly', () => {
    const result = movement.calculateNewPosition({
      x: 100,
      y: 200,
      distanceToCursor: 0,
    });

    expect(result).toEqual(100);
  });

  it('handelListener() move from and interval to position less than left edge'
    + ' and record the position after fixing', () => {
    movement.handleListener({
      x: 100,
      y: 200,
      target: movement.movementSettings.handles.fromHandle,
    });

    expect(movement.movementSettings.handles.fromHandle.classList.contains(
      'goby-slider__handle_type_main',
    )).toBeTruthy();
  });
});
