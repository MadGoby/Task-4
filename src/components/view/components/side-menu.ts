export class SideMenu {
  customSliderMenuContainer: HTMLDivElement;
  constructor() {
    let sliderValueP:HTMLParagraphElement = document.createElement('p');
    sliderValueP.innerText = 'Текущее занчение: ';
    
    let sliderValueOutput:HTMLOutputElement = document.createElement('output');
    sliderValueOutput.classList.add('sliderValue');
    
    let sliderToggleP:HTMLParagraphElement = document.createElement('p');
    sliderToggleP.innerText = 'Включить второй ползунок: ';
    
    let sliderToggleLabel:HTMLLabelElement = document.createElement('label');
    sliderToggleLabel.classList.add('sldierToggle');

    let mainSliderCOntainer: HTMLDivElement = document.createElement('div');

    mainSliderCOntainer.classList.add('sliderMenuContainer');
    mainSliderCOntainer.append(sliderValueP);
    sliderValueP.append(sliderValueOutput)
    mainSliderCOntainer.append(sliderToggleP)
    mainSliderCOntainer.append(sliderToggleLabel)

    this.customSliderMenuContainer = mainSliderCOntainer;
  }
  getElements(): HTMLDivElement {
    return this.customSliderMenuContainer;
  }
}