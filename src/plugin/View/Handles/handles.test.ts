import { Handles } from './Handles';

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
      value: 5,
      position: '120',
      isToFixed: true,
    }, 500);
    expect(handles.fromValue.innerText).toEqual('5');
  });

  it('refreshValues() refresh value for to', () => {
    handles.refreshValues({
      target: 'to',
      value: 5,
      position: '120',
      isToFixed: true,
    }, 500);
    expect(handles.toHandle.innerText).toEqual('5');
  });

  it('refreshValues() refresh not integer value', () => {
    handles.refreshValues({
      target: 'from',
      value: 5.5,
      position: '500',
      isToFixed: false,
    }, 500);
    expect(handles.fromValue.innerText).toEqual('5.5');
    expect(handles.fromHandle).toHaveClass('goby-slider__handle_type_main');
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
    expect(handles.fromValue.classList.contains('goby-slider__handle-value_hidden')).toBeTruthy();
    expect(handles.fromValue.classList.contains('goby-slider__handle-value_hidden')).toBeTruthy();
    handles.hideHandlesValues(true);
    expect(handles.fromValue.classList.contains('goby-slider__handle-value_hidden')).toBeFalse();
    expect(handles.fromValue.classList.contains('goby-slider__handle-value_hidden')).toBeFalse();
  });

  it('changeHandlesDisplay() if need to hide', () => {
    handles.changeHandlesDisplay({ isDouble: false, sliderWidth: 100 });
    expect(handles.toHandle.classList.contains('goby-slider__handle_hidden')).toBeTruthy();
  });

  it('hideToHandel() if need to show', () => {
    handles.toHandle.classList.add('goby-slider__handle_hidden');
    handles.changeHandlesDisplay({ isDouble: true, sliderWidth: 100 });
    expect(handles.toHandle.classList.contains('goby-slider__handle_hidden')).toBeFalse();
  });
});
