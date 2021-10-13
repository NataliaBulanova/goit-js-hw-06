const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value.trim();
  const password = formElements.password.value.trim();
  let formData = {};
  if (email !== '' && password !== '') {
    formData = { email, password };
  } else {
    alert('Необходимо заполнить все поля');
  }
  console.log(formData);
  form.reset();
}
