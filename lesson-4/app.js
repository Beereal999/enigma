//занятие 5 слайд 4

/* 1. Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки:

firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
“New value: Jhon is 45, Aaron is 20,”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки */

function editString(arr, newString) {
  let newStr = "New value: ";

  for (let i = 0; i < arr.length; i++) {
    newStr += newString(arr[i]);
  }

  return console.log(newStr);
}

function toUpperCase(element) {
  return element[0].toUpperCase() + element.slice(1);
}

function multiplyTen(element) {
  return (element *= 10) + ", ";
}

function stringOutput(element) {
  return element.name + " is " + element.age + ", ";
}

function expandString(element) {
  let newItem = "";

  for (let i = element.length - 1; i >= 0; i--) {
    newItem += element[i];
  }

  return newItem + ", ";
}

editString(["my", "name", "is", "Trinity"], toUpperCase);
editString([10, 20, 30], multiplyTen);
editString(
  [{ age: 45, name: "Jhon" }, { age: 20, name: "Aaron" }],
  stringOutput
);
editString(["abc", "123"], expandString);

//занятие 5 слайд 5

/* 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив. 
 
Что такое метод every можно прочитать здесь и ниже в презентации тоже о них идет речь. */

function every(arr, callback) {
  if (!Array.isArray(arr)) {
    return console.log("Ошибка!");
  }

  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
}

function moreThanFive(item, index, arr) {
  if (item <= 5) {
    return true;
  } else {
    console.log(`Число ${item} с индексом ${index} в масиве ${arr} больше 5`);
    return false;
  }
}

every([1, 2, 3, 6], moreThanFive);

// ...................

//занятие 5 слайд 7

//  1.Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.

let arr = [12, 4, 50, 1, 0, 18, 40];

function searchZero(num) {
  return num === 0;
}

console.log(!arr.some(searchZero));

// 2.Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

let arrWords = ["yes", "hello", "no", "easycode", "what"];

function searchWord(word) {
  if (word.length > 3) {
    return word;
  }
}

console.log(arrWords.some(searchWord));

// 3.Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

// Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения
// строки

let arrayObjcts = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },
  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },
  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 }
];

arrayObjcts.sort(function(a, b) {
  if (a.index > b.index) {
    return 1;
  }
  if (a.index < b.index) {
    return -1;
  }

  return 0;
});

let nString = arrayObjcts.reduce(function(str, word, index) {
  return index === 0 ? str + word.char : str + word.char;
}, "");
console.log(nString);

// занятие 5 слайд 10

// 1.Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

let arrArrays = [[14, 45], [1], ["a", "c", "d"]];

arrArrays.sort(function(a, b) {
  if (a.length > b.length) {
    return 1;
  }

  if (a.length < b.length) {
    return -1;
  }
  return 0;
});

console.log(arrArrays);

// 2.Есть массив объектов:
// [
//     {cpu: 'intel', info: {cores:2, сache: 3}},
//     {cpu: 'intel', info: {cores:4, сache: 4}},
//     {cpu: 'amd', info: {cores:1, сache: 1}},
//     {cpu: 'intel', info: {cores:3, сache: 2}},
//     {cpu: 'amd', info: {cores:4, сache: 2}}
// ]

// Отсортировать их по возрастающему количеству ядер (cores).

let arrObj = [
  { cpu: "intel", info: { cores: 2, сache: 3 } },
  { cpu: "intel", info: { cores: 4, сache: 4 } },
  { cpu: "amd", info: { cores: 1, сache: 1 } },
  { cpu: "intel", info: { cores: 3, сache: 2 } },
  { cpu: "amd", info: { cores: 4, сache: 2 } }
];

arrObj.sort(function(a, b) {
  if (a.info.cores > b.info.cores) {
    return 1;
  }

  if (a.info.cores < b.info.cores) {
    return -1;
  }
  return 0;
});

console.log(arrObj);

//занятие 5 слайд 11

/* 3.Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}] */

let products = [
  { title: "prod1", price: 5.2 },
  { title: "prod2", price: 0.18 },
  { title: "prod3", price: 15 },
  { title: "prod4", price: 25 },
  { title: "prod5", price: 18.9 },
  { title: "prod6", price: 8 },
  { title: "prod7", price: 19 },
  { title: "prod8", price: 63 }
];

function filterCollection(products, minPrice, maxprice) {
  let targetProducts = products.filter(function(f) {
    return f.price >= minPrice && f.price <= maxprice;
  });

  targetProducts.sort(function(a, b) {
    if (a.price > b.price) {
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    }

    return 0;
  });
  return targetProducts;
}

console.log(filterCollection(products, 15, 30));
