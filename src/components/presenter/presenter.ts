import { SliderMovement } from "../view/components/slider-movement.ts";


export function Presenter (view, facade): void {
  
  view.displayElements();
  
  view.sliderMovement.myData = new Proxy(view.sliderMovement.myData, {
    set(target, prop, val) {
      console.log(prop, val)
      if(typeof val === 'object') {
        target[prop] = val;
        let modelResult = facade.refreshModelData(val, prop);
        console.log(modelResult)
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
  });

  view.handelToggle.addEventListener('change', function() {
    view.callMaxHandelToggleChanger(view)
    if (view.handelToggle.checked === true) {
      let result: number = facade.getMaxData();
      view.refreshMaxSideMenuData(result)
    };
  });

  view.planeToggle.addEventListener('change', function() {
    view.sliderMovement.changePlane(view.planeToggle, view.sliderContainer, view.minValue, view.maxValue);
  });

  let startPositions: object = facade.startHandelsPosition();
  view.sliderMovement.startHandlersPositions(startPositions);
  view.refreshCurrentValues(startPositions)
  
};


