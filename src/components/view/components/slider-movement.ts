interface Handels {
  [key: string]: HTMLDivElement | HTMLLabelElement ;
}
interface MyDataObject {
  [key: string]: {
    [key: string]: string
  };
}

export class SliderMovement {
  min: HTMLSpanElement;
  max: HTMLSpanElement;
  minLabel: HTMLElement;
  maxLabel: HTMLElement;
  sliderRange: HTMLElement;

  constructor( handels: Handels) {
    this.min = handels.min;
    this.max = handels.max;
    this.minLabel= handels.minLabel;
    this.maxLabel= handels.maxLabel;
    this.sliderRange = handels.sliderRange;
  }

  myData: MyDataObject = {
    'min': {},
    'max': {}
  }

  startHandlersPositions(positionValues: object | undefined) {
    if (typeof positionValues === 'undefined') {
      this.myData.min.min = '0';
      this.myData.max.max = this.sliderRange.offsetWidth - this.max.offsetWidth + '';
    }
  }
  
  minHandelListener( event ) {
    let min = this.min;
    let max = this.max;
    let minLabel = this.minLabel;
    let sliderRange = this.sliderRange
    let that = this
    let shift: number;
    shift = event.clientX - min.getBoundingClientRect().left;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    
    function onMouseMove( event ) {
      
      let newLeft: number;
      
      newLeft = event.clientX - shift - sliderRange.getBoundingClientRect().left;
      
      if (newLeft < 0) {
        newLeft = 0;
      }
      
      let rightEdge = sliderRange.offsetWidth - min.offsetWidth;
      
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }
      
      if (newLeft >= +that.myData.max['max'] - max.offsetWidth) {
        newLeft = +that.myData.max['max'] - max.offsetWidth
      }

      min.style.left = newLeft + 'px';
      
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

  maxHandelListener( event, target ) {
    let max = this.max;
    let min = this.min;
    let sliderRange = this.sliderRange;
    let shift: number;
    let maxLabel = this.maxLabel;
    let that = this
    shift = event.clientX - max.getBoundingClientRect().left;
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    
    function onMouseMove( event ) {
      let newLeft: number;
      
      newLeft = event.clientX - shift - sliderRange.getBoundingClientRect().left;
      
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
}
