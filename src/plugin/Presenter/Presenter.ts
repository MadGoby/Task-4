import autobind from 'autobind-decorator';
import {
  BasicModelSettings,
  CalculationData,
  DataForValueScale,
  ModelValues,
} from '../Model/types';
import { Model } from '../Model/Model';
import { View } from '../View/View';
import {
  HandlePositions,
  UpdatePositionTarget,
  ValuesToPass, ViewRequests,
} from '../View/types';
import { SliderOptions } from '../types';

@autobind
export class Presenter {
  private readonly view: View;

  private readonly model: Model;

  private readonly getOptions: () => SliderOptions;

  constructor(viewLink: View, modelLink: Model, getOptions: () => SliderOptions) {
    this.view = viewLink;
    this.model = modelLink;
    this.getOptions = getOptions;
  }

  private bindProxyToHandlesMovement(): HandlePositions {
    const that: Presenter = this;

    return new Proxy(this.view.positions, {
      set(target, property: 'from' | 'to', value) {
        const settings: CalculationData = {
          position: value,
          target: property,
          sliderWidth: that.view.slider.slider.offsetWidth - that.view.handles.fromHandle.offsetWidth,
          isDouble: that.getOptions().double,
        };

        target[property] = value;
        that.model.writeValueFromPosition(settings);

        return true;
      },
    });
  }

  private handleProxyToPassNewValue() {
    const that: Presenter = this;

    return new Proxy(this.view.valuesToPass, {
      set(target: ValuesToPass, property: UpdatePositionTarget, value: number) {
        that.model.writeValue({
          value,
          target: property,
          sliderWidth: that.view.slider.slider.offsetWidth - that.view.handles.fromHandle.offsetWidth,
          isDouble: that.getOptions().double,
        });

        return true;
      },
    });
  }

  private updateValueScale(): void {
    const values: DataForValueScale = this.model.calculateDataForValueScale();
    this.view.refreshValueScale(values);
  }

  private updateAllViewValues(): void {
    const options: SliderOptions = this.getOptions();

    this.view.refreshHandleValues({
      value: this.model.values.from,
      target: 'from',
      isToFixed: options.integer,
      totalValues: this.model.getTotalValues(),
      minValue: Number(this.model.values.min),
    });

    this.view.refreshHandleValues({
      value: this.model.values.to,
      target: 'to',
      isToFixed: options.integer,
      totalValues: this.model.getTotalValues(),
      minValue: Number(this.model.values.min),
    });

    this.updateValueScale();
  }

  private bindProxyToModelValues(): BasicModelSettings {
    const that: Presenter = this;

    return new Proxy(this.model.values, {
      set(target: BasicModelSettings, property: ModelValues, value: number): boolean {
        const options: SliderOptions = that.getOptions();
        target[property] = value;

        if (property !== 'step') {
          that.view.refreshHandleValues({
            value,
            target: property,
            isToFixed: options.integer,
            totalValues: that.model.getTotalValues(),
            minValue: Number(that.model.values.min),
          });
        }

        if (options.onChange) options.onChange(that.model.values);

        return true;
      },
    });
  }

  private bindProxyToViewRequests(): ViewRequests {
    const that: Presenter = this;

    return new Proxy(this.view.requests, {
      set(target: ViewRequests, property: string, value: boolean): boolean {
        if (!value) return false;

        if (property === 'needDataForViewUpdate') that.updateAllViewValues();

        return true;
      },
    });
  }

  public initialize(): void {
    const { view, model } = this;

    view.positions = this.bindProxyToHandlesMovement();
    view.valuesToPass = this.handleProxyToPassNewValue();
    view.requests = this.bindProxyToViewRequests();
    model.values = this.bindProxyToModelValues();
    this.updateAllViewValues();

    const options: SliderOptions = this.getOptions();
    if (options.onStart) options.onStart(model.values);
  }
}
