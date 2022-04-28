import autobind from 'autobind-decorator';
import { BasicModelSettings, CalculationData, DataForValueScale } from '../Model/types';
import { Model } from '../Model/Model';
import { DataForAdjustPosition } from '../View/Handles/types';
import { RefreshIntervalPositions } from '../View/SelectedInterval/types';
import { View } from '../View/View';
import { HandlesPosition } from '../View/Movement/types';
import { DataRequestToModel, DataRequestValue } from '../View/types';

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
        const isExtraRange = val === 0 || val === view.slider.slider.offsetWidth - view.handles.fromHandle.offsetWidth;
        const settings: CalculationData = {
          position: String(val),
          target: prop,
          sliderWidth: view.slider.slider.offsetWidth - view.handles.fromHandle.offsetWidth,
        };

        if (isExtraRange) {
          view.handles.isInputChanges = true;
          view.sideMenu.isInputChanges = true;
        }

        target[prop] = val;
        model.calculateValuesByPosition(settings);

        return true;
      },
    });
  }

  private distributesDataForScale(): void {
    const values: DataForValueScale = this.model.calculateDataForValueScale();
    this.view.valuesScale.refreshValueScale(values);
    this.view.valuesScale.centerValues(
      this.view.slider.slider.offsetWidth - this.view.handles.fromHandle.offsetWidth,
      this.view.handles.fromHandle.offsetWidth,
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
    const adjustPositions = this.view.interval.adjustPositionRelativeToValue;
    adjustPositions(startFrom);
    adjustPositions(startTo);
    this.view.movement.positions.from = Number(startFrom.position);
    this.view.movement.positions.to = Number(startTo.position);
    this.view.refreshAllComponents({
      value: this.model.values.min,
      target: 'min',
      isToFixed: this.view.basicSettings.integer,
    });
    this.view.refreshAllComponents({
      value: this.model.values.max,
      target: 'max',
      isToFixed: this.view.basicSettings.integer,
    });
  }

  private distributeStepWidth(): void {
    const writesNewStepWidth = (): void => {
      const { stepWidth, step } = this.model.calculateStepWidth({
        step: Number(this.view.basicSettings.step),
        sliderWidth: this.view.slider.slider.offsetWidth,
        handleWidth: this.view.handles.fromHandle.offsetWidth,
      });
      this.view.movement.stepWidth = stepWidth;

      this.view.basicSettings.integer = Number.isInteger(step);

      if (this.view.basicSettings.sideMenu) {
        (this.view.sideMenu.sideMenuElements.stepInput as HTMLInputElement).value = String(step);
        (this.view.sideMenu.sideMenuElements.integerToggle as HTMLInputElement).checked = Number.isInteger(step);
      }
    };

    if (typeof this.view.basicSettings.step === 'number') writesNewStepWidth();
  }

  private static checkCorrectTarget(name: string): 'from' | 'to' | false {
    let correctName: 'from' | 'to' | false = false;
    if (name === 'from') {
      correctName = 'from';
    } else if (name === 'to') {
      correctName = 'to';
    }
    return correctName;
  }

  private distributeNewValuesForApply(name: string, value: string): void {
    const correctName: 'from' | 'to' | false = Presenter.checkCorrectTarget(name);
    if (!correctName) return;

    const result: DataForAdjustPosition = this.model.prepareInputValueForRecord({
      name: correctName,
      value,
      step: this.view.basicSettings.step,
      isDouble: this.view.basicSettings.double,
      positions: {
        from: this.view.movement.positions.from,
        to: this.view.movement.positions.to,
      },
      handleWidth: this.view.handles.toHandle.offsetWidth,
      sliderWidth: this.view.slider.slider.offsetWidth,
    });
    const newPosition: RefreshIntervalPositions = this.view.handles.adjustPositions(
      result,
      this.view.slider.slider.offsetWidth,
    );

    this.view.handles.isInputChanges = true;
    this.view.sideMenu.isInputChanges = true;
    this.view.interval.adjustPositionRelativeToValue(newPosition);
    this.view.movement.positions[newPosition.target] = Number(newPosition.position);
  }

  private distributeValueFromScaleToApply(value: string): void {
    const result: DataForAdjustPosition = this.model.assignValueFromScale(value, this.view.basicSettings.double);
    const newPosition: RefreshIntervalPositions = this.view.handles.adjustPositions(
      result,
      this.view.slider.slider.offsetWidth,
    );
    this.view.handles.isInputChanges = true;
    this.view.sideMenu.isInputChanges = true;
    this.view.interval.adjustPositionRelativeToValue(newPosition);
    if (newPosition.target === 'from') this.view.movement.positions.from = Number(newPosition.position);
    if (newPosition.target === 'to') this.view.movement.positions.to = Number(newPosition.position);
  }

  private distributeSliderValuesRangeToApply(value: DataRequestValue): void {
    this.model.changeSliderValuesRange({
      name: value?.name,
      value: value.value,
    });
    this.view.dataRequestToModel.needDataForStartPosition = { name: '', value: 'true' };
    this.view.dataRequestToModel.needDataForScale = { name: '', value: 'true' };
    this.view.dataRequestToModel.needStepWidth = { name: '', value: 'true' };
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
        this.distributeNewValuesForApply(value.name, value.value);
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
          isToFixed: view.basicSettings.integer,
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
