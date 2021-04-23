import { DataForValueScale } from "./../../../model/interfaces/DataForValueScale";

export class ValuesScale {
  readonly minValue: HTMLSpanElement;
  readonly maxValue: HTMLSpanElement;
  readonly 20: HTMLSpanElement;
  readonly 40: HTMLSpanElement;
  readonly 60: HTMLSpanElement;
  readonly 80: HTMLSpanElement;

  constructor() {
    function createElement(cssClases: Array<string>): HTMLSpanElement {
      let element: HTMLSpanElement = document.createElement("span");
      cssClases.map(function(cssClass: string) {
        element.classList.add(cssClass);
      })
      return element;
    };
    this.minValue = createElement(["cs-slider__value", "cs-slider__value_min"]);
    this.maxValue = createElement(["cs-slider__value", "cs-slider__value_max"]);
    this[20] = createElement(["cs-slider__value", "cs-slider__value_20"]);
    this[40] = createElement(["cs-slider__value", "cs-slider__value_40"]);
    this[60] = createElement(["cs-slider__value", "cs-slider__value_60"]);
    this[80] = createElement(["cs-slider__value", "cs-slider__value_80"]);
  };

  public refreshValueScale(values: DataForValueScale): void {
    this.minValue.innerText = values.min;
    this.maxValue.innerText = values.max;
    this[20].innerText = values[20];
    this[40].innerText = values[40];
    this[60].innerText = values[60];
    this[80].innerText = values[80];
  };

  public centersValues(sliderWidth: number, handelWidth: number):void {
    this.minValue.style.left = String(sliderWidth * 0 - ((this.minValue.offsetWidth - handelWidth) / 2)) + "px";
    this.maxValue.style.right = String(sliderWidth * 0 - ((this.maxValue.offsetWidth - handelWidth) / 2)) + "px";
    this[20].style.left = String(sliderWidth * 0.2 - ((this[20].offsetWidth - handelWidth) / 2)) + "px";
    this[40].style.left = String(sliderWidth * 0.4 - ((this[40].offsetWidth - handelWidth) / 2)) + "px";
    this[60].style.left = String(sliderWidth * 0.6 - ((this[60].offsetWidth - handelWidth) / 2)) + "px";
    this[80].style.left = String(sliderWidth * 0.8 - ((this[80].offsetWidth - handelWidth) / 2)) + "px";
  };
  
  private isNeedToMakeHorizontally(isVertical: boolean): boolean {
    return (this.minValue.classList.contains("cs-slider__value_vertical") == true) &&
    (this.maxValue.classList.contains("cs-slider__value_vertical") == true) && 
    (this[20].classList.contains("cs-slider__value_vertical") == true) && 
    (this[40].classList.contains("cs-slider__value_vertical") == true) && 
    (this[60].classList.contains("cs-slider__value_vertical") == true) && 
    (this[80].classList.contains("cs-slider__value_vertical") == true) && 
    (isVertical == false);
  };

  private isNeedToMakeVertical(isVertical: boolean): boolean {
    return (this.minValue.classList.contains("cs-slider__value_vertical") == false) &&
    (this.maxValue.classList.contains("cs-slider__value_vertical") == false) && 
    (this[20].classList.contains("cs-slider__value_vertical") == false) &&
    (this[40].classList.contains("cs-slider__value_vertical") == false) && 
    (this[60].classList.contains("cs-slider__value_vertical") == false) && 
    (this[80].classList.contains("cs-slider__value_vertical") == false) && 
    (isVertical == true);
  };

  public changePlane(isVertical: boolean): void {
    let that = this;
    function classChanger(): void {
      that.minValue.classList.toggle("cs-slider__value_vertical");
      that.maxValue.classList.toggle("cs-slider__value_vertical");
      that[20].classList.toggle("cs-slider__value_vertical");
      that[40].classList.toggle("cs-slider__value_vertical");
      that[60].classList.toggle("cs-slider__value_vertical");
      that[80].classList.toggle("cs-slider__value_vertical");
    };
    if (this.isNeedToMakeVertical(isVertical)) {
      classChanger()
    } else if (this.isNeedToMakeHorizontally(isVertical)) {
      classChanger()
    };
  };

  public hideValueScale(isValueScale: boolean): void {
    if(isValueScale == false) {
      this.minValue.style.display = "none";
      this.maxValue.style.display = "none";
      this[20].style.display = "none";
      this[40].style.display = "none";
      this[60].style.display = "none";
      this[80].style.display = "none";
    } else {
      this.minValue.style.display = "inline-block";
      this.maxValue.style.display = "inline-block";
      this[20].style.display = "inline-block";
      this[40].style.display = "inline-block";
      this[60].style.display = "inline-block";
      this[80].style.display = "inline-block";
    };
  };
  
};