import { BasicViewSettings } from "../../interfaces/ViewInterfaces";
import { EventInfo } from "./interfaces/EventInfo";
import { HandelsPosition } from "./interfaces/HandelsPosition";
import { MovementSettings } from "./interfaces/MovementInterfaces";
import { TestMouseEvent } from "./interfaces/testMouseEvent";


export class Movement {
  readonly slider: HTMLDivElement;
  readonly from: HTMLSpanElement;
  readonly to: HTMLSpanElement;
  readonly settings: BasicViewSettings;
  readonly interval: HTMLDivElement;
  public stepWidth: string | boolean;
  public positions: HandelsPosition;
  
  constructor (settings: MovementSettings) {
    this.slider = settings.slider;
    this.from = settings.fromHandel;
    this.to = settings.toHandel;
    this.settings = settings.basicSettings;
    this.interval = settings.interval;
    this.positions = {from: 0, to: 0};
    this.settings.step == false ? this.stepWidth = false : this.stepWidth = "";
  };

  public handelListener(eventInfo: EventInfo, test?: {x: number, y: number}): void {
    let that = this;
    let {x, y} = eventInfo;
    let target: HTMLSpanElement;
    
    if (eventInfo.target == this.from) {
      target = this.from;
    } else {
      target = this.to;
    }
    
    let distanceToCursor: number;  x - target.getBoundingClientRect().left;
    if(this.settings.vertical) {
      distanceToCursor = y - target.getBoundingClientRect().top - target.offsetWidth;
    } else {
      distanceToCursor = x - target.getBoundingClientRect().left;
    };
    
    function bindEventListeners(): void {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    if(test) onMouseMove({clientX: test.x, clientY: test.y});

    function onMouseMove(event: MouseEvent | TestMouseEvent): void {
      let x = event.clientX;
      let y = event.clientY;
      let rightSliderEdge: number = that.slider.offsetWidth - target.offsetWidth;
      let newPosition: number;
      let targetPosition: number;
      target == that.from ? targetPosition = that.positions.from : targetPosition = that.positions.to;
      
      if (that.settings.vertical) {
        newPosition = that.slider.offsetWidth - (y - distanceToCursor - that.slider.getBoundingClientRect().top);
      } else {
        newPosition = x - distanceToCursor - that.slider.getBoundingClientRect().left;
      };
      
      function isToBiggerThanRightEdge(): boolean {
        return newPosition > rightSliderEdge && target == that.to;
      };
      function isFromBiggerThanRightEdge(): boolean {
        return newPosition > rightSliderEdge && target == that.from;
      };
      function isDouble(): boolean {
        return that.settings.double;
      };
      function isFromBiggerThanTo(): boolean {
        return target == that.from && newPosition > that.positions.to - target.offsetWidth;
      };
      function isToSmallerThanFrom(): boolean {
        return target == that.to && newPosition < that.positions.from + target.offsetWidth;
      };
      function isStepSetCorrectly(): boolean {
        return that.settings.step !== false && typeof that.stepWidth == "string" && +that.stepWidth >= 1;
      }
      function isStepWidthPassed(difference: number): boolean {
        return Math.abs(difference) >= +that.stepWidth;
      };
      function correctsImpossiblePosition(): void {
        if (newPosition < 0) newPosition = 0;
        if (isFromBiggerThanRightEdge()) newPosition = rightSliderEdge;
        if (isDouble()) {
          if (isFromBiggerThanTo()) newPosition = that.positions.to - target.offsetWidth;
          if (isToSmallerThanFrom()) newPosition = that.positions.from + target.offsetWidth;
          if (isToBiggerThanRightEdge()) newPosition = rightSliderEdge;
        };
      };
     
      correctsImpossiblePosition();

      function applyNewPosition(): void {
        target.style.left = newPosition + "px";  
        target == that.from ? that.positions.from = newPosition : that.positions.to = newPosition;
        that.interval.style.left = String(that.positions.from + (target.offsetWidth / 2)) + "px";
        that.interval.style.right = String((that.slider.offsetWidth - that.positions.to) - (target.offsetWidth / 2)) + "px";
      };
      
      if (isStepSetCorrectly()) {
        if (newPosition == 0 || newPosition == that.slider.offsetWidth - target.offsetWidth) {
          applyNewPosition();
        } else {
          let difference = newPosition - targetPosition;
          if (isStepWidthPassed(difference)) {
            if(Math.abs(difference) > +that.stepWidth) {
              newPosition = targetPosition + +that.stepWidth * (Math.trunc(difference / +that.stepWidth))
              applyNewPosition();
            }
          };
        };
      } else {
        applyNewPosition()
      };
      
    };

    function onMouseUp(): void {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    bindEventListeners();
  };
};