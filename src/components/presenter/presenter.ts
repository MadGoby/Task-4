export class Presenter {

  private viewLink;
  private facadeLink;

  constructor (view, facade) {
    this.viewLink = view;
    this.facadeLink = facade;
  };

  bindEventListeners(): void {
    let view = this.viewLink;
    let facade = this.facadeLink;
    this.viewLink.displayElements();
    this.trackingRecordInMyData();
    this.recordingThePositionsValuesForView();
    this.bindListenerForMin();
    this.bindListenerForMax();
    if (this.viewLink.settings['side-menu'] !== false) {
      this.viewLink.handelLabelToggle.addEventListener('change', this.makeBindListenerForLabelToggle(view));
    };
    if (this.viewLink.settings['side-menu'] !== false) {
      this.viewLink.handelToggle.addEventListener('change', this.makeBindListenerForDoubleHandels(view, facade));
    };
    if (this.viewLink.settings['side-menu'] !== false) {
      this.viewLink.planeToggle.addEventListener('change', this.makeBindListenerForPlaneToggle(view));
    };
    this.viewLink.minValue.addEventListener('click', this.makeBindListenerForSelectionMinValue(view));
    this.viewLink.maxValue.addEventListener('click', this.makeBindListenerForSelectionMaxValue(view));
    if (this.viewLink.settings['side-menu'] !== false) {
      this.viewLink.minInput.addEventListener('change', this.makeBindListenerForMinInput(view, facade));
    };
    if (this.viewLink.settings['side-menu'] !== false) {
      this.viewLink.maxInput.addEventListener('change', this.makeBindListenerForMaxInput(view, facade));
    };
    this.possibleRangeForView();
    this.settingStartingPositions();
  };

  trackingRecordInMyData(): void {
    let view = this.viewLink;
    let facade = this.facadeLink;
    view.sliderMovement.myData = new Proxy(view.sliderMovement.myData, {
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

  recordingThePositionsValuesForView(): void {
    if (this.viewLink.sliderMovement.step !== false) {
      let stepAmount: object = this.facadeLink.getPositionsAmount();
      this.viewLink.sliderMovement.stepAmount = stepAmount['positions'];
    };
  };

  bindListenerForMin(): void {
    let view = this.viewLink;
    view.minHandel.onmousedown = function( event ): void {
      view.sliderMovement.minHandelListener( event );
    };
  };

  bindListenerForMax(): void {
    let view = this.viewLink;
    view.maxHandel.onmousedown = function(event): void {
      view.sliderMovement.maxHandelListener( event );
    };
  };

  makeBindListenerForLabelToggle(selfView): Function {
    let view = selfView;
    return function () {
      view.callHandelLabelToggleChanger(view) 
    };
  };

  makeBindListenerForDoubleHandels(selfView, selfFacade): Function {
    let view = selfView;
    let facade = selfFacade;
    return function () {
      view.callMaxHandelToggleChanger(view)
      if (view.handelToggle.checked === true) {
        let result: number = facade.getMaxData();
        view.refreshMaxSideMenuData(result);
      };
    };
  };

  makeBindListenerForPlaneToggle(selfView): Function {
    let view = selfView;
    return function () {
      view.sliderMovement.changePlane(view.planeToggle, view.sliderContainer, view.minValue, view.maxValue);
    };
  };

  makeBindListenerForSelectionMinValue (selfView): Function {
    let view = selfView;
    return function () {
      view.sliderMovement.selectionOfPreparedValue('min');
    };
  };

  makeBindListenerForSelectionMaxValue(selfView): Function {
    let view = selfView;
    return function () {
      view.sliderMovement.selectionOfPreparedValue('max');
    };
  };

  makeBindListenerForMinInput(selfView, selfFacade): Function {
    let view = selfView;
    let facade = selfFacade;
    return function () {
      let positions: object = facade.getPositionsAmount();
      view.sliderMovement.sideMenuInputsValuesValidationChecker('min', view.minInput.value, positions['positions'], positions['minimum']);
    };
  };

  makeBindListenerForMaxInput(selfView, selfFacade): Function {
    let view = selfView;
    let facade = selfFacade;
    return function() {
      let positions: object = facade.getPositionsAmount();
      view.sliderMovement.sideMenuInputsValuesValidationChecker('max', view.maxInput.value, positions['positions'], positions['minimum']);
    };
  };

  possibleRangeForView(): void {
    if (this.viewLink.settings['side-menu'] !== false) {
      let possibleRange: object = this.facadeLink.getPossibleRange();
      this.viewLink.inputsPossibleRange(possibleRange, this.viewLink.minInput, this.viewLink.maxInput);
    };
  };

  settingStartingPositions(): void {
    let startPositions: object = this.facadeLink.startHandelsPosition();
    this.viewLink.sliderMovement.startHandlersPositions(startPositions);
    this.viewLink.refreshCurrentValues(startPositions);
  };
};