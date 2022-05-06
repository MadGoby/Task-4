import autobind from 'autobind-decorator';
import { BasicModelSettings, CalculationData, DataForValueScale } from '../Model/types';
import { Model } from '../Model/Model';
import { View } from '../View/View';
import { HandlePositions } from '../View/types';

@autobind
export class Presenter {
  private readonly view: View;

  private readonly model: Model;

  constructor(viewLink: View, modelLink: Model) {
    this.view = viewLink;
    this.model = modelLink;

    this.initialize();
  }

  private bindProxyToHandlesMovement(view: View, model: Model): HandlePositions {
    return new Proxy(this.view.positions, {
      set(target, prop: 'from' | 'to', val) {
        const settings: CalculationData = {
          position: String(val),
          target: prop,
          sliderWidth: view.slider.slider.offsetWidth - view.handles.fromHandle.offsetWidth,
          isDouble: view.settings.double,
        };

        target[prop] = val;
        model.calculateValueByPosition(settings);

        return true;
      },
    });
  }

  private updateValueScale(): void {
    const values: DataForValueScale = this.model.calculateDataForValueScale();
    this.view.refreshValueScale(values);
  }

  private distributeDataForStartPosition(): void {
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
      set(target: BasicModelSettings, property: 'min' | 'max' | 'from' | 'to', value: string) {
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

  private initialize(): void {
    const { view, model } = this;

    view.positions = this.bindProxyToHandlesMovement(view, model);
    model.values = this.bindProxyToModelValues(view);
    this.distributeDataForStartPosition();
  }
}
