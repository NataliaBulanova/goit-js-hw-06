const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];
const listEl = document.getElementById('ingredients');
const items = ingredients.map(el => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = el;
  return itemEl;
});
listEl.append(...items);
