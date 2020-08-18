interface Handels {
  [key: string]: HTMLDivElement | HTMLLabelElement | HTMLInputElement ;
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
  min: HTMLSpanElement;
  max: HTMLSpanElement;
  minLabel: HTMLElement;
  maxLabel: HTMLElement;
  sliderRange: HTMLElement;
  handelsToggle: HTMLInputElement;
  planeToggle: HTMLInputElement;
  interval: HTMLDivElement;

  constructor( handels: Handels) {
    this.min = handels.min;
    this.max = handels.max;
    this.minLabel= handels.minLabel;
    this.maxLabel= handels.maxLabel;
    this.sliderRange = handels.sliderRange;
    this.handelsToggle = handels.handelsToggle;
    this.planeToggle = handels.planeToggle;
    this.interval = handels.interval;
  }

  myData: MyDataObject = {
    'min': {},
    'max': {}
  }

  startHandlersPositions(positionValues: StartHandelsPositionsData ) {
    let min: string = ((this.sliderRange.offsetWidth - this.min.offsetWidth) / +positionValues.positions) * +positionValues['min'] + '';
    let max: string = ((this.sliderRange.offsetWidth - this.min.offsetWidth) / +positionValues.positions) * +positionValues['max'] + '';
    
    this.myData.min.min = min;
    this.myData.max.max = max;

    this.min.style.left = min + 'px';
    this.max.style.left = max + 'px';

    this.interval.style.left = +min + this.min.offsetWidth / 2 + 'px';
    this.interval.style.right = (this.sliderRange.offsetWidth - +max) - this.min.offsetWidth / 2 + 'px';
  }
  
  minHandelListener( event ) {
    let min = this.min;
    let max = this.max;
    let minLabel = this.minLabel;
    let sliderRange = this.sliderRange;
    let that = this;
    let shift: number;
    let doubleHandels = this.handelsToggle.checked;
    let vertical = this.planeToggle.checked;
    let interval = this.interval;

    if (vertical) {
      shift = event.clientY - min.getBoundingClientRect().top - min.offsetWidth;
    } else {
      shift = event.clientX - min.getBoundingClientRect().left;
    }
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    
    function onMouseMove( event ) {
      
      let newLeft: number;
      if (vertical) {
        newLeft = sliderRange.offsetWidth - (event.clientY - shift - sliderRange.getBoundingClientRect().top);
      } else {
        newLeft = event.clientX - shift - sliderRange.getBoundingClientRect().left;
      }
      
      if (newLeft < 0) {
        newLeft = 0;
      }
      
      let rightEdge = sliderRange.offsetWidth - min.offsetWidth;

      if (doubleHandels) { 
        if (newLeft >= +that.myData.max['max'] - max.offsetWidth) {
          newLeft = +that.myData.max['max'] - max.offsetWidth
        }
      } else {
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }
      }

      min.style.left = newLeft + 'px';
      interval.style.left = newLeft + min.offsetWidth / 2 + 'px';
      
      if (newLeft !== undefined || rightEdge !== undefined) {
        that.myData['min'] = {'min': `${newLeft}`, 'sliderWidth': `${sliderRange.offsetWidth - min.offsetWidth}`}
      }
      
      minLabel.style.left = ((min.offsetWidth - minLabel.offsetWidth) - 1) / 2 + 'px';
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  }

  maxHandelListener( event ) {
    let max = this.max;
    let min = this.min;
    let sliderRange = this.sliderRange;
    let shift: number;
    let maxLabel = this.maxLabel;
    let that = this;
    let doubleHandels = this.handelsToggle.checked;
    let vertical = this.planeToggle.checked;
    let interval = this.interval;

    if (vertical) {
      shift = event.clientY - max.getBoundingClientRect().top - max.offsetWidth;
    } else {
      shift = event.clientX - max.getBoundingClientRect().left;
    }
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    
    function onMouseMove( event ) {
      let newLeft: number;
      
      if (vertical) {
        newLeft = sliderRange.offsetWidth - (event.clientY - shift - sliderRange.getBoundingClientRect().top);
      } else {
        newLeft = event.clientX - shift - sliderRange.getBoundingClientRect().left;
      }
      
      if (newLeft < 0) {
        newLeft = 0;
      }
      
      let rightEdge = sliderRange.offsetWidth - max.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      if (newLeft <= +that.myData.min['min'] + min.offsetWidth) {
        newLeft = +that.myData.min['min'] + min.offsetWidth
      }
      
      max.style.left = newLeft + 'px';
      interval.style.right = (sliderRange.offsetWidth - newLeft) - max.offsetWidth / 2 + 'px';

      if (newLeft !== undefined || rightEdge !== undefined) {
        that.myData['max'] = {'max': `${newLeft}`, 'sliderWidth': `${sliderRange.offsetWidth - max.offsetWidth}`}
      }
      
      maxLabel.style.left = ((max.offsetWidth - maxLabel.offsetWidth) - 1) / 2 + 'px';
    }
    
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
        this.myData['max'] = {'max': `${this.sliderRange.offsetWidth - this.min.offsetWidth}`, 'sliderWidth':`${this.sliderRange.offsetWidth - this.min.offsetWidth}`}
        this.max.style.left = this.sliderRange.offsetWidth - this.min.offsetWidth + 'px';
        this.interval.style.right = (this.sliderRange.offsetWidth - this.sliderRange.offsetWidth) + this.min.offsetWidth / 2 + 'px';
      } else {
        this.myData['min'] = {'min': `${this.sliderRange.offsetWidth - this.min.offsetWidth}`, 'sliderWidth':`${this.sliderRange.offsetWidth - this.min.offsetWidth}`}
        this.min.style.left = this.sliderRange.offsetWidth - this.min.offsetWidth + 'px';
        this.interval.style.left = (this.sliderRange.offsetWidth - this.min.offsetWidth) + this.min.offsetWidth / 2 +'px';
      }
    }
  }
};
