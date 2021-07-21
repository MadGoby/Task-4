import { DataForRefreshingModel } from "./../model/interfaces/DataForRefreshingModel";
import { DataForValueScale } from "./../model/interfaces/DataForValueScale";
import { Model } from "./../model/model";
import { DataForAdjustPosition } from "./../view/components/handels/interfaces/DataForAdjustPosition";
import { RefreshIntervalPositions } from "./../view/components/selectedInterval/interfaces.ts/RefreshIntervalPositions";
import { View } from "./../view/view";

export class Presenter {
  private view: View;
  private model: Model;

  constructor (viewLink: View, modelLink: Model) {
    this.view = viewLink;
    this.model = modelLink;
  };

  public bindProxyToView(): void {
    let view = this.view;
    let model = this.model;

    view.movement.positions = new Proxy(view.movement.positions, {
      set(target, prop, val) {
        if (prop == "from")target.from = val;
        if (prop == "to")target.to = val;
        model.calculateValuesByPosition({
          position: String(val),
          target: String(prop),
          sliderWidth: view.slider.slider.offsetWidth - view.handels.fromHandel.offsetWidth,
        });  
        return true;
      }
    });
    view.dataRequestFromModel = new Proxy(view.dataRequestFromModel, {
      set(target, prop, val) {
        if (val) {
          if (prop == "needDataForScale") {
            let values: DataForValueScale = model.calculateDataForValueScale();
            view.valuesScale.refreshValueScale(values);
            view.valuesScale.centersValues(view.slider.slider.offsetWidth - view.handels.fromHandel.offsetWidth, view.handels.fromHandel.offsetWidth);
          };
          if (prop == "needDataForStartPosition") {
            let dataForFrom: DataForAdjustPosition = {target: "from", value: model.values.from, totalValues: +model.values.max - +model.values.min, minValue: model.values.min};
            let dataForTo: DataForAdjustPosition = {target: "to", value: model.values.to, totalValues: +model.values.max - +model.values.min, minValue: model.values.min};
            let startFrom: RefreshIntervalPositions = view.handels.adjustPositionRelativeValue(dataForFrom, view.slider.slider.offsetWidth);
            let startTo: RefreshIntervalPositions = view.handels.adjustPositionRelativeValue(dataForTo, view.slider.slider.offsetWidth);
            view.interval.adjustPositionRelativeValue(startFrom);
            view.interval.adjustPositionRelativeValue(startTo);
            view.movement.positions.from = Number(startFrom.position);
            view.movement.positions.to = Number(startTo.position);
            model.values.min = model.values.min;
            model.values.max = model.values.max;
          };
          if (prop == "needStepWidth") {
            if(typeof view.basicSettings.step == "number") {
              let {stepWidth, step} = model.calculateStepWidth(view.basicSettings.step, view.slider.slider.offsetWidth, view.handels.toHandel.offsetWidth);
              view.movement.stepWidth = stepWidth;
              if(view.basicSettings["side-menu"]) view.sideMenu.stepInput.value = String(step);
            };
          };
          if (prop == "needApplyNewValue") {
            let result: DataForAdjustPosition = model.prepareInputValueForRecord({
              name: val.name,
              value: val.value,
              isDouble: view.basicSettings.double,
              positions: {
                from: view.movement.positions.from,
                to: view.movement.positions.to
              },
              handelWidth: view.handels.toHandel.offsetWidth,
              sliderWidth: view.slider.slider.offsetWidth
            });
            let newPosition: RefreshIntervalPositions = view.handels.adjustPositionRelativeValue(result, view.slider.slider.offsetWidth);
            view.interval.adjustPositionRelativeValue(newPosition);
            if(newPosition.target == "from") view.movement.positions.from = Number(newPosition.position);
            if(newPosition.target == "to") view.movement.positions.to = Number(newPosition.position);
          };
          if (prop == "needApplyValueFromScale") {
            let result: DataForAdjustPosition = model.assignValueFromScale(val, view.basicSettings.double);
            let newPosition: RefreshIntervalPositions = view.handels.adjustPositionRelativeValue(result, view.slider.slider.offsetWidth);
            view.interval.adjustPositionRelativeValue(newPosition);
            if(newPosition.target == "from") view.movement.positions.from = Number(newPosition.position);
            if(newPosition.target == "to") view.movement.positions.to = Number(newPosition.position);
          }
          if (prop == "needChangeSliderValuesRange") {
            model.changeSliderValuesRange(val.name, val.value);
            view.dataRequestFromModel.needDataForStartPosition = true;
            view.dataRequestFromModel.needDataForScale = true;
          }
          return true;
        } else {
          return false;
        }
      }
    });
  };

  public bindProxyToModel(): void {
    let view = this.view;
    let model = this.model;

    model.values = new Proxy(model.values, {
      set(target, prop, val) {
        if(prop == "from") target.from = val;
        if(prop == "to") target.to = val;
        if(prop == "min") target.min = val;
        if(prop == "max") target.max = val;
        
        view.refreshAllComponents({
          value: val,
          target: String(prop)
        })

        return true;
      }
    });
  };
};