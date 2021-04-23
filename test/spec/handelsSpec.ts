import { Handels } from "../../src/components/view/components/handels/handels";
import { RefreshIntervalPositions } from "../../src/components/view/components/selectedInterval/interfaces.ts/RefreshIntervalPositions";

describe("Handels", () => {
  let handels: Handels;

  beforeEach(() => {
    handels = new Handels();
  });

  it("Handels can be create", () => {
    expect(handels).toBeTruthy();
  });

  it("refreshValues() refresh value for from", () => {
    handels.refreshValues({target: "from", value: "5"})
    expect(handels.fromValue.innerText).toEqual("5");
  });

  it("refreshValues() refresh value for to", () => {
    handels.refreshValues({target: "to", value: "5"})
    expect(handels.toHandel.innerText).toEqual("5");
  });

  it("adjustPositionRelativeValue() adjust from position correctly and return correct settings", () => {
    let result: RefreshIntervalPositions = handels.adjustPositionRelativeValue({target: "from", minValue: "0", totalValues: 10, value: "5"}, 100);
    expect(handels.fromHandel.style.left).toEqual("50px");
    expect(result).toEqual({target: "from", position: "50", sliderWidth: 100, handelWidth: 0});
  });

  it("adjustPositionRelativeValue() adjust to position correctly and return correct settings", () => {
    let result: RefreshIntervalPositions = handels.adjustPositionRelativeValue({target: "to", minValue: "0", totalValues: 10, value: "5"}, 100);
    expect(handels.toHandel.style.left).toEqual("50px");
    expect(result).toEqual({target: "to", position: "50", sliderWidth: 100, handelWidth: 0});
  });

  it("changePlane() change classes correctly", () => {
    handels.changePlane(true);
    expect(handels.fromValue).toHaveClass("cs-slider__handel-value_vertical");
    expect(handels.toValue).toHaveClass("cs-slider__handel-value_vertical");
    handels.changePlane(false);
    expect(handels.fromValue).not.toHaveClass("cs-slider__handel-value_vertical");
    expect(handels.toValue).not.toHaveClass("cs-slider__handel-value_vertical");
  });

  it("hideHandelValues() manage display correctly", () => {
    handels.hideHandelValues(false);
    expect(handels.fromValue.style.display).toEqual("none");
    expect(handels.toValue.style.display).toEqual("none");
    handels.hideHandelValues(true);
    expect(handels.fromValue.style.display).toEqual("inline-block");
    expect(handels.toValue.style.display).toEqual("inline-block");
  });

  it("hideToHandel() if need to hide", () => {
    handels.hideToHandel(false, {from: 30, to: 70}, 100);
    expect(handels.toHandel.style.display).toEqual("none");
  });

  it("hideToHandel() if need to show", () => {
    handels.toHandel.style.display = "none";
    handels.hideToHandel(true, {from: 30, to: 70}, 100);
    expect(handels.toHandel.style.display).toEqual("inline-block");
    expect(handels.toHandel.style.left).toEqual("100px");
  });

  it("hideToHandel() if need to show ane from bigger than to", () => {
    handels.toHandel.style.display = "none";
    handels.hideToHandel(true, {from: 101, to: 70}, 100);
    expect(handels.toHandel.style.display).toEqual("inline-block");
    expect(handels.toHandel.style.left).toEqual("100px");
    expect(handels.fromHandel.style.left).toEqual("100px");
  });
});