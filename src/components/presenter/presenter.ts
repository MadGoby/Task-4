import { SliderMovement } from "../view/components/slider-movement";

export function Presenter (view): void {
  view.minHandel.onmousedown = function( event ): void {
    view.sliderMovement.minHandelListener( event );
  };
  view.maxHandel.onmousedown = function(event): void {
    view.sliderMovement.maxHandelListener( event );
  };
}