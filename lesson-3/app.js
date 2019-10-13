// занятие 4 слайд 20

// 1.Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)

// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply() {
  let result = 1;

  if (arguments.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arguments.length; i++) {
      result *= arguments[i];
    }
    return result;
  }
}

console.log(multiply(1, 2, 3));

// 2.Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

console.log(reverseString("tset"));

// 3.Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:

// getCodeStringFromText(‘hello’) // “104 101 108 108 111”

// подсказка: для получения кода используйте специальный метод

function getCodeStringFromText(str) {
  let newStr = "";
  newArr = str.split("");

  for (i = 0; i < newArr.length; i++) {
    const currentWord = newArr[i];
    newArr[i] = currentWord.charCodeAt(0);
  }
  newStr = newArr.join(" ");
  return newStr;
}
console.log(getCodeStringFromText("hello"));

// 4.Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

function gameOfChance(numb) {
  if (numb < 1 || numb > 10) {
    return "Таких чисел у нас нет(";
  }
  const x = 9;
  const numRandom = Math.round(Math.random() * x + 1);

  return numb === numRandom
    ? "Вы выиграли!"
    : "Вы не угадали ваше число " + numb + ", а выпало число " + numRandom;
}
console.log(gameOfChance(6));

// 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArray(n) {
  let newArrey = [];
  for (let i = 1; i <= n; i++) {
    newArrey.push(i);
  }
  return newArrey;
}

console.log(getArray(10));

// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

function doubleArray(arr) {
  doubleArray2 = [];
  doubleArray2.push(...arr, ...arr);

  return doubleArray2;
}
console.log(doubleArray([1, 2, 3]));

// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection() {
  newArr = [];

  for (const args of arguments) {
    newArr.push(args.slice(1));
  }
  return newArr;
}

console.log(changeCollection([1, 2, 3], ["a", "b", "c"]));

// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

function funcGetUsers(users, key, value) {
  if (!Array.isArray(users)) {
    return console.log("Не масив!");
  }

  let usArray = [];

  for (const user of users) {
    if (typeof user !== "object") return console.log("не обьект!");

    if (user[key] === value) {
      usArray.push(user);
    }
  }

  return usArray;
}

console.log(
  funcGetUsers(
    [
      { name: "Denis", age: "29", gender: "male" },
      { name: "Ivan", age: "20", gender: "male" }
    ],
    "gender",
    "male"
  )
);

// 1. Исходный массив [-2, 3, 4, -5, -6, 2, 4, -56]. Найдите количество отрицательных и положительных элементов

//let arr = [-2, 3, 4, -5, -6, 2, 4, -56];

function array(arr) {
  let amountNeg = 0;
  let amountPos = 0;
  for (const elem of arr) {
    if (elem < 0) {
      amountNeg++;
    }
    if (elem > 0) {
      amountPos++;
    }
  }

  return `Положительных чисел: ${amountPos}, отрицательных: ${amountNeg}`;
}

console.log(array([-2, 3, 4, -5, -6, 2, 4, -56]));

// 2. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,

// каждый элемент которого будет хранить информацию о числе и его четности:

// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

let arr = [1, 2, 3, 5, 8, 9, 10];

let newAr = arr.map(element => {
  let check;
  if (element % 2 == 0) {
    check = false;
  } else {
    check = true;
  }
  let newElem = { digit: element, odd: check };

  return newElem;
});
console.log(newAr);
