import { Handles } from './Handles';
import { RefreshIntervalPositions } from '../SelectedInterval/types';
import { HandlesPosition } from '../Movement/types';

describe('Handles', () => {
  let handles: Handles;

  beforeEach(() => {
    handles = new Handles();
  });

  it('Handles can be create', () => {
    expect(handles).toBeTruthy();
  });

  it('refreshValues() refresh value for from', () => {
    handles.refreshValues({
      target: 'from',
      value: '5',
      isToFixed: false,
    });
    expect(handles.fromValue.innerText).toEqual('5');
  });

  it('refreshValues() refresh value for to', () => {
    handles.refreshValues({
      target: 'to',
      value: '5',
      isToFixed: false,
    });
    expect(handles.toHandle.innerText).toEqual('5');
  });

  it('adjustPositionRelativeValue() adjust from position correctly and return correct settings', () => {
    const result: RefreshIntervalPositions = handles.adjustPositions({
      target: 'from', minValue: '0', totalValues: 10, value: '5',
    }, 100);
    expect(handles.fromHandle.style.left).toEqual('50px');
    expect(result).toEqual({
      target: 'from', position: '50', sliderWidth: 100, handleWidth: 0,
    });
  });

  it('adjustPositionRelativeValue() adjust to position correctly and return correct settings', () => {
    const result: RefreshIntervalPositions = handles.adjustPositions({
      target: 'to', minValue: '0', totalValues: 10, value: '5',
    }, 100);
    expect(handles.toHandle.style.left).toEqual('50px');
    expect(result).toEqual({
      target: 'to', position: '50', sliderWidth: 100, handleWidth: 0,
    });
  });

  it('changePlane() change classes correctly', () => {
    handles.changePlane(true);
    expect(handles.fromValue).toHaveClass('goby-slider__handle-value_state_vertical');
    expect(handles.toValue).toHaveClass('goby-slider__handle-value_state_vertical');
    handles.changePlane(false);
    expect(handles.fromValue).not.toHaveClass('goby-slider__handle-value_state_vertical');
    expect(handles.toValue).not.toHaveClass('goby-slider__handle-value_state_vertical');
  });

  it('hideHandleValues() manage display correctly', () => {
    handles.hideHandlesValues(false);
    expect(handles.fromValue.style.display).toEqual('none');
    expect(handles.toValue.style.display).toEqual('none');
    handles.hideHandlesValues(true);
    expect(handles.fromValue.style.display).toEqual('inline-block');
    expect(handles.toValue.style.display).toEqual('inline-block');
  });

  it('hideToHandel() if need to hide', () => {
    handles.changeHandlesDisplay({ isDouble: false, positions: { from: 30, to: 70 }, sliderWidth: 100 });
    expect(handles.toHandle.style.display).toEqual('none');
  });

  it('hideToHandel() if need to show', () => {
    handles.toHandle.style.display = 'none';
    handles.changeHandlesDisplay({ isDouble: true, positions: { from: 30, to: 70 }, sliderWidth: 100 });
    expect(handles.toHandle.style.display).toEqual('inline-block');
    expect(handles.toHandle.style.left).toEqual('100px');
  });

  it('hideToHandel() if need to show ane from bigger than to', () => {
    handles.toHandle.style.display = 'none';
    handles.changeHandlesDisplay({ isDouble: true, positions: { from: 101, to: 70 }, sliderWidth: 100 });
    expect(handles.toHandle.style.display).toEqual('inline-block');
    expect(handles.toHandle.style.left).toEqual('100px');
    expect(handles.fromHandle.style.left).toEqual('100px');
  });

  it('correctsHandlesOverlaps() fix from extra position correctly', () => {
    const positionImitator: HandlesPosition = { from: 0, to: 10 };
    document.body.append(handles.fromHandle);
    handles.fromHandle.style.width = '20px';

    const result: boolean = handles.refreshValues({
      isToFixed: true,
      target: 'from',
      value: '4',
    });

    expect(result).toBeFalse();
    expect(positionImitator.to).toEqual(20);
  });

  it('correctsHandlesOverlaps() fix to extra position correctly', () => {
    const positionImitator: HandlesPosition = { from: 70, to: 80 };
    document.body.append(handles.fromHandle, handles.toHandle);
    handles.fromHandle.style.width = '20px';
    handles.toHandle.style.width = '20px';

    const result: boolean = handles.refreshValues({
      isToFixed: true,
      target: 'from',
      value: '4',
    });

    expect(result).toBeFalse();
    expect(positionImitator.from).toEqual(60);
  });

  it('selectsHandleToMove() choose from handle', () => {
    const result: HTMLSpanElement = handles.defineHandleToMove({
      positions: { from: 70, to: 80 },
      isDouble: true,
      targetPosition: 74,
    });

    expect(result).toEqual(handles.fromHandle);
  });

  it('selectsHandleToMove() choose to handle', () => {
    const result: HTMLSpanElement = handles.defineHandleToMove({
      positions: { from: 70, to: 80 },
      isDouble: true,
      targetPosition: 76,
    });

    expect(result).toEqual(handles.toHandle);
  });

  it('acceptNewPosition() record data correctly', () => {
    const positionImitator: HandlesPosition = { from: 70, to: 80 };

    handles.acceptNewPosition({
      positions: positionImitator,
      value: 40,
      target: handles.fromHandle,
    });

    expect(positionImitator.from).toEqual(40);

    handles.acceptNewPosition({
      positions: positionImitator,
      value: 50,
      target: handles.toHandle,
    });

    expect(positionImitator.to).toEqual(50);
  });
});
