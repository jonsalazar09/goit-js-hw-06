const list = document.querySelector('#categories');
const listChildrenCount = list.children.length;

console.log(`Number of categories: ${listChildrenCount}`);

const listItems = document.querySelectorAll('.item');

listItems.forEach(listItem => {
  console.log(`Category: ${listItem.firstElementChild.textContent}`);
  console.log(`Elements: ${listItem.lastElementChild.childElementCount}`);
});