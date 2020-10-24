interface Handels {
  [key: string]: HTMLLabelElement | HTMLInputElement | HTMLDivElement;
}
interface MyDataObject {
  [key: string]: {
    [key: string]: string
  };
}

interface StartHandelsPositionsData {
  [key: string]: string
}

export class SliderMovement {
  private min: HTMLSpanElement;
  private max: HTMLSpanElement;
  private minLabel: HTMLLabelElement;
  private maxLabel: HTMLLabelElement;
  private sliderRange: HTMLDivElement;
  private handelsToggle: HTMLInputElement;
  private planeToggle: HTMLInputElement;
  private interval: HTMLDivElement;
  private step: number | string | boolean;
  private stepAmount: number;

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

  myData: MyDataObject = {
    'min': {},
    'max': {}
  }

  startHandlersPositions(positionValues: StartHandelsPositionsData ) {
    let min: string = ((this.sliderRange.offsetWidth - this.min.offsetWidth) / +positionValues.positions) * (+positionValues['min'] - +positionValues['minimum']) + '';
    let max: string = ((this.sliderRange.offsetWidth - this.min.offsetWidth) / +positionValues.positions) * (+positionValues['max'] - +positionValues['minimum']) + '';
    
    this.myData.min.min = min;
    this.myData.max.max = max;
    
    this.min.style.left = min + 'px';
    this.max.style.left = max + 'px';
    
    this.interval.style.left = +min + this.min.offsetWidth / 2 + 'px';
    this.interval.style.right = (this.sliderRange.offsetWidth - +max) - this.min.offsetWidth / 2 + 'px';
  }

  minHandelListener( event, test:object ) {
    let min = this.min;
    let max = this.max;
    let minLabel = this.minLabel;
    let sliderRange = this.sliderRange;
    let that = this;
    let shift: number;
    let doubleHandels = this.handelsToggle.checked;
    let vertical = this.planeToggle.checked;
    let interval = this.interval;
    let step;

    if (this.step !== false) {
      step = (sliderRange.offsetWidth - min.offsetWidth) / this.stepAmount * +this.step;
    }

    if (vertical) {
      shift = event.clientY - min.getBoundingClientRect().top - min.offsetWidth;
    } else {  
      shift = event.clientX - min.getBoundingClientRect().left;
    }
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    
    if( test !== undefined ) {
      onMouseMove( test )
    };

    function onMouseMove( event ) {
      let newLeft: number;

      if (vertical) {
        newLeft = sliderRange.offsetWidth - (event.clientY - shift - sliderRange.getBoundingClientRect().top);
      } else {
        newLeft = event.clientX - shift - sliderRange.getBoundingClientRect().left;
      };

      let rightEdge = sliderRange.offsetWidth - min.offsetWidth;
      
      if (that.step !== false) {
        if (newLeft >= +that.myData.min.min + step || newLeft <= +that.myData.min.min - step) {
          newLeft >= +that.myData.min.min + step ? newLeft = +that.myData.min.min + step : false;
          newLeft <= +that.myData.min.min - step ? newLeft = +that.myData.min.min - step : false;
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
          if (newLeft >= +that.myData.max['max'] - max.offsetWidth) {
            newLeft = +that.myData.max['max'] - max.offsetWidth
          };
        } else {
          if (newLeft > rightEdge) {
            newLeft = rightEdge;
          };
        };

        min.style.left = newLeft + 'px';
        interval.style.left = newLeft + min.offsetWidth / 2 + 'px';
        
        if (newLeft !== undefined || rightEdge !== undefined) {
          that.myData['min'] = {'min': `${newLeft}`, 'sliderWidth': `${sliderRange.offsetWidth - min.offsetWidth}`}
        };
        
        minLabel.style.left = ((min.offsetWidth - minLabel.offsetWidth) - 1) / 2 + 'px';
      }  
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  }

  maxHandelListener( event, test:object ) {
    let max = this.max;
    let min = this.min;
    let sliderRange = this.sliderRange;
    let shift: number;
    let maxLabel = this.maxLabel;
    let that = this;
    let doubleHandels = this.handelsToggle.checked;
    let vertical = this.planeToggle.checked;
    let interval = this.interval;
    let step;

    if (this.step !== false) {
      step = (sliderRange.offsetWidth - min.offsetWidth) / this.stepAmount * +this.step;
    }

    if (vertical) {
      shift = event.clientY - max.getBoundingClientRect().top - max.offsetWidth;
    } else {
      shift = event.clientX - max.getBoundingClientRect().left;
    }
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    if( test !== undefined ) {
      onMouseMove( test )
    };

    function onMouseMove( event ) {
      let newLeft: number;
      
      if (vertical) {
        newLeft = sliderRange.offsetWidth - (event.clientY - shift - sliderRange.getBoundingClientRect().top);
      } else {
        newLeft = event.clientX - shift - sliderRange.getBoundingClientRect().left;
      }

      let rightEdge = sliderRange.offsetWidth - max.offsetWidth;

      if (that.step !== false) {
        if (newLeft >= +that.myData.max.max + step || newLeft <= +that.myData.max.max - step) {
          newLeft >= +that.myData.max.max + step ? newLeft = +that.myData.max.max + step : false;
          newLeft <= +that.myData.max.max - step ? newLeft = +that.myData.max.max - step : false;
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
  
        if (newLeft <= +that.myData.min['min'] + min.offsetWidth) {
          newLeft = +that.myData.min['min'] + min.offsetWidth
        };
        
        max.style.left = newLeft + 'px';
        interval.style.right = (sliderRange.offsetWidth - newLeft) - max.offsetWidth / 2 + 'px';
  
        if (newLeft !== undefined || rightEdge !== undefined) {
          that.myData['max'] = {'max': `${newLeft}`, 'sliderWidth': `${sliderRange.offsetWidth - max.offsetWidth}`}
        };
        
        maxLabel.style.left = ((max.offsetWidth - maxLabel.offsetWidth) - 1) / 2 + 'px';
      };
    };
    
    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  }

  changePlane( toggle:HTMLInputElement, body: HTMLDivElement, minValue: HTMLParagraphElement, maxValue: HTMLParagraphElement): void {
    if (toggle.checked) {
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
    if (target === 'min') {
      this.myData['min'] = {'min': '0', 'sliderWidth':`${this.sliderRange.offsetWidth - this.min.offsetWidth}`}
      this.min.style.left = '0px'
      this.interval.style.left = 0 + this.min.offsetWidth / 2 + 'px';
    } else {
      if (this.handelsToggle.checked === true) {
        this.myData['max'] = {'max': `${this.sliderRange.offsetWidth - this.min.offsetWidth}`, 'sliderWidth':`${this.sliderRange.offsetWidth - this.min.offsetWidth}`};
        this.max.style.left = this.sliderRange.offsetWidth - this.min.offsetWidth + 'px';
        this.interval.style.right = (this.sliderRange.offsetWidth - this.sliderRange.offsetWidth) + this.min.offsetWidth / 2 + 'px';
      } else {
        this.myData['min'] = {'min': `${this.sliderRange.offsetWidth - this.min.offsetWidth}`, 'sliderWidth':`${this.sliderRange.offsetWidth - this.min.offsetWidth}`};
        this.min.style.left = this.sliderRange.offsetWidth - this.min.offsetWidth + 'px';
        this.interval.style.left = (this.sliderRange.offsetWidth - this.min.offsetWidth) + this.min.offsetWidth / 2 +'px';
      }
    }
  }

  sideMenuInputsValuesValidationChecker(target: string, value: number, positions: number, minimum: number): void {
  
    if (target === 'min' && this.handelsToggle.checked) {
      let min: string = ((this.sliderRange.offsetWidth - this.min.offsetWidth) / positions) * (value - minimum) + '';

      if (+min >= +this.myData.max.max - this.min.offsetWidth) {
        min = +this.myData.max.max - this.min.offsetWidth + '';
      } else if(+min < 0) {
        min = '0';
      };

      this.myData['min'] = {'min': min, 'sliderWidth': `${this.sliderRange.offsetWidth - this.min.offsetWidth}`};
      this.min.style.left = min + 'px';
      this.interval.style.left = +min + this.min.offsetWidth / 2 + 'px';
    } else if (target === 'min') {
      let min: string = ((this.sliderRange.offsetWidth - this.min.offsetWidth) / positions) * (value - minimum) + '';

      if(+min < 0) {
        min = '0';
      } else if (+min > this.sliderRange.offsetWidth - this.min.offsetWidth) {
        min = (this.sliderRange.offsetWidth - this.min.offsetWidth) + '';
      };

      this.myData['min'] = {'min': min, 'sliderWidth': `${this.sliderRange.offsetWidth - this.min.offsetWidth}`};
      this.min.style.left = min + 'px';
      this.interval.style.left = +min + this.min.offsetWidth / 2 + 'px';
    } else if (target === 'max') {
      let max: string = ((this.sliderRange.offsetWidth - this.max.offsetWidth) / positions) * (value - minimum) + '';

      if (+max <= +this.myData.min.min + this.min.offsetWidth) {
        max = +this.myData.min.min + this.max.offsetWidth + '';
      } else if(+max > this.sliderRange.offsetWidth - this.min.offsetWidth){
        max = (this.sliderRange.offsetWidth - this.min.offsetWidth) + '';
      };

      this.myData['max'] = {'max': max, 'sliderWidth': `${this.sliderRange.offsetWidth - this.max.offsetWidth}`};
      this.max.style.left = max + 'px';
      this.interval.style.right = (this.sliderRange.offsetWidth - +max) - this.min.offsetWidth / 2 + 'px';
    }
  };
};