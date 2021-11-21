// import { SelectedInterval } from "../../src/components/view/components/selectedInterval/selectedInterval";
//
// describe("SelectedInterval", () => {
//   let interval: SelectedInterval;
//
//   beforeEach(() => {
//     interval = new SelectedInterval();
//   });
//
//   it("Interval cal be created", () => {
//     expect(interval).toBeTruthy();
//   });
//
//   it("adjustPositionRelativeValue() adjust position correctly for left side", () => {
//     interval.adjustPositionRelativeValue({target: "from", position: "50", handelWidth: 20, sliderWidth: 120});
//     expect(interval.interval.style.left).toEqual("60px");
//   });
//
//   it("adjustPositionRelativeValue() adjust position correctly for right side", () => {
//     interval.adjustPositionRelativeValue({target: "to", position: "50", handelWidth: 20, sliderWidth: 100});
//     expect(interval.interval.style.right).toEqual("60px");
//   });
//
//   it("hideSelectedInterval() operates the display function correctly", () => {
//     interval.hideSelectedInterval(false, {from: 30, to: 90}, 20);
//     expect(interval.interval.style.display).toEqual("none");
//     interval.hideSelectedInterval(true, {from: 30, to: 70}, 20);
//     expect(interval.interval.style.display).toEqual("block");
//     expect(interval.interval.style.right).toEqual("10px");
//   });
// });