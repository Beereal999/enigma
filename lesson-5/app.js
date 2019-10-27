//Занятие 9 слайд 7

// 1.Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

const rectangle = { width: "", height: "", getSquare: "" };

rectangle.width = 5;
rectangle.height = 6;
rectangle.getSquare = rectangle.width * rectangle.height;
console.log(rectangle);

// 2.Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

const price = {
  price: 10,
  discount: "15%",
  getPrice: function() {
    return this.price;
  },
  getPriceWithDiscount: function() {
    return (
      this.getPrice() - this.getPrice() * (parseFloat(this.discount) / 100)
    );
  }
};

console.log(price.getPriceWithDiscount());

//Занятие 9 слайд 8

// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

const object = {
  height: 10,
  newHeight: function() {
    return this.height + 1;
  }
};

console.log(object.newHeight());

//Занятие 9 слайд 9

// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3

const numerator = {
  value: 1,
  double: function() {
    this.value *= 2;
    return this;
  },
  plusOne: function() {
    this.value++;
    return this;
  },
  minusOne: function() {
    this.value--;
    return this;
  }
};

numerator
  .double()
  .plusOne()
  .plusOne()
  .minusOne();
console.log(numerator.value);

/* Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств. 
(пример вызова есть в конце теории) */

function Calculator() {
  this.read = function() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
