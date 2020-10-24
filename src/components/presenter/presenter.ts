import { SliderMovement } from "../view/components/slider-movement.ts";

export function Presenter (view, facade): void {
  
  view.displayElements();
  
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

  if (view.sliderMovement.step !== false) {
    let stepAmount: object = facade.getPositionsAmount();
    view.sliderMovement.stepAmount = stepAmount['positions'];
  }
  

  view.minHandel.onmousedown = function( event ): void {
    view.sliderMovement.minHandelListener( event );
  };

  view.maxHandel.onmousedown = function(event): void {
    view.sliderMovement.maxHandelListener( event );
  };
  
  view.handelLabelToggle.addEventListener('change', function() {
    view.callHandelLabelToggleChanger(view)
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

  view.minValue.addEventListener('click', function() {
    view.sliderMovement.selectionOfPreparedValue('min');
  });

  view.maxValue.addEventListener('click', function() {
    view.sliderMovement.selectionOfPreparedValue('max');
  });

  view.minInput.addEventListener('change', function() {
    let positions: object = facade.getPositionsAmount();
    view.sliderMovement.sideMenuInputsValuesValidationChecker('min', view.minInput.value, positions['positions'], positions['minimum']);
  });

  view.maxInput.addEventListener('change', function() {
    let positions: object = facade.getPositionsAmount();
    view.sliderMovement.sideMenuInputsValuesValidationChecker('max', view.maxInput.value, positions['positions'], positions['minimum']);
  });

  let possibleRange: object = facade.getPossibleRange();
  view.inputsPossibleRange(possibleRange, view.minInput, view.maxInput)

  let startPositions: object = facade.startHandelsPosition();
  view.sliderMovement.startHandlersPositions(startPositions);
  view.refreshCurrentValues(startPositions)
};


