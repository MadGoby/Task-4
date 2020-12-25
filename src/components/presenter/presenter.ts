export class Presenter {

  private viewLink;
  private facadeLink;

  constructor (view, facade) {
    this.viewLink = view;
    this.facadeLink = facade;
  };

  startViewMonitoring(): void {
    this.monitorsCurrentHandelsPositions();
    this.monitorsViewRequests();
  };

  monitorsCurrentHandelsPositions(): void {
    let view = this.viewLink;
    let facade = this.facadeLink;

    view.sliderMovement.currentHandelsPositions = new Proxy(view.sliderMovement.currentHandelsPositions, {
      set(target, prop, val) {
        if(typeof val === 'object') {
          target[prop] = val;
          let modelResult = facade.refreshModelData(val, prop);
          view.refreshCurrentValues(modelResult);
          return true;
        } else {
          return false;
        };
      }
    });

  };

  monitorsViewRequests(): void {
    let view = this.viewLink;
    let facade = this.facadeLink;

    view.dataRequestStatus = new Proxy(view.dataRequestStatus, {
      set(target, prop, val) {
        if(typeof val === 'boolean' && val === true) {

          if(prop === 'getMaxData') {
            let result: number = facade.getMaxData();
            view.refreshMaxSideMenuData(result);
          };

          if(prop === 'getMinPositionsAmount') {
            let positions: object = facade.getPositionsAmount();
            view.sliderMovement.sideMenuInputsValuesValidationChecker('min', view.minInput.value, positions['positions'], positions['minimum']);
          };

          if(prop === 'getMaxPositionsAmount') {
            let positions: object = facade.getPositionsAmount();
            view.sliderMovement.sideMenuInputsValuesValidationChecker('max', view.maxInput.value, positions['positions'], positions['minimum']);
          };

          if(prop === 'getPossibleRange') {
            let possibleRange: object = facade.getPossibleRange();
            view.inputsPossibleRange(possibleRange, view.minInput, view.maxInput);
          };

          if(prop === 'startHandelsPosition') {
            let startPositions: object = facade.startHandelsPosition();
            view.sliderMovement.startHandlersPositions(startPositions);
            view.refreshCurrentValues(startPositions);
          }

          if(prop === 'getStepPositionsAmount') {
            let stepAmount: object = facade.getPositionsAmount();
            view.sliderMovement.stepAmount = stepAmount['positions'];
          }
          return true;
        } else {
          return false;
        };
      }
    });
  };
};