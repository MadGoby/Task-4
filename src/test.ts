export function createDiv() {
  let div: HTMLDivElement = document.createElement('div');
  div.classList.add('blackBlock')
  document.body.append(div)
}
