export class SelectedRange {

  readonly interval: HTMLDivElement;

  constructor() {
    let interval: HTMLDivElement = document.createElement('div');
    interval.classList.add('mainInterval');
    this.interval = interval;
  }

  getElements(): HTMLDivElement {
    return this.interval;
  }
}