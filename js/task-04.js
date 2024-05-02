let counterValue = 0;
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

const onBtnDecrementClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const onBtnIncrementClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

btnDecrement.addEventListener('click', onBtnDecrementClick);
btnIncrement.addEventListener('click', onBtnIncrementClick);