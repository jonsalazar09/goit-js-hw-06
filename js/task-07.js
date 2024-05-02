const sizeControle = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const sizeControleInputHandler = event => (text.style.fontSize = `${event.currentTarget.value}px`);

sizeControle.addEventListener('input', sizeControleInputHandler);