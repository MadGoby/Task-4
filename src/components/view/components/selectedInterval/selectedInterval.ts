import { HandelsPosition } from "../movement/interfaces/HandelsPosition";
import { RefreshIntervalPositions } from "./interfaces.ts/RefreshIntervalPositions";

export class SelectedInterval {
  readonly interval: HTMLDivElement;
  
  constructor() {
    this.interval = document.createElement("div");
    this.interval.classList.add("cs-slider__interval");
    this.interval.setAttribute("style", "display: block");
  };

  public adjustPositionRelativeValue(dataToRefresh: RefreshIntervalPositions): void {
    if(dataToRefresh.target == "from") {
      this.interval.style.left = String(+dataToRefresh.position + (dataToRefresh.handelWidth / 2)) + "px";
    } else {
      this.interval.style.right = String(dataToRefresh.sliderWidth - +dataToRefresh.position + (dataToRefresh.handelWidth / 2)) + "px";
    };
  };

  private isIntervalNeedHide(isDouble: boolean): boolean {
    return (isDouble == false) && (this.interval.style.display == "block"); 
  };
  private isIntervalNeedShow(isDouble: boolean): boolean {
    return (isDouble == true) && (this.interval.style.display == "none"); 
  };

  public hideSelectedInterval(isDouble: boolean, positions: HandelsPosition, handelWidth: number): void {
    if(this.isIntervalNeedHide(isDouble)) {
      this.interval.style.display = "none";
    } else if (this.isIntervalNeedShow(isDouble)) {
      this.interval.style.display = "block";
      this.interval.style.right = String(0 + (handelWidth / 2)) + "px";
    };
  };
};