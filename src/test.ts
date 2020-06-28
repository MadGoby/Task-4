export function createDiv(context: HTMLElement) {
  let div: HTMLDivElement = document.createElement('div');
  div.classList.add('blackBlock')
  context.append(div)
}
