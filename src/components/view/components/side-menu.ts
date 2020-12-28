export class SideMenu {
  customSliderMenuContainer: HTMLDivElement;
  handelToggle: HTMLInputElement;
  handelLabelToggle: HTMLInputElement;
  planeToggle: HTMLInputElement;
  minInput: HTMLInputElement;
  maxInput: HTMLInputElement;
  minSliderValueOutput: HTMLOutputElement;
  maxSliderValueOutput: HTMLOutputElement;
  
  constructor() {
    let sliderValueP:HTMLParagraphElement = document.createElement('p');
    sliderValueP.classList.add('customSliderParagVal');
    sliderValueP.innerText = 'Текущее занчение: ';
    
    let minSliderValueOutput: HTMLOutputElement = document.createElement('output');
    minSliderValueOutput.classList.add('sliderValue');
    minSliderValueOutput.id = 'minSliderValue';
    let maxSliderValueOutput: HTMLOutputElement = document.createElement('output');
    maxSliderValueOutput.classList.add('sliderValue');
    maxSliderValueOutput.id = 'maxSliderValue';
    
    let sliderToggleP:HTMLParagraphElement = document.createElement('p');
    sliderToggleP.classList.add('customSliderParag');
    sliderToggleP.innerText = 'Включить второй ползунок: ';
    
    let sliderToggleLabel:HTMLLabelElement = document.createElement('label');
    sliderToggleLabel.classList.add('customSliderToggle');

    let maxSliderHandelToggle: HTMLInputElement = document.createElement('input');
    maxSliderHandelToggle.classList.add('maxSliderHandelToggle');
    maxSliderHandelToggle.id = 'maxSliderHandelToggle';
    maxSliderHandelToggle.setAttribute('type', 'checkbox')

    let customSliderBorder: HTMLSpanElement = document.createElement('span');
    customSliderBorder.classList.add('customToggleSliderBorder');

    let customSliderInputs: HTMLDivElement = document.createElement('div');
    customSliderInputs.classList.add('customSliderInputs');
    
    let customSliderInputsP: HTMLParagraphElement = document.createElement('p');
    customSliderInputsP.innerText = 'Изменить значение: ';
    customSliderInputsP.classList.add('customSliderParag');

    let customSliderInputsMinLabel: HTMLLabelElement = document.createElement('label');
    customSliderInputsMinLabel.classList.add('customSliderInputlabel');
    customSliderInputsMinLabel.setAttribute('for', 'customSliderMinInput');
    customSliderInputsMinLabel.innerText = 'Min: ';
    
    let customSliderInputsMaxLabel: HTMLLabelElement = document.createElement('label');
    customSliderInputsMaxLabel.classList.add('customSliderInputlabel');
    customSliderInputsMaxLabel.setAttribute('for', 'customSliderMaxInput');
    customSliderInputsMaxLabel.innerText = 'Max: ';

    let customSliderInputsMin: HTMLInputElement = document.createElement('input');
    customSliderInputsMin.classList.add('customSliderMinInput');
    customSliderInputsMin.id = 'customSliderMinInput';
    customSliderInputsMin.setAttribute('type', 'number');

    let customSliderInputsMax: HTMLInputElement = document.createElement('input');
    customSliderInputsMax.classList.add('customSliderMaxInput');
    customSliderInputsMax.id = 'customSliderMaxInput';
    customSliderInputsMax.setAttribute('type', 'number');

    let toggleForValuesContainer: HTMLDivElement = document.createElement('div');

    let toggleForValuesP: HTMLParagraphElement = document.createElement('p');
    toggleForValuesP.classList.add('customSliderParag');
    toggleForValuesP.innerText = 'Включить значения под ползунками: ';

    let toggleForValuesLabel: HTMLLabelElement = document.createElement('label');
    toggleForValuesLabel.classList.add('customSliderToggle');

    let toggleForValuesInput: HTMLInputElement = document.createElement('input');
    toggleForValuesInput.setAttribute('type', 'checkbox');
    toggleForValuesInput.classList.add('showValueToggle');
    toggleForValuesInput.id = 'showValueToggle';

    let toggleForValuesSpan: HTMLSpanElement = document.createElement('span');
    toggleForValuesSpan.classList.add('customToggleSliderBorder');
    
    let toggleForPlaneContainer: HTMLDivElement = document.createElement('div');

    let toggleForPlaneP: HTMLParagraphElement = document.createElement('p');
    toggleForPlaneP.classList.add('customSliderParag');
    toggleForPlaneP.innerText = 'Изменить плоскость: ';

    let toggleForPlaneLabel: HTMLLabelElement = document.createElement('label');
    toggleForPlaneLabel.classList.add('customSliderToggle');

    let toggleForPlaneInput: HTMLInputElement = document.createElement('input');
    toggleForPlaneInput.setAttribute('type', 'checkbox');
    toggleForPlaneInput.classList.add('planeToggle');
    toggleForPlaneInput.id = 'planeToggle';

    let toggleForPlaneSpan: HTMLSpanElement = document.createElement('span');
    toggleForPlaneSpan.classList.add('customToggleSliderBorder');


    let mainSliderContainer: HTMLDivElement = document.createElement('div');

    mainSliderContainer.classList.add('sliderMenuContainer');
    mainSliderContainer.append(sliderValueP);
    sliderValueP.append(minSliderValueOutput);
    sliderValueP.append(maxSliderValueOutput);
    mainSliderContainer.append(sliderToggleP);
    mainSliderContainer.append(sliderToggleLabel);
    sliderToggleLabel.append(maxSliderHandelToggle, customSliderBorder);

    customSliderInputs.append(customSliderInputsP, customSliderInputsMinLabel, customSliderInputsMin, customSliderInputsMaxLabel, customSliderInputsMax);
    mainSliderContainer.append(customSliderInputs);

    toggleForValuesContainer.append(toggleForValuesP, toggleForValuesLabel);
    toggleForValuesLabel.append(toggleForValuesInput, toggleForValuesSpan);
    mainSliderContainer.append(toggleForValuesContainer);

    toggleForPlaneContainer.append(toggleForPlaneP, toggleForPlaneLabel);
    toggleForPlaneLabel.append(toggleForPlaneInput, toggleForPlaneSpan);
    mainSliderContainer.append(toggleForPlaneContainer);

    this.customSliderMenuContainer = mainSliderContainer;
    this.handelToggle = maxSliderHandelToggle;
    this.handelLabelToggle = toggleForValuesInput;
    this.planeToggle = toggleForPlaneInput;
    this.minInput = customSliderInputsMin;
    this.maxInput = customSliderInputsMax;
    this.minSliderValueOutput = minSliderValueOutput;
    this.maxSliderValueOutput = maxSliderValueOutput;
  };
};