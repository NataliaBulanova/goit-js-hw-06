const fontSizeController = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
// console.log(typeof fontSizeController.value);
fontSizeController.addEventListener('input', e => {
  textEl.style.fontSize = `${e.currentTarget.value}px`;
});
