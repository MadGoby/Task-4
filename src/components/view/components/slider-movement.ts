interface Handels {
  [key: string]: HTMLElement;
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

  minHandelListener( event ) {
    
    let min = this.min;
    let sliderRange = this.sliderRange

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
    }
    
    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  }

  maxHandelListener( event ) {
    
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
    }
  }
}
