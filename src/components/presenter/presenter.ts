import autobind from 'autobind-decorator';
import { BasicModelSettings, CalculationData, DataForValueScale } from '../model/types';
import { Model } from '../model/model';
import { DataForAdjustPosition } from '../view/components/handels/types';
import { RefreshIntervalPositions } from '../view/components/selectedInterval/types';
import { View } from '../view/view';
import { HandlesPosition } from '../view/components/movement/types';
import { DataRequestToModel, DataRequestValue } from '../view/types';

@autobind
export class Presenter {
  private readonly view: View;

  private readonly model: Model;

  constructor(viewLink: View, modelLink: Model) {
    this.view = viewLink;
    this.model = modelLink;
  }

  private bindProxyToHandlesMovement(view: View, model: Model): HandlesPosition {
    return new Proxy(this.view.movement.positions, {
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
  }

  private distributesDataForScale(): void {
    const values: DataForValueScale = this.model.calculateDataForValueScale();
    this.view.valuesScale.refreshValueScale(values);
    this.view.valuesScale.centersValues(
      this.view.slider.slider.offsetWidth - this.view.handles.fromHandel.offsetWidth,
      this.view.handles.fromHandel.offsetWidth,
    );
  }

  private prepareDataForAdjustPosition(target: 'from' | 'to', value: string): DataForAdjustPosition {
    return {
      target,
      value,
      totalValues: Number(this.model.values.max) - Number(this.model.values.min),
      minValue: this.model.values.min,
    };
  }

  private prepareNewHandlesPositionsData(handleData: DataForAdjustPosition): RefreshIntervalPositions {
    return this.view.handles.adjustPositions(
      handleData,
      this.view.slider.slider.offsetWidth,
    );
  }

  private distributeDataForStartPosition(): void {
    const dataForFrom: DataForAdjustPosition = this.prepareDataForAdjustPosition('from', this.model.values.from);
    const dataForTo: DataForAdjustPosition = this.prepareDataForAdjustPosition('to', this.model.values.to);
    const startFrom: RefreshIntervalPositions = this.prepareNewHandlesPositionsData(dataForFrom);
    const startTo: RefreshIntervalPositions = this.prepareNewHandlesPositionsData(dataForTo);
    const adjustPositions = this.view.interval.adjustPositionRelativeValue;
    adjustPositions(startFrom);
    adjustPositions(startTo);
    this.view.movement.positions.from = Number(startFrom.position);
    this.view.movement.positions.to = Number(startTo.position);
    // eslint-disable-next-line no-self-assign
    this.model.values.min = this.model.values.min;
    // eslint-disable-next-line no-self-assign
    this.model.values.max = this.model.values.max;
  }

  private distributeStepWidth(): void {
    const writesNewStepWidth = (): void => {
      const { stepWidth, step } = this.model.calculateStepWidth({
        step: Number(this.view.basicSettings.step),
        sliderWidth: this.view.slider.slider.offsetWidth,
        handelWidth: this.view.handles.toHandel.offsetWidth,
      });
      this.view.movement.stepWidth = stepWidth;
      if (this.view.basicSettings['side-menu']) this.view.sideMenu.sideMenuElements.stepInput!.value = String(step);
    };

    if (typeof this.view.basicSettings.step === 'number') writesNewStepWidth();
  }

  private distributeNewValuesForApply(name: 'from' | 'to', value: string): void {
    const result: DataForAdjustPosition = this.model.prepareInputValueForRecord({
      name,
      value,
      isDouble: this.view.basicSettings.double,
      positions: {
        from: this.view.movement.positions.from,
        to: this.view.movement.positions.to,
      },
      handelWidth: this.view.handles.toHandel.offsetWidth,
      sliderWidth: this.view.slider.slider.offsetWidth,
    });
    const newPosition: RefreshIntervalPositions = this.view.handles.adjustPositions(
      result,
      this.view.slider.slider.offsetWidth,
    );
    this.view.interval.adjustPositionRelativeValue(newPosition);
    if (newPosition.target === 'from') this.view.movement.positions.from = Number(newPosition.position);
    if (newPosition.target === 'to') this.view.movement.positions.to = Number(newPosition.position);
  }

  private distributeValueFromScaleToApply(value: string): void {
    const result: DataForAdjustPosition = this.model.assignValueFromScale(value, this.view.basicSettings.double);
    const newPosition: RefreshIntervalPositions = this.view.handles.adjustPositions(
      result,
      this.view.slider.slider.offsetWidth,
    );
    this.view.interval.adjustPositionRelativeValue(newPosition);
    if (newPosition.target === 'from') this.view.movement.positions.from = Number(newPosition.position);
    if (newPosition.target === 'to') this.view.movement.positions.to = Number(newPosition.position);
  }

  private distributeSliderValuesRangeToApply(value: DataRequestValue): void {
    this.model.changeSliderValuesRange({
      name: value?.name,
      value: value.value,
    });
    this.view.dataRequestToModel.needDataForStartPosition.value = 'true';
    this.view.dataRequestToModel.needDataForScale.value = 'true';
  }

  private handlesRequestsFromView(property: string, value: DataRequestValue): void {
    switch (property) {
      case 'needDataForScale':
        this.distributesDataForScale();
        break;
      case 'needDataForStartPosition':
        this.distributeDataForStartPosition();
        break;
      case 'needStepWidth':
        this.distributeStepWidth();
        break;
      case 'needApplyNewValue':
        this.distributeNewValuesForApply(value.name as 'from' | 'to', value.value);
        break;
      case 'needApplyValueFromScale':
        this.distributeValueFromScaleToApply(value.value);
        break;
      case 'needChangeSliderValuesRange':
        this.distributeSliderValuesRangeToApply(value);
        break;
      default:
        break;
    }
  }

  private bindProxyToViewRequests(): DataRequestToModel {
    const that: this = this;
    return new Proxy(this.view.dataRequestToModel, {
      set(target: DataRequestToModel, property: string, value: DataRequestValue) {
        if (!value) return false;
        that.handlesRequestsFromView(property, value);
        return true;
      },
    });
  }

  private bindProxyToModel(view: View): BasicModelSettings {
    return new Proxy(this.model.values, {
      set(target: BasicModelSettings, property: 'min' | 'max' | 'from' | 'to', value: string) {
        target[property] = value;

        view.refreshAllComponents({
          value,
          target: property,
        });

        return true;
      },
    });
  }

  public initialize(): void {
    const { view, model } = this;

    view.movement.positions = this.bindProxyToHandlesMovement(view, model);
    view.dataRequestToModel = this.bindProxyToViewRequests();
    model.values = this.bindProxyToModel(view);
  }
}
