import { CalculationData, DataForValueScale } from '../model/types';
import { Model } from '../model/model';
import { DataForAdjustPosition } from '../view/components/handels/types';
import { RefreshIntervalPositions } from '../view/components/selectedInterval/types';
import { View } from '../view/view';

export class Presenter {
  private readonly view: View;

  private readonly model: Model;

  constructor(viewLink: View, modelLink: Model) {
    this.view = viewLink;
    this.model = modelLink;
  }

  public bindProxyToView(): void {
    const { view, model } = this;

    view.movement.positions = new Proxy(view.movement.positions, {
      set(target, prop: 'from' | 'to', val) {
        target[prop] = val;
        const settings: CalculationData = {
          position: String(val),
          target: prop,
          sliderWidth: view.slider.slider.offsetWidth - view.handles.fromHandel.offsetWidth,
        };
        model.calculateValuesByPosition(settings);
        return true;
      },
    });
    view.dataRequestFromModel = new Proxy(view.dataRequestFromModel, {
      set(target, prop, val) {
        if (val) {
          if (prop === 'needDataForScale') {
            const values: DataForValueScale = model.calculateDataForValueScale();
            view.valuesScale.refreshValueScale(values);
            view.valuesScale.centersValues(
              view.slider.slider.offsetWidth - view.handles.fromHandel.offsetWidth,
              view.handles.fromHandel.offsetWidth,
            );
          }
          if (prop === 'needDataForStartPosition') {
            const dataForFrom: DataForAdjustPosition = {
              target: 'from',
              value: model.values.from,
              totalValues: Number(model.values.max) - Number(model.values.min),
              minValue: model.values.min,
            };
            const dataForTo: DataForAdjustPosition = {
              target: 'to',
              value: model.values.to,
              totalValues: Number(model.values.max) - Number(model.values.min),
              minValue: model.values.min,
            };
            const startFrom: RefreshIntervalPositions = view.handles.adjustPositions(
              dataForFrom,
              view.slider.slider.offsetWidth,
            );
            const startTo: RefreshIntervalPositions = view.handles.adjustPositions(
              dataForTo,
              view.slider.slider.offsetWidth,
            );
            view.interval.adjustPositionRelativeValue(startFrom);
            view.interval.adjustPositionRelativeValue(startTo);
            view.movement.positions.from = Number(startFrom.position);
            view.movement.positions.to = Number(startTo.position);
            model.values.min = model.values.min;
            model.values.max = model.values.max;
          }
          if (prop === 'needStepWidth') {
            if (typeof view.basicSettings.step === 'number') {
              const { stepWidth, step } = model.calculateStepWidth({
                step: view.basicSettings.step,
                sliderWidth: view.slider.slider.offsetWidth,
                handelWidth: view.handles.toHandel.offsetWidth,
              });
              view.movement.stepWidth = stepWidth;
              if (view.basicSettings['side-menu']) view.sideMenu.sideMenuElements.stepInput!.value = String(step);
            }
          }
          if (prop === 'needApplyNewValue') {
            const result: DataForAdjustPosition = model.prepareInputValueForRecord({
              name: val.name,
              value: val.value,
              isDouble: view.basicSettings.double,
              positions: {
                from: view.movement.positions.from,
                to: view.movement.positions.to,
              },
              handelWidth: view.handles.toHandel.offsetWidth,
              sliderWidth: view.slider.slider.offsetWidth,
            });
            const newPosition: RefreshIntervalPositions = view.handles.adjustPositions(
              result,
              view.slider.slider.offsetWidth,
            );
            view.interval.adjustPositionRelativeValue(newPosition);
            if (newPosition.target === 'from') view.movement.positions.from = Number(newPosition.position);
            if (newPosition.target === 'to') view.movement.positions.to = Number(newPosition.position);
          }
          if (prop === 'needApplyValueFromScale') {
            const result: DataForAdjustPosition = model.assignValueFromScale(val, view.basicSettings.double);
            const newPosition: RefreshIntervalPositions = view.handles.adjustPositions(
              result,
              view.slider.slider.offsetWidth,
            );
            view.interval.adjustPositionRelativeValue(newPosition);
            if (newPosition.target === 'from') view.movement.positions.from = Number(newPosition.position);
            if (newPosition.target === 'to') view.movement.positions.to = Number(newPosition.position);
          }
          if (prop === 'needChangeSliderValuesRange') {
            model.changeSliderValuesRange({
              name: val.name,
              value: val.value,
            });
            view.dataRequestFromModel.needDataForStartPosition = true;
            view.dataRequestFromModel.needDataForScale = true;
          }
          return true;
        }
        return false;
      },
    });
  }

  public bindProxyToModel(): void {
    const { view, model } = this;

    model.values = new Proxy(model.values, {
      set(target, prop, val) {
        const values = target;

        if (prop === 'from') values.from = val;
        if (prop === 'to') values.to = val;
        if (prop === 'min') values.min = val;
        if (prop === 'max') values.max = val;

        view.refreshAllComponents({
          value: val,
          target: String(prop),
        });

        return true;
      },
    });
  }
}
