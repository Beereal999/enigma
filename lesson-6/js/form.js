/* Ваша задача - написать валидацию. То есть, пользователь заполняет все поля, нажимает на кнопку "Отправить", а вы проверяете все ли поля заполнены корректно.

Результат вывести в консоль (все хорошо/всё плохо).

Список полей:

Имя (больше 2-х символов и меньше - 40)

Логин (должен быть заполнен/не пустой)

Пароль (больше 8-ми символов, должна быть цифра, буква, большая буква)

Галочка - "Прочитал условия" (должна быть включена)

Если хоть одно из условий не совпадает, то форма не валидна. */

const btn = document.querySelector("button");

const handleForm = event => {
  event.preventDefault();
  const firstName = document.querySelector("input#inputFirstName");
  const login = document.querySelector("input#inputLogin");

  const pass = document.querySelector("input#inputPassword");
  const checkbox = document.querySelector("input#checkBox");

  if (!firstName.value || !login.value || !pass.value) {
    alert("Все плохо! Поля не заполнены!");
    return;
  }
  if (firstName.value.length < 2 || firstName.value.length > 40) {
    alert("Все плохо! Не правильное имя!");
    return;
  }
  if (pass.value.length < 8) {
    alert("Все плохо! Пароль должен быть не меньше 8-ми символов!");
    return;
  }

  for (i = 0; i < pass.value.length; i++) {
    //let symb = pass.value[i];
    let bool = pass.value[i] === pass.value[i].toUpperCase();
    if (bool === false) {
      alert("Все плохо!");
    }

    /* function isUpperCase(symb) {
      
      return symb === symb.toUpperCase();
  }
      console.log(isUpperCase(pass.value[i])); */
  }

  if (!document.getElementById("checkBox").checked) {
    alert("Все плохо! Вы должны прочитать наши условия!");
    return;
  }
  alert("Все хорошо!");

  console.log(firstName.value, login.value, pass.value, checkbox.value);
  firstName.value = "";
  login.value = "";
  pass.value = "";

  checkbox.checked = false;
};

btn.addEventListener("click", handleForm);
