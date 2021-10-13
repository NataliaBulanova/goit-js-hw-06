const itemsArr = document.querySelectorAll('.item');
// console.log(itemsArr)
console.log('Number of categories:', itemsArr.length);
itemsArr.forEach(item => {
  console.log('Category:', item.querySelector('h2').textContent);
  console.log('Elements:', item.querySelectorAll('li').length);
});
