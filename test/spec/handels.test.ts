import { Handles } from '../../src/components/view/components/handles/Handles';
import { RefreshIntervalPositions } from '../../src/components/view/components/selectedInterval/types';

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
    }, {
      positions: { from: 0, to: 0 },
      sliderWidth: 0,
      isDouble: false,
    });
    expect(handles.fromValue.innerText).toEqual('5');
  });

  it('refreshValues() refresh value for to', () => {
    handles.refreshValues({
      target: 'to',
      value: '5',
      isToFixed: false,
    }, {
      positions: { from: 0, to: 0 },
      sliderWidth: 0,
      isDouble: false,
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
    expect(handles.fromValue).toHaveClass('cs-slider__handle-value_vertical');
    expect(handles.toValue).toHaveClass('cs-slider__handle-value_vertical');
    handles.changePlane(false);
    expect(handles.fromValue).not.toHaveClass('cs-slider__handle-value_vertical');
    expect(handles.toValue).not.toHaveClass('cs-slider__handle-value_vertical');
  });

  it('hideHandleValues() manage display correctly', () => {
    handles.hideHandleValues(false);
    expect(handles.fromValue.style.display).toEqual('none');
    expect(handles.toValue.style.display).toEqual('none');
    handles.hideHandleValues(true);
    expect(handles.fromValue.style.display).toEqual('inline-block');
    expect(handles.toValue.style.display).toEqual('inline-block');
  });

  it('hideToHandel() if need to hide', () => {
    handles.controlHandlesDisplay({ isDouble: false, positions: { from: 30, to: 70 }, sliderWidth: 100 });
    expect(handles.toHandle.style.display).toEqual('none');
  });

  it('hideToHandel() if need to show', () => {
    handles.toHandle.style.display = 'none';
    handles.controlHandlesDisplay({ isDouble: true, positions: { from: 30, to: 70 }, sliderWidth: 100 });
    expect(handles.toHandle.style.display).toEqual('inline-block');
    expect(handles.toHandle.style.left).toEqual('100px');
  });

  it('hideToHandel() if need to show ane from bigger than to', () => {
    handles.toHandle.style.display = 'none';
    handles.controlHandlesDisplay({ isDouble: true, positions: { from: 101, to: 70 }, sliderWidth: 100 });
    expect(handles.toHandle.style.display).toEqual('inline-block');
    expect(handles.toHandle.style.left).toEqual('100px');
    expect(handles.fromHandle.style.left).toEqual('100px');
  });
});
