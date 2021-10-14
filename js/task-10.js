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
refs.btnCreator.addEventListener('click', createBoxes);
function createBoxes() {
  amount = parseInt(refs.input.value);
  refs.input.value = '';
  console.log(amount);
  const boxMarkup = [];
  refs.container.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxMarkup.push(box);
  }
  refs.container.append(...boxMarkup);
}
refs.btnDestructor.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  refs.container.innerHTML = '';
  refs.input.value = null;
}
