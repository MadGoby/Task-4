// import { SelectedInterval } from './SelectedInterval';
//
// describe('SelectedInterval', () => {
//   let interval: SelectedInterval;
//
//   beforeEach(() => {
//     interval = new SelectedInterval();
//   });
//
//   it('Interval cal be created', () => {
//     expect(interval).toBeTruthy();
//   });
//
//   it('adjustPositionRelativeValue() adjust position correctly for left side', () => {
//     interval.adjustPositionRelativeToValue({
//       target: 'from',
//       position: '50',
//       handleWidth: 20,
//       sliderWidth: 120,
//     });
//     expect(interval.interval.style.left).toEqual('60px');
//   });
//
//   it('adjustPositionRelativeValue() adjust position correctly for right side', () => {
//     interval.adjustPositionRelativeToValue({
//       target: 'to',
//       position: '50',
//       handleWidth: 20,
//       sliderWidth: 100,
//     });
//     expect(interval.interval.style.right).toEqual('60px');
//   });
//
//   it('hideSelectedInterval() operates the display function correctly', () => {
//     interval.hideSelectedInterval({ isDouble: false, handleWidth: 20 });
//     expect(interval.interval.style.display).toEqual('none');
//     interval.hideSelectedInterval({ isDouble: true, handleWidth: 20 });
//     expect(interval.interval.style.display).toEqual('block');
//     expect(interval.interval.style.right).toEqual('10px');
//   });
// });
