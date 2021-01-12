import { getStartHandelsPosition } from '../../model/model';

interface Handels {
  min: HTMLSpanElement;
  max: HTMLSpanElement;
  minLabel: HTMLLabelElement;
  maxLabel: HTMLLabelElement;
  sliderRange: HTMLDivElement;
  handelsToggle: HTMLInputElement | boolean;
  planeToggle: HTMLInputElement | boolean;
  interval: HTMLDivElement;
  step: number | string | boolean;
};

interface TestMouseEvent {
  clientX: number;
  clientY: number;
}

interface CurrentHandelsPositions {
  [key: string]: {
    [key: string]: string;
  };
};

export class SliderMovement {
  min: HTMLSpanElement;
  max: HTMLSpanElement;
  minLabel: HTMLLabelElement;
  maxLabel: HTMLLabelElement;
  sliderRange: HTMLDivElement;
  handelsToggle: HTMLInputElement | boolean;
  planeToggle: HTMLInputElement | boolean;
  interval: HTMLDivElement;
  step: number | string | boolean;
  stepAmount: number | undefined;

  constructor( handels: Handels) {
    this.min = handels.min;
    this.max = handels.max;
    this.minLabel = handels.minLabel;
    this.maxLabel= handels.maxLabel;
    this.sliderRange = handels.sliderRange;
    this.handelsToggle = handels.handelsToggle;
    this.planeToggle = handels.planeToggle;
    this.interval = handels.interval;
    this.step = handels.step;
  }

  currentHandelsPositions: CurrentHandelsPositions = {
    'min': {},
    'max': {}
  }

  startHandlersPositions(positionValues: getStartHandelsPosition ): void {
    let min: string = ((this.sliderRange.offsetWidth - this.min.offsetWidth) / +positionValues.positions) * (+positionValues['min'] - +positionValues['minimum']) + '';
    let max: string = ((this.sliderRange.offsetWidth - this.min.offsetWidth) / +positionValues.positions) * (+positionValues['max'] - +positionValues['minimum']) + '';
    
    this.currentHandelsPositions.min.min = min;
    this.currentHandelsPositions.max.max = max;
    
    this.min.style.left = min + 'px';
    this.max.style.left = max + 'px';
    
    this.interval.style.left = +min + this.min.offsetWidth / 2 + 'px';
    this.interval.style.right = (this.sliderRange.offsetWidth - +max) - this.min.offsetWidth / 2 + 'px';
  }

  minHandelListener( event: TestMouseEvent, test: TestMouseEvent | undefined ): void {
    let min = this.min;
    let max = this.max;
    let minLabel = this.minLabel;
    let sliderRange = this.sliderRange;
    let that: this = this;
    let shift: number;
    let interval = this.interval;
    let step: number;
    let vertical: boolean;
    let doubleHandels: boolean;

    function checkCurrentSliderSettings():void {
      typeof that.handelsToggle !== 'boolean' ? doubleHandels = that.handelsToggle.checked : doubleHandels = that.handelsToggle;;
      typeof that.planeToggle !== 'boolean' ? vertical = that.planeToggle.checked : that.planeToggle;
      
      if (vertical) {
        shift = event.clientY - min.getBoundingClientRect().top - min.offsetWidth;
      } else {  
        shift = event.clientX - min.getBoundingClientRect().left;
      };
    };
    
    checkCurrentSliderSettings();
    
    if (this.stepAmount  && this.step !== false) {
      step = (sliderRange.offsetWidth - min.offsetWidth) / this.stepAmount * +this.step;
    }
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    
    if( test ) {
      onMouseMove( test )
    };

    function onMouseMove( event: TestMouseEvent ) {
      let newLeft: number;

      if (vertical) {
        newLeft = sliderRange.offsetWidth - (event.clientY - shift - sliderRange.getBoundingClientRect().top);
      } else {
        newLeft = event.clientX - shift - sliderRange.getBoundingClientRect().left;
      };

      let rightEdge = sliderRange.offsetWidth - min.offsetWidth;
      
      if (that.step !== false) {
        if (newLeft >= +that.currentHandelsPositions.min.min + step || newLeft <= +that.currentHandelsPositions.min.min - step) {
          newLeft >= +that.currentHandelsPositions.min.min + step ? newLeft = +that.currentHandelsPositions.min.min + step : false;
          newLeft <= +that.currentHandelsPositions.min.min - step ? newLeft = +that.currentHandelsPositions.min.min - step : false;
          renewalOfPosition();
        }
      } else {
        renewalOfPosition();
      };

      function renewalOfPosition(): void {

        if (newLeft < 0) {
          newLeft = 0;
        };
        
        if (doubleHandels) { 
          if (newLeft >= +that.currentHandelsPositions.max['max'] - max.offsetWidth) {
            newLeft = +that.currentHandelsPositions.max['max'] - max.offsetWidth
          };
        } else {
          if (newLeft > rightEdge) {
            newLeft = rightEdge;
          };
        };

        min.style.left = newLeft + 'px';
        interval.style.left = newLeft + min.offsetWidth / 2 + 'px';
        
        if (newLeft !== undefined || rightEdge !== undefined) {
          that.currentHandelsPositions['min'] = {'min': `${newLeft}`, 'sliderWidth': `${sliderRange.offsetWidth - min.offsetWidth}`}
        };
        
        minLabel.style.left = ((min.offsetWidth - minLabel.offsetWidth) - 1) / 2 + 'px';
      };
    };

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  }

  maxHandelListener( event: TestMouseEvent, test: TestMouseEvent | undefined): void {
    let max = this.max;
    let min = this.min;
    let sliderRange = this.sliderRange;
    let shift: number;
    let maxLabel = this.maxLabel;
    let that = this;
    let interval = this.interval;
    let step: number;
    let doubleHandels: boolean;
    let vertical: boolean;

    if (this.stepAmount && this.step !== false) {
      step = (sliderRange.offsetWidth - min.offsetWidth) / this.stepAmount * +this.step;
    }

    function checkCurrentSliderSettings():void {
      typeof that.handelsToggle !== 'boolean' ? doubleHandels = that.handelsToggle.checked : doubleHandels = that.handelsToggle;;
      typeof that.planeToggle !== 'boolean' ? vertical = that.planeToggle.checked : that.planeToggle;

      if (vertical) {
        shift = event.clientY - max.getBoundingClientRect().top - max.offsetWidth;
      } else {
        shift = event.clientX - max.getBoundingClientRect().left;
      }
    };
    
    checkCurrentSliderSettings();

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    if( test !== undefined ) {
      onMouseMove( test )
    };

    function onMouseMove( event: TestMouseEvent ) {
      let newLeft: number;
      
      if (vertical) {
        newLeft = sliderRange.offsetWidth - (event.clientY - shift - sliderRange.getBoundingClientRect().top);
      } else {
        newLeft = event.clientX - shift - sliderRange.getBoundingClientRect().left;
      }

      let rightEdge = sliderRange.offsetWidth - max.offsetWidth;

      if (that.step !== false) {
        if (newLeft >= +that.currentHandelsPositions.max.max + step || newLeft <= +that.currentHandelsPositions.max.max - step) {
          newLeft >= +that.currentHandelsPositions.max.max + step ? newLeft = +that.currentHandelsPositions.max.max + step : false;
          newLeft <= +that.currentHandelsPositions.max.max - step ? newLeft = +that.currentHandelsPositions.max.max - step : false;
          renewalOfPosition();
        }
      } else {
        renewalOfPosition();
      };

      function renewalOfPosition(): void {

        if (newLeft < 0) {
          newLeft = 0;
        };

        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        };
  
        if (newLeft <= +that.currentHandelsPositions.min['min'] + min.offsetWidth) {
          newLeft = +that.currentHandelsPositions.min['min'] + min.offsetWidth
        };
        
        max.style.left = newLeft + 'px';
        interval.style.right = (sliderRange.offsetWidth - newLeft) - max.offsetWidth / 2 + 'px';
  
        if (newLeft !== undefined || rightEdge !== undefined) {
          that.currentHandelsPositions['max'] = {'max': `${newLeft}`, 'sliderWidth': `${sliderRange.offsetWidth - max.offsetWidth}`}
        };
        
        maxLabel.style.left = ((max.offsetWidth - maxLabel.offsetWidth) - 1) / 2 + 'px';
      };
      
    };
    
    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  }

  changePlane( toggle: HTMLInputElement | boolean, body: HTMLDivElement, minValue: HTMLParagraphElement, maxValue: HTMLParagraphElement): void {
    let toggleResult: boolean;
    typeof toggle === 'boolean' ?  toggleResult = toggle : toggleResult = toggle.checked;
    if (toggleResult) {
      body.style.height = body.offsetWidth + 'px';
      this.sliderRange.style.transform = 'rotate(-90deg)';
      this.sliderRange.style.top = body.offsetWidth / 2 + 'px';
      this.minLabel.classList.remove('minSliderHandelLabel');
      this.maxLabel.classList.remove('maxSliderHandelLabel');
      this.minLabel.classList.add('minSliderHandelLabelVertical');
      this.maxLabel.classList.add('maxSliderHandelLabelVertical');
      minValue.classList.remove('minSliderPoint');
      maxValue.classList.remove('maxSliderPoint');
      minValue.classList.add('minSliderPointVertical');
      maxValue.classList.add('maxSliderPointVertical');
    } else {
      body.style.height = '';
      this.sliderRange.style.transform = 'rotate(0deg)';
      this.sliderRange.style.top = '';
      this.minLabel.classList.remove('minSliderHandelLabelVertical');
      this.maxLabel.classList.remove('maxSliderHandelLabelVertical');
      this.minLabel.classList.add('minSliderHandelLabel');
      this.maxLabel.classList.add('maxSliderHandelLabel');
      minValue.classList.remove('minSliderPointVertical');
      maxValue.classList.remove('maxSliderPointVertical');
      minValue.classList.add('minSliderPoint');
      maxValue.classList.add('maxSliderPoint');
    };
  };

  selectionOfPreparedValue(target: string): void {
    let toggleResult: boolean;
    typeof this.handelsToggle === 'boolean' ?  toggleResult = this.handelsToggle : toggleResult = this.handelsToggle.checked;
    if (target === 'min') {
      this.currentHandelsPositions['min'] = {'min': '0', 'sliderWidth':`${this.sliderRange.offsetWidth - this.min.offsetWidth}`}
      this.min.style.left = '0px'
      this.interval.style.left = 0 + this.min.offsetWidth / 2 + 'px';
    } else {
      if (toggleResult) {
        this.currentHandelsPositions['max'] = {'max': `${this.sliderRange.offsetWidth - this.min.offsetWidth}`, 'sliderWidth':`${this.sliderRange.offsetWidth - this.min.offsetWidth}`};
        this.max.style.left = this.sliderRange.offsetWidth - this.min.offsetWidth + 'px';
        this.interval.style.right = (this.sliderRange.offsetWidth - this.sliderRange.offsetWidth) + this.min.offsetWidth / 2 + 'px';
      } else {
        this.currentHandelsPositions['min'] = {'min': `${this.sliderRange.offsetWidth - this.min.offsetWidth}`, 'sliderWidth':`${this.sliderRange.offsetWidth - this.min.offsetWidth}`};
        this.min.style.left = this.sliderRange.offsetWidth - this.min.offsetWidth + 'px';
        this.interval.style.left = (this.sliderRange.offsetWidth - this.min.offsetWidth) + this.min.offsetWidth / 2 +'px';
      };
    };
  };

  sideMenuInputsValuesValidationChecker(target: string, value: number, positions: number, minimum: number): void {
    let toggleResult: boolean;
    typeof this.handelsToggle === 'boolean' ?  toggleResult = this.handelsToggle : toggleResult = this.handelsToggle.checked;
    if (target === 'min' && toggleResult) {
      let min: string = ((this.sliderRange.offsetWidth - this.min.offsetWidth) / positions) * (value - minimum) + '';

      if (+min >= +this.currentHandelsPositions.max.max - this.min.offsetWidth) {
        min = +this.currentHandelsPositions.max.max - this.min.offsetWidth + '';
      } else if(+min < 0) {
        min = '0';
      };

      this.currentHandelsPositions['min'] = {'min': min, 'sliderWidth': `${this.sliderRange.offsetWidth - this.min.offsetWidth}`};
      this.min.style.left = min + 'px';
      this.interval.style.left = +min + this.min.offsetWidth / 2 + 'px';
    } else if (target === 'min') {
      let min: string = ((this.sliderRange.offsetWidth - this.min.offsetWidth) / positions) * (value - minimum) + '';

      if(+min < 0) {
        min = '0';
      } else if (+min > this.sliderRange.offsetWidth - this.min.offsetWidth) {
        min = (this.sliderRange.offsetWidth - this.min.offsetWidth) + '';
      };

      this.currentHandelsPositions['min'] = {'min': min, 'sliderWidth': `${this.sliderRange.offsetWidth - this.min.offsetWidth}`};
      this.min.style.left = min + 'px';
      this.interval.style.left = +min + this.min.offsetWidth / 2 + 'px';
    } else if (target === 'max') {
      let max: string = ((this.sliderRange.offsetWidth - this.max.offsetWidth) / positions) * (value - minimum) + '';

      if (+max <= +this.currentHandelsPositions.min.min + this.min.offsetWidth) {
        max = +this.currentHandelsPositions.min.min + this.max.offsetWidth + '';
      } else if(+max > this.sliderRange.offsetWidth - this.min.offsetWidth){
        max = (this.sliderRange.offsetWidth - this.min.offsetWidth) + '';
      };

      this.currentHandelsPositions['max'] = {'max': max, 'sliderWidth': `${this.sliderRange.offsetWidth - this.max.offsetWidth}`};
      this.max.style.left = max + 'px';
      this.interval.style.right = (this.sliderRange.offsetWidth - +max) - this.min.offsetWidth / 2 + 'px';
    }
  };

  centeredHandelByValueScale(target: string, value: string, positions: string, minimum: string): void {
    console.log(target, value)
    if (target === 'min') {
      let min: string = String(((this.sliderRange.offsetWidth - this.min.offsetWidth) / +positions) * (+value - +minimum));

      if(+min < 0) {
        min = '0';
      } else if (+min > this.sliderRange.offsetWidth - this.min.offsetWidth) {
        min = String((this.sliderRange.offsetWidth - this.min.offsetWidth));
      };

      this.min.style.left = min + 'px';
      this.currentHandelsPositions['min'] = {'min': `${min}`, 'sliderWidth': `${this.sliderRange.offsetWidth - this.min.offsetWidth}`};
      this.interval.style.left = +min + this.min.offsetWidth / 2 + 'px';
    } else if (target === 'max') {
      let max: string = String(((this.sliderRange.offsetWidth - this.max.offsetWidth) / +positions) * (+value - +minimum));

      if (+max <= +this.currentHandelsPositions.min.min + this.min.offsetWidth) {
        max = String(+this.currentHandelsPositions.min.min + this.max.offsetWidth);
      } else if(+max > this.sliderRange.offsetWidth - this.min.offsetWidth){
        max = String((this.sliderRange.offsetWidth - this.min.offsetWidth));
      };
      this.currentHandelsPositions['max'] = {'max': `${max}`, 'sliderWidth': `${this.sliderRange.offsetWidth - this.max.offsetWidth}`}
      this.max.style.left = max + 'px';
      this.interval.style.right = (this.sliderRange.offsetWidth - +max) - this.min.offsetWidth / 2 + 'px';
    };
  };

  checkValidityOfChangedStep(value: string, input: HTMLInputElement, positions: string): void {
    let pixelsPerUnit: number = this.sliderRange.offsetWidth / +positions
    let minStep: number = Math.round(1 / pixelsPerUnit);
    if (minStep < 1) {
      minStep = 1;
    };
    input.setAttribute('min', String(minStep));
    input.setAttribute('max', String(+positions / 2));
    if (value === 'min') {
      input.value = String(minStep);
    } else {
      if (+value <= minStep) {
        input.value = String(minStep);
        this.step = false;
      } else if (+value > +positions / 2) {
        input.value = String(+positions / 2);
        this.step = String(+positions / 2);
      } else {
        input.value = value;
        this.step = value;
      };
    };
  };
};