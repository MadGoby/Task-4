import { Facade } from '../model/facade';
import { View } from '../view/view';
import { GetPositionsAmount } from '../model/facade';
import { GetPossibleRange } from '../model/facade';
import { StartHandelsPosition } from '../model/model';
import { GetValuesForValueScale } from '../model/facade';
import { SelectHandleForValueScale } from '../model/facade';
import { DataOfValueRefresh } from '../view/view';

export class Presenter {

  private viewLink;
  private facadeLink;

  constructor (view: View, facade: Facade) {
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
          target[String(prop)] = val;
          let modelResult = facade.refreshModelData(val, String(prop));
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
        if(typeof val === 'boolean' || typeof val === 'string') {

          if(prop === 'getMaxData') {
            let result: number = facade.getMaxData();
            view.refreshMaxSideMenuData(result);
          };

          if(prop === 'getMinPositionsAmount') {
            let positions: GetPositionsAmount = facade.getPositionsAmount();

            view.minInput ? view.sliderMovement.sideMenuInputsValuesValidationChecker('min', +view.minInput.value, +positions['positions'], +positions['minimum']) : false;
          };

          if(prop === 'getMaxPositionsAmount') {
            let positions: GetPositionsAmount = facade.getPositionsAmount();
            view.maxInput ? view.sliderMovement.sideMenuInputsValuesValidationChecker('max', +view.maxInput.value, +positions['positions'], +positions['minimum']) : false;
          };

          if(prop === 'getPossibleRange') {
            let possibleRange: GetPossibleRange = facade.getPossibleRange();
            view.minInput && view.maxInput? view.inputsPossibleRange(possibleRange, view.minInput, view.maxInput ): false;
          };

          if(prop === 'startHandelsPosition') {
            let startPositions: StartHandelsPosition = facade.startHandelsPosition();
            view.sliderMovement.startHandlersPositions(startPositions);
            view.refreshCurrentValues(startPositions);
          };

          if(prop === 'getStepPositionsAmount') {
            let stepAmount: GetPositionsAmount = facade.getPositionsAmount();
            view.sliderMovement.stepAmount = +stepAmount['positions'];
          };

          if(prop === 'getValuesForValueScale') {
            let valueScaleValues: GetValuesForValueScale = facade.getValuesForValueScale();
            view.valueScale.refreshValues(valueScaleValues);
            view.valueScale.centersValuesPositions(view.sliderRange, view.minHandel);
          };

          if(prop === 'selectHandleForValueScale') {

            function checkDoublehandels(double: boolean): void {
              let positions: GetPositionsAmount = facade.getPositionsAmount();
              
              let selectedHandel: SelectHandleForValueScale = facade.selectHandleForValueScale(val, double);

              view.sliderMovement.centeredHandelByValueScale(selectedHandel['target'], selectedHandel['value'], positions['positions'], positions['minimum']);
              
              if (selectedHandel['target'] === 'min') {
                let adaptedObjectForRefresh: DataOfValueRefresh = {
                  'min': selectedHandel['value']
                };
                view.refreshCurrentValues(adaptedObjectForRefresh);
              } else {
                let adaptedObjectForRefresh: DataOfValueRefresh = {
                  'max': selectedHandel['value']
                };
                view.refreshCurrentValues(adaptedObjectForRefresh);
              };
            };

            if (typeof val === 'string' && view.handelToggle) {
              checkDoublehandels(view.handelToggle.checked);
            } else {
              checkDoublehandels(view.settings.range);
            };
          };

          if (prop === "getMinStep" && view.stepInput) {
            let positions: string = facade.getPositionsAmount().positions;
            view.sliderMovement.checkValidityOfChangedStep('min', view.stepInput, positions);
          };

          if (prop === "checksNewStepForValidity" && typeof val === 'string') {
            let positions: string = facade.getPositionsAmount().positions;
            view.stepInput ? view.sliderMovement.checkValidityOfChangedStep(val, view.stepInput, positions) : false;
          };

          return true;
        } else {
          return false;
        };
      }
    });
  };
};