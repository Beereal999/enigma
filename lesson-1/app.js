//Занятие 1 слайд 10

//1. Получить первую и последнюю буквы строки

let string = "some test string";
const firstLetter = string[0];
const lastLetter = string[string.length - 1];

console.log(firstLetter, lastLetter);

//2. Сделать первую и последнюю буквы в верхнем регистре

stringUppC = string.replace(string[0], firstLetter.toUpperCase());
stringUppC = stringUppC.replace(
  string[string.length - 1],
  lastLetter.toUpperCase()
);

console.log(stringUppC);

//3. Найти положение слова ‘string’ в строке

const pos = string.indexOf("string");

console.log(pos);

//4. Найти положение второго пробела (“вручную” ничего не считать)
const posSpace1 = string.indexOf(" ");
const posSpace2 = string.indexOf(" ", posSpace1 + 1);

console.log(posSpace2);

//5. Получить строку с 5-го символа длиной 4 буквы
const strInd = 5;
const slStr = string.substr(strInd, 4);

console.log(slStr);

//6. Получить строку с 5-го по 9-й символы
const strInd1 = 5;
const strInd2 = 9;
const slStr2 = string.slice(strInd1, strInd2);

console.log(slStr2);

//7. Получить новую строку из исходной путем удаления последних 6-и символов(то есть исходная строка без последних 6и символов)

const str = string.slice(0, -6);

console.log(str);

//8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
const a = 20;
const b = 16;
string = a + "" + b;

console.log(string);

//Занятие 1 слайд 13

//1. Получить число pi из Math и округлить его до 2-х знаков после точки

p = parseFloat(Math.PI.toFixed(2));

console.log(p);

//2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

const maxNum = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
const minNum = Math.min(15, 11, 16, 12, 51, 12, 13, 51);

console.log(maxNum);
console.log(minNum);

/*3. Работа с Math.random:
a. Получить случайное число и округлить его до двух цифр после запятой
b. Получить случайное целое число от 0 до X. X - любое произвольное число. 
*/

//a
const numX = Math.round(Math.random() * 100);

console.log(numX);

//b
const x = 20;
const numY = Math.round(Math.random() * (x - 0 + 1));

console.log(numY);

//4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

const num = parseFloat((0.6 + 0.7).toFixed(1));

console.log(num);

//5. Получить число из строки ‘100$’

const price = "100$";
const priceNum = parseFloat(price);
console.log(priceNum);

//Занятие 2 слайд 12

/*Чему равно а, почему?

let a = 0 || 'string';     // ‘string’;  0 - false, ‘string’ - true
let a = 1 && 'string';     // 1 или 'string'; 1 - true, ‘string’ - true
let a = null || 25;        // 25; null - пустое значение
let a = null && 25;        // null; null - пустое значение, a не может хранить в себе пустое и другое значение
let a = null || 0 || 35;   // 35; null - пустое значение, 0 - false, 35 - true
let a = null && 0 && 35;   // null; null - пустое значение, a не может хранить в себе пустое и другие значения, 0 - false

Что отобразится в консоли. Почему?

12 + 14 + '12'      // 2612 - строка; конкатенация
3 + 2 - '1'         // 4   - число; при любых мат. вычеслениях кроме сложения строка пытается переобразоваться в число
'3' + 2 - 1         // 31  - число; при любых мат. вычеслениях кроме сложения строка пытается переобразоваться в число
true + 2            // 3 число; true - 1;
+'10' + 1           // 11 - число; строка преобразовывается в число
undefined + 2       // Nan;
null + 5            // 5; null при математических вычеслениях - 0
true + undefined    // Nan;
*/

//Занятие 2 слайд 16-17

//1.Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

function firstFunc(block) {
  if ((block = "hidden")) {
    block = "visible";
    console.log(block);
  } else {
    block = "hidden";
    console.log(block);
  }
}

firstFunc("hidden");

/*
Используя if, записать условие:
если переменная равна нулю, присвоить ей 1;
если меньше нуля - строку “less then zero”;
если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
*/

function hFunc(n) {
  if (n === 0) {
    n = 1;
    console.log(n);
  }
  if (n < 0) {
    n = "less then zero";
    console.log(n);
  }
  if (n > 1) {
    n *= 10;
    console.log(n);
  }
}

hFunc(0);

/*3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false. */

let car = { name: "Lexus", age: 10, create: 2008, needRepair: false };

function carRepair(carRep) {
  if (carRep.age > 5) {
    console.log(carRep.name + " " + carRep.create + " " + "Need Repair");
    carRep.needRepair = true;
    //console.log(carRep.needRepair);
  } else {
    carRep.needRepair = false;
    //console.log(carRep.needRepair);
  }
}

carRepair(car);

/*4.Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль. */

let item = { name: "Intel core i7", price: "100$", discount: "15%" };

function goods(itm) {
  itPrice = parseFloat(itm.price);
  itDiscount = parseFloat(itm.discount) / 100;

  if ("discount" in itm) {
    itm.priceWithDiscount = itPrice - itPrice * itDiscount + "$";
    console.log("Price with discount: " + itm.priceWithDiscount);
    console.log(item);
  } else {
    console.log("Price: " + itm.price);
  }
}
goods(item);

/*
5. Дан следующий код:

let product = {
    name: “Яблоко”,
    price: “10$”
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

Написать условие если (цена товара больше или равна минимальной цене) и (меньше или равна максимальной цене) то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено. */

let product = {
  name: "Яблоко",
  price: "10$"
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

function fruits(prod, pMin, pMax) {
  prodPrice = parseFloat(prod.price);
  if (prodPrice >= pMin && prodPrice <= pMax) {
    console.log(prod.name);
  } else {
    console.log("Товаров не найдено!");
  }
}

fruits(product, min, max);
