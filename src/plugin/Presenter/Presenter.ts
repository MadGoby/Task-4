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

  private readonly options: SliderOptions;

  constructor(viewLink: View, modelLink: Model, options: SliderOptions) {
    this.view = viewLink;
    this.model = modelLink;
    this.options = options;
  }

  private bindProxyToHandlesMovement(view: View, model: Model): HandlePositions {
    return new Proxy(this.view.positions, {
      set(target, property: 'from' | 'to', value) {
        const settings: CalculationData = {
          position: value,
          target: property,
          sliderWidth: view.slider.slider.offsetWidth - view.handles.fromHandle.offsetWidth,
          isDouble: view.settings.double,
        };

        target[property] = value;
        model.writeValueFromPosition(settings);

        return true;
      },
    });
  }

  private handleProxyToPassNewValue(view: View, model: Model) {
    return new Proxy(this.view.valuesToPass, {
      set(target: ValuesToPass, property: UpdatePositionTarget, value: number) {
        model.writeValue({
          value,
          target: property,
          sliderWidth: view.slider.slider.offsetWidth - view.handles.fromHandle.offsetWidth,
          isDouble: view.settings.double,
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
    this.view.refreshHandleValues({
      value: this.model.values.from,
      target: 'from',
      isToFixed: this.view.settings.integer,
      totalValues: this.model.getTotalValues(),
      minValue: Number(this.model.values.min),
    });
    this.view.refreshHandleValues({
      value: this.model.values.to,
      target: 'to',
      isToFixed: this.view.settings.integer,
      totalValues: this.model.getTotalValues(),
      minValue: Number(this.model.values.min),
    });
    this.updateValueScale();
  }

  private bindProxyToModelValues(view: View): BasicModelSettings {
    const { model } = this;
    const that: Presenter = this;
    return new Proxy(this.model.values, {
      set(target: BasicModelSettings, property: ModelValues, value: number): boolean {
        target[property] = value;

        if (property !== 'step') {
          view.refreshHandleValues({
            value,
            target: property,
            isToFixed: view.settings.integer,
            totalValues: model.getTotalValues(),
            minValue: Number(model.values.min),
          });
        }

        if (that.options.onChange) that.options.onChange({ property, value });

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

    view.positions = this.bindProxyToHandlesMovement(view, model);
    view.valuesToPass = this.handleProxyToPassNewValue(view, model);
    view.requests = this.bindProxyToViewRequests();
    model.values = this.bindProxyToModelValues(view);
    this.updateAllViewValues();
  }
}
