function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
let spanText = document.querySelector('.color');
const body = document.querySelector('body');
changeColorBtn.addEventListener('click', () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanText.textContent = color;
});
