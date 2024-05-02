const form = document.querySelector('.login-form');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  } else {
    const formObject = {
      Email: `${email.value}`,
      Password: `${password.value}`,
    };

    console.log(formObject);
    event.currentTarget.reset();
  }
}