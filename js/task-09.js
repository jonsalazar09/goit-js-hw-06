function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const body = document.querySelector('body');
  const btnColorChange = document.querySelector('.change-color');
  const colorValue = document.querySelector('.color');
  
  btnColorChange.addEventListener('click', handleBtnColorChangeClick);
  
  function handleBtnColorChangeClick() {
    const color = getRandomHexColor();
    colorValue.textContent = color;
    body.style.backgroundColor = color;
  }