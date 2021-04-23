import { Handels } from "../../src/components/view/components/handels/handels";
import { Movement } from "../../src/components/view/components/movement/movement";
import { SelectedInterval } from "../../src/components/view/components/selectedInterval/selectedInterval";
import { Slider } from "../../src/components/view/components/slider/slider";

describe("Movement", () => {
  let movement: Movement;

  beforeEach(() => {
    movement = new Movement({
      basicSettings: {
        "side-menu": true,
        double: true,
        handelsValues: true,
        step: false,
        valueScale: true,
        vertical: false
      },
      fromHandel: new Handels().fromHandel,
      toHandel: new Handels().toHandel,
      slider: new Slider().slider,
      interval: new SelectedInterval().interval,
    });
    movement.positions = {from: 30, to: 70};
    document.querySelector("body")?.append(movement.slider, movement.from, movement.to);
    movement.slider.style.width = "120px";
    movement.from.style.width = "20px";
    movement.to.style.width = "20px";
    movement.slider.style.position = "absolute";
    movement.slider.style.left = "0px";
    movement.slider.style.top = "0px";
    movement.from.style.position = "absolute";
    movement.from.style.left = "0px";
    movement.from.style.top = "0px";
    movement.to.style.position = "absolute";
    movement.to.style.left = "0px";
    movement.to.style.top = "0px";
  });

  afterEach(() => {
    movement.slider.remove();
    movement.from.remove();
    movement.to.remove();
  });

  it("Movement can be create", () => {
    expect(movement).toBeTruthy();
  });

  it("handelListener() move from and interval to correct position and record the position", () => {
    movement.handelListener({target: movement.from, x: 50, y: 0}, {x: 60, y: 0});
    expect(movement.from.style.left).toEqual("10px");
    expect(movement.interval.style.left).toEqual("20px");
    expect(movement.positions.from).toEqual(10);
  });

  it("handelListener() move to and interval to correct position and record the position", () => {
    movement.handelListener({target: movement.to, x: 50, y: 0}, {x: 140, y: 0});
    expect(movement.to.style.left).toEqual("90px");
    expect(movement.interval.style.right).toEqual("20px");
    expect(movement.positions.to).toEqual(90);
  });

  it("handelListener() move from and interval to position bigger than right edge and record the position after fixing", () => {
    movement.settings.double = false;
    movement.handelListener({target: movement.from, x: 50, y: 0}, {x: 200, y: 0});
    
    expect(movement.from.style.left).toEqual("100px");
    expect(movement.interval.style.left).toEqual("110px");
    expect(movement.positions.from).toEqual(100);
  });

  it("handelListener() move from and interval to position less than left edge and record the position after fixing", () => {
    movement.settings.double = false;
    movement.handelListener({target: movement.from, x: 50, y: 0}, {x: -100, y: 0});
    
    expect(movement.from.style.left).toEqual("0px");
    expect(movement.interval.style.left).toEqual("10px");
    expect(movement.positions.from).toEqual(0);
  });

  it("handelListener() move to and interval to position less than left edge and record the position after fixing", () => {
    movement.handelListener({target: movement.to, x: 50, y: 0}, {x: 200, y: 0});
    
    expect(movement.to.style.left).toEqual("100px");
    expect(movement.interval.style.right).toEqual("10px");
    expect(movement.positions.to).toEqual(100);
  });

  it("handelListener() move from and interval to position bigger than to position and record the position after fixing", () => {
    movement.handelListener({target: movement.from, x: 50, y: 0}, {x: 200, y: 0});
    
    expect(movement.from.style.left).toEqual("50px");
    expect(movement.interval.style.left).toEqual("60px");
    expect(movement.positions.from).toEqual(50);
  });

  it("handelListener() move to and interval to position less than from position and record the position after fixing", () => {
    movement.handelListener({target: movement.to, x: 50, y: 0}, {x: -200, y: 0});
    
    expect(movement.to.style.left).toEqual("50px");
    expect(movement.interval.style.right).toEqual("60px");
    expect(movement.positions.to).toEqual(50);
  });

  it("handelListener() move from and interval correctly when vertical", () => {
    movement.settings.vertical = true;
    movement.handelListener({target: movement.from, x: 0, y: 50}, {x: 0, y: 140});
    
    expect(movement.from.style.left).toEqual("10px");
    expect(movement.interval.style.left).toEqual("20px");
    expect(movement.positions.from).toEqual(10);
  });

  it("handelListener() move from and interval correctly when step is done", () => {
    movement.settings.step = true;
    movement.stepWidth = "20";
    movement.handelListener({target: movement.from, x: 50, y: 0}, {x: 60, y: 0});
    
    expect(movement.from.style.left).toEqual("10px");
    expect(movement.interval.style.left).toEqual("20px");
    expect(movement.positions.from).toEqual(10);

    movement.handelListener({target: movement.from, x: 50, y: 0}, {x: 80, y: 0});

    expect(movement.from.style.left).toEqual("30px");
    expect(movement.interval.style.left).toEqual("40px");
    expect(movement.positions.from).toEqual(30);
  });

  it("handelListener() move to and interval correctly when step is done positively", () => {
    movement.settings.step = true;
    movement.stepWidth = "20";
    movement.handelListener({target: movement.to, x: 50, y: 0}, {x: 140, y: 0});
    
    expect(movement.to.style.left).toEqual("90px");
    expect(movement.interval.style.right).toEqual("20px");
    expect(movement.positions.to).toEqual(90);
  });

  it("handelListener() move to and interval correctly when step is done negatively", () => {
    movement.settings.step = true;
    movement.stepWidth = "20";

    movement.handelListener({target: movement.to, x: 50, y: 0}, {x: 100, y: 0});

    expect(movement.to.style.left).toEqual("50px");
    expect(movement.interval.style.right).toEqual("60px");
    expect(movement.positions.to).toEqual(50);
  });

  it("handelListener() move from and interval correctly when position equally left edge", () => {
    movement.settings.step = true;
    movement.stepWidth = "20";

    movement.handelListener({target: movement.from, x: 50, y: 0}, {x: 50, y: 0});

    expect(movement.from.style.left).toEqual("0px");
    expect(movement.interval.style.left).toEqual("10px");
    expect(movement.positions.from).toEqual(0);
  });
});