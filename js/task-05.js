const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const inputNameInputHandler = event => {
  outputName.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous';
};
inputName.addEventListener('input', inputNameInputHandler);