import { Handles } from "../../src/components/view/components/handels/handles";
import { SelectedInterval } from "../../src/components/view/components/selectedInterval/selectedInterval";
import { SliderAssemblerSettings } from "../../src/components/view/components/slider/interfaces/sliderInterfaces";
import { Slider } from "../../src/components/view/components/slider/slider";
import { ValuesScale } from "../../src/components/view/components/valuesScale/valuesScale";

describe("Sldier", () => {
  let slider: Slider;

  beforeEach(() => {
    slider = new Slider();
  });

  it("Slider can be create", () => {
    expect(slider).toBeTruthy();
  });

  it("collectSlider() can collect elements", () => {
    let settings: SliderAssemblerSettings = {from: new Handles().fromHandel, to: new Handles().toHandel, interval: new SelectedInterval().interval, valueScale: new ValuesScale()}
    slider.collectSlider(settings);
    expect(slider.slider).toBeTruthy();
  });

  it("changePlane() operates the display function correctly", () => {
    slider.changePlane(true);
    expect(slider.slider).toHaveClass("cs-slider_vertical");

    slider.changePlane(false)
    expect(slider.slider).not.toHaveClass("cs-slider_vertical");
  });
});