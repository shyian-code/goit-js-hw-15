const controlsDiv = document.querySelector('#controls');
const boxesDiv = document.querySelector('#boxes');
const createButton = controlsDiv.querySelector('[data-create]');
const destroyButton = controlsDiv.querySelector('[data-destroy]');
const input = controlsDiv.querySelector('input');

createButton.addEventListener('click', () => {
  createBoxes(input.value);
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const initialSize = 30;
  let html = '';

  for (let i = 0; i < amount; i++) {
    const size = initialSize + i * 10;
    const color = getRandomHexColor();
    html += `<div style="width:${size}px; height:${size}px; background-color:${color}"></div>`;
  }

  boxesDiv.innerHTML = html;
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}