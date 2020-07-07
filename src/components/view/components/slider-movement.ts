interface Handels {
  [key: string]: HTMLElement;
}
interface MyDataObject {
  [key: string]: string;
}

export class SliderMovement {
  min: HTMLSpanElement;
  max: HTMLSpanElement;
  sliderRange: HTMLElement;

  constructor( handels: Handels) {
    this.min = handels.min;
    this.max = handels.max;
    this.sliderRange = handels.sliderRange;
  }

  myData: MyDataObject = {
    'min': ''
  }

  minHandelListener( event ) {
    let position: number;
    let sliderWidth: number;
    let min = this.min;
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
      
      min.style.left = newLeft + 'px';

      position = newLeft;
      sliderWidth = rightEdge;
    }
    
    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
      that.myData['min'] = `${position}:${sliderWidth}`
    }
  }

  maxHandelListener( event, target ) {
    let max = this.max;
    let sliderRange = this.sliderRange

    let shift: number;
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
      
      max.style.left = newLeft + 'px';
    }
    
    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
      this.target['min'] = '1'
    }
  }

  getDataForModel(): object {
    return {'position':  Number(this.min.style.left), 'sldierWidth': this.sliderRange.offsetWidth - this.max.offsetWidth}
  }
}
