"use strict";

// #1 Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
var rez = 0.1 + 0.2;
console.log(rez.toFixed(1)); // #2 Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

var num2_1 = "1";
var num2_2 = 2;
console.log(+1 + 2); // #3 Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

function exec_3() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : prompt("Скільки гігабайт твоя флешка?");
  var file_size = 820 / 1000;
  var realSize = (size * 1000 / 1024).toFixed(2);
  return alert("\u041D\u0430 \u0442\u0432\u043E\u044E \u0444\u043B\u0435\u0448\u043A\u0443 \u0432\u043B\u0456\u0437\u0435 ".concat(Math.trunc(realSize / file_size), " \u0444\u0430\u0439\u043B\u0456\u0432"));
} // #4 Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.


function countChoco() {
  var cash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : prompt("Скільки грошей в тебе в гаманці?");
  var choco = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prompt("А тепер введи скільки коштує одна шоколадка");

  if (isNaN(cash) || isNaN(choco)) {
    return alert("Ти повинен ввести все тільки числами");
  } else {
    return alert("\u041D\u0430 \u0441\u0432\u043E\u0457 \u0433\u0440\u043E\u0448\u0456 \u0442\u0438 \u043C\u043E\u0436\u0435\u0448 \u043A\u0443\u043F\u0438\u0442\u0438 ".concat(Math.trunc(cash / choco), " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A"));
  }
} // №5 Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).


function reversNumber() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : prompt("Введи трьохзначне число");

  if (num.length < 3 || num.length > 3) {
    alert("Введи число з 3-х цифр");
  } else {
    var thirdDigit = Math.trunc(num / 10 % 1 * 10) + "";
    var firstDigit = Math.trunc(num / 100) + "";
    var secondDigit = Math.trunc(Math.trunc(num / 10) / 10 % 1 * 10) + "";
    return alert("\u0422\u0432\u043E\u0454 \u0447\u0438\u0441\u043B\u043E \u043D\u0430\u0432\u043F\u0430\u043A\u0438 - ".concat(thirdDigit + secondDigit + firstDigit));
  }
} // №6 Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.


function percentPer2Mounth() {
  var deposit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : prompt("Скільки коштів ти поклав у банк?");
  var yearPercent = 5;
  var sum = +deposit * (yearPercent / 100 / 12) * 2;
  return alert("За два місяці з цієї суми ти отримуєш - " + sum);
}