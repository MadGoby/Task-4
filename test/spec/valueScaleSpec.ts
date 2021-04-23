import { ValuesScale } from "../../src/components/view/components/valuesScale/valuesScale";

describe("ValueScale", () => {
  let valueSclae: ValuesScale;

  beforeEach(() => {
    valueSclae = new ValuesScale();
  });

  it("ValueScale can be create", () => {
    expect(valueSclae).toBeTruthy();
  });

  it("refreshValueScale() refresh scale correctly", () => {
    valueSclae.refreshValueScale({min: "0", max: "100", 20: "20", 40: "40", 60: "60", 80: "80"});
    expect(valueSclae.minValue.innerText).toEqual("0");
    expect(valueSclae.maxValue.innerText).toEqual("100");
    expect(valueSclae[20].innerText).toEqual("20");
    expect(valueSclae[40].innerText).toEqual("40");
    expect(valueSclae[60].innerText).toEqual("60");
    expect(valueSclae[80].innerText).toEqual("80");
  });

  it("centersValues() calculate correctly", () => {
    valueSclae.centersValues(100, 20);
    expect(valueSclae.minValue.style.left).toEqual("10px");
    expect(valueSclae.maxValue.style.right).toEqual("10px");
    expect(valueSclae[20].style.left).toEqual("30px");
    expect(valueSclae[40].style.left).toEqual("50px");
    expect(valueSclae[60].style.left).toEqual("70px");
    expect(valueSclae[80].style.left).toEqual("90px");
  });

  it("changePlane() operates the plane function correctly", () => {
    valueSclae.changePlane(true);
    expect(valueSclae.minValue).toHaveClass("cs-slider__value_vertical");
    expect(valueSclae.maxValue).toHaveClass("cs-slider__value_vertical");
    expect(valueSclae[20]).toHaveClass("cs-slider__value_vertical");
    expect(valueSclae[40]).toHaveClass("cs-slider__value_vertical");
    expect(valueSclae[60]).toHaveClass("cs-slider__value_vertical");
    expect(valueSclae[80]).toHaveClass("cs-slider__value_vertical");
    valueSclae.changePlane(false);
    expect(valueSclae.minValue).not.toHaveClass("cs-slider__value_vertical");
    expect(valueSclae.maxValue).not.toHaveClass("cs-slider__value_vertical");
    expect(valueSclae[20]).not.toHaveClass("cs-slider__value_vertical");
    expect(valueSclae[40]).not.toHaveClass("cs-slider__value_vertical");
    expect(valueSclae[60]).not.toHaveClass("cs-slider__value_vertical");
    expect(valueSclae[80]).not.toHaveClass("cs-slider__value_vertical");
  });

  it("hideValueScale() operates the display function correctly", () => {
    valueSclae.hideValueScale(false);
    expect(valueSclae.minValue.style.display).toEqual("none")
    expect(valueSclae.maxValue.style.display).toEqual("none")
    expect(valueSclae[20].style.display).toEqual("none")
    expect(valueSclae[40].style.display).toEqual("none")
    expect(valueSclae[60].style.display).toEqual("none")
    expect(valueSclae[80].style.display).toEqual("none")
    valueSclae.hideValueScale(true);
    expect(valueSclae.minValue.style.display).toEqual("inline-block")
    expect(valueSclae.maxValue.style.display).toEqual("inline-block")
    expect(valueSclae[20].style.display).toEqual("inline-block")
    expect(valueSclae[40].style.display).toEqual("inline-block")
    expect(valueSclae[60].style.display).toEqual("inline-block")
    expect(valueSclae[80].style.display).toEqual("inline-block")
  });
});