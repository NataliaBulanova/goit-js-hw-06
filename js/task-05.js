const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
inputEl.addEventListener('input', e => {
  e.currentTarget.value === ''
    ? (outputEl.textContent = 'Anonymous')
    : (outputEl.textContent = e.currentTarget.value);
});
