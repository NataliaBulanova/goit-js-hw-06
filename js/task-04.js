const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
decrBtn.addEventListener('click', () => {
  valueEl.textContent -= 1;
});
incrBtn.addEventListener('click', () => {
  valueEl.textContent = Number(valueEl.textContent) + 1;
  // valueEl.textContent++;
});
