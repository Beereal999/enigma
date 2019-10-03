// Занятие 2 слайд 8

// 1. Создать объект с полем product, равным ‘iphone’

let obj = { product: "iphone" };

// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’

let obj2 = { product: "iphone", price: "1000", currency: "dollar" };

// 3. Добавить поле details, которое будет содержать объект с полями model и color

let details = { model: "X", color: "white" };

let obj3 = { product: "iphone", price: "1000", currency: "dollar", details };

//Занятие 3 слайд 4

// 1.Записать в виде switch case следующее условие:
// if (a === ‘block’) {
// 	console.log(‘block’)
// } else if (a === ‘none’) {
// 	console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
// 	console.log(‘other’)
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

let a = "block";
switch (a) {
  case "block":
    console.log("block");
    break;
  case "none":
    console.log("none");
    break;
  case "inline":
    console.log("inline");
    break;
  case a:
    console.log("other");
}

// 2.Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.

//1)Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let block = "hidden";
block === "hidden" ? (block = "visible") : (block = "hidden");
console.log(block);

//2)Используя if, записать условие:
//  если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let n = 0;
n === 0 ? (n = 1) : n < 0 ? (n = "less then zero") : (n *= 10);
console.log(n);

//3)Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
let car = { name: "Lexus", age: 10, create: 2008, needRepair: false };

car.age > 5
  ? (console.log("Need Repair"), (car.needRepair = true))
  : (car.needRepair = false);
console.log(car);

//Занятие 3 слайд 10

// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

let str = "i am in the easycode";

let newStr = "";

newStr = newStr + str.substring(0, 1).toUpperCase();

for (i = 1; i < str.length; i++) {
  newStr += str[i - 1] == " " ? str[i].toUpperCase() : str[i];
}
console.log(newStr);

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
let strin1 = "tseb eht ma i";

let newStrin1 = "";
for (i = strin1.length - 1; i >= 0; i--) {
  newStrin1 += strin1[i];
}
console.log(newStrin1);

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

let num = 10;

for (i = num - 1; i > 0; i--) {
  num *= i;
}

console.log(num);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let normStr = "JavaScript is a pretty good language";

let editStr = "";
let editStr2 = "";
for (i = 0; i < normStr.length; i++) {
  editStr += normStr[i - 1] == " " ? normStr[i].toUpperCase() : normStr[i];
  editStr2 += editStr[i] == " " ? editStr[i].replace(" ", "") : editStr[i];
}

console.log(editStr2);

// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let value of arr) {
  value % 2 ? console.log(value) : value;
}

// 6. Дан объект:
// let list = {
//      name: ‘denis’,
//      work: ‘easycode’,
//      age: 29
// }

// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

let list = {
  name: "denis",
  work: "easycode",
  age: 29
};

for (let prop2 in list) {
  typeof list[prop2] == "string"
    ? (list[prop2] = list[prop2].toUpperCase())
    : list[prop2];
}
console.log(list);
