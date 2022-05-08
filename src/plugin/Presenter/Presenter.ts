import autobind from 'autobind-decorator';
import { BasicModelSettings, CalculationData, DataForValueScale } from '../Model/types';
import { Model } from '../Model/Model';
import { View } from '../View/View';
import {
  HandlePositions,
  UpdatePositionTarget,
  ValuesToPass,
} from '../View/types';

@autobind
export class Presenter {
  private readonly view: View;

  private readonly model: Model;

  constructor(viewLink: View, modelLink: Model) {
    this.view = viewLink;
    this.model = modelLink;
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
    return new Proxy(this.model.values, {
      set(target: BasicModelSettings, property: 'min' | 'max' | 'from' | 'to', value: number) {
        target[property] = value;

        view.refreshHandleValues({
          value,
          target: property,
          isToFixed: view.settings.integer,
          totalValues: model.getTotalValues(),
          minValue: Number(model.values.min),
        });

        return true;
      },
    });
  }

  public initialize(): void {
    const { view, model } = this;

    view.positions = this.bindProxyToHandlesMovement(view, model);
    view.valuesToPass = this.handleProxyToPassNewValue(view, model);
    model.values = this.bindProxyToModelValues(view);
    this.updateAllViewValues();
  }
}
