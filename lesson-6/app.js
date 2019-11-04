// Занятие 6 слайд 6

/* Зная структуру html, с помощью изученных
методов получить (в консоль):
1. head
2. body
3. все дочерние элементы body и вывести их в
консоль.
4. первый div и все его дочерние узлы
а) вывести все дочерние узлы в консоль
б) вывести в консоль все дочерние узлы,
кроме первого и последнего
Для навигации по DOM использовать методы,
которые возвращают только элементы
 */

// 1. head
const head = document.querySelector("head");
console.log(head);

// 2. body
const body = document.querySelector("body");
console.log(body);

// 3. все дочерние элементы body и вывести их в
// консоль.
console.log("body child", body.children);

// 4. первый div и все его дочерние узлы
const div = document.querySelector("div");
console.log(div, div.children);

// а) вывести все дочерние узлы в консоль
console.log("div child", div.children);

// б) вывести в консоль все дочерние узлы, кроме первого и последнего
//const childDiv = document.div.children;
if (div.children) {
  const childDiv = div.children;

  for (var i = 1; i < childDiv.length - 1; ++i) {
    console.log(childDiv[i]);
  }
}

// Занятие 6 слайд 15
// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark

// isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark
// Функция принимает только DOM объекты.

function isParent(parent, child) {
  return parent === child.parentNode;
}

console.log(
  isParent(document.body.children[0], document.querySelector("mark")),
  isParent(document.querySelector("ul"), document.querySelector("mark")),
  isParent(document.querySelector("ul"), document.querySelector("li"))
);

// 2. Получить список всех ссылок, которые не находятся внутри списка ul

let links = document.links;

// let certainLinks = Array.from(links).filter(links => !links.closest('ul'));

let certainLinks = Array.from(links).filter(function(links) {
  return !links.closest("ul");
});
console.log(certainLinks);

// 3. Найти элемент, который находится перед и после списка ul

const ul = document.querySelector("ul");
console.log("ul nextSibling", ul.nextElementSibling);
console.log("ul nextSibling", ul.previousElementSibling);
