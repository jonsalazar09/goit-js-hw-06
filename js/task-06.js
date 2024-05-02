const textInput = document.querySelector('#validation-input');

const textInputBlurHandler = event => {
  if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
    if (textInput.classList.contains('invalid')) {
      textInput.classList.replace('invalid', 'valid');
    } else {
      textInput.classList.add('valid');
    }
  } else {
    if (textInput.classList.contains('valid')) {
      textInput.classList.replace('valid', 'invalid');
    } else {
      textInput.classList.add('invalid');
    }
  }
};
textInput.addEventListener('blur', textInputBlurHandler);

//! if (textInput.value.length === Number(textInput.dataset.length))