import { SliderMovement } from "../view/components/slider-movement.ts";


export function Presenter (view, facade): void {

  view.sliderMovement.myData = new Proxy(view.sliderMovement.myData, {
    set(target, prop, val) {
      if(typeof val === 'object') {
        target[prop] = val;
        let modelResult = facade.refreshModelData(val, prop);
        view.refreshCurrentValues(modelResult)
        return true
      } else {
        return false
      }
    }
  })

  view.minHandel.onmousedown = function( event ): void {
    view.sliderMovement.minHandelListener( event );
    
  };

  view.maxHandel.onmousedown = function(event): void {
    view.sliderMovement.maxHandelListener( event );
  };
  
  view.handelLabelToggle.addEventListener('change', function() {
    view.callHandelLabelToggleChanger(view)
    let modelResult = facade.getModelData()
    console.log(modelResult)
  });
};
