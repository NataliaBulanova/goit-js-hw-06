function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  form: document.querySelector('#controls'),
  input: document.querySelector('input[type="number"]'),
  container: document.querySelector('#boxes'),
  btnCreator: document.querySelector('[data-create]'),
  btnDestructor: document.querySelector('[data-destroy]'),
};
let amount = 0;
refs.form.addEventListener('input', () => {
  amount = refs.input.value;
  refs.btnCreator.addEventListener('click', createBoxes(amount));
  function createBoxes(nTimes) {
    const boxMarkup = [];
    for (let i = 0; i < nTimes; i++) {
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      boxMarkup.push(box);
    }
    refs.container.append(...boxMarkup);
  }
});
refs.btnDestructor.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  refs.container.innerHTML = '';
}
