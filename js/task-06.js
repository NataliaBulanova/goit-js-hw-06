const input = document.querySelector('#validation-input');
// console.log(typeof input.dataset.length);
const validLength = Number(input.dataset.length);
input.addEventListener('blur', inputValueValidation);
function inputValueValidation(e) {
  console.log(e.currentTarget.value.length);
  e.currentTarget.value.length === validLength
    ? input.classList.replace('invalid', 'valid') ||
      input.classList.add('valid')
    : input.classList.replace('valid', 'invalid') ||
      input.classList.add('invalid');
}
