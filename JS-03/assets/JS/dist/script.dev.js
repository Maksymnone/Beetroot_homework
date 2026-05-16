"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Мінімум

1.1 Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
1.2 Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
1.3 Підрахуй суму всіх чисел в заданому користувачем діапазоні.
1.4 Запитай у користувача 2 числа і знайди найбільший спільний дільник.
1.5 Запитай у користувача число і виведи всі дільники цього числа.


Норма

2.1 Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
2.2 Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
  від 200 до 300 - знижка буде 3%; 
  від 300 до 500 - 5%;
  від 500 і вище - 7%.
2.3 Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 	При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран.Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
2.4 Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.


Максимум

3.1 Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
3.2 Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
3.3 Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

*/
// 1.1
function stageAge() {
  var age = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : prompt("Напиши свій вік");
  console.log("1 " + +age);
  console.log("2 " + age);

  if (age === null) {
    alert("Чекаю наступного разу");
  } else if (+age < 0 || +age > 110 || isNaN(+age)) {
    alert("Введи корректний вік");
    stageAge();
  } else if (+age >= 0 && +age <= 11) {
    alert("Вітаю ти ще дитина");
  } else if (+age > 11 && age <= 17) {
    alert("Ти підліток");
  } else if (+age > 17 && +age <= 59) {
    alert("Ти дорослий");
  } else if (+age > 60) {
    alert("Ти пенсіонер");
  }
} // 1.2


function symbolArray() {
  var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : prompt("Введи число від 0 до 9");
  symbolsList = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];

  if (+index > 9 || +index < 0 || isNaN(+index)) {
    alert("Невірне число введи число від 0 до 9");
  } else {
    alert(symbolsList[+index]);
  }
} // 1.3


function sumNum() {
  var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : prompt("Введи число від якого треба рахувати");
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prompt("А тепер число до якого треба рахувати");
  var sum = 0;

  for (var i = +from; i <= to; i++) {
    console.log(_typeof(i));
    sum += i;
    console.log(sum);
  }

  return alert(sum);
} // 1.4


function findNod() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : parseInt(prompt("Введи число №1"));
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : parseInt(prompt("Введи число №2"));
  var numBiger = a > b ? a : b;
  var numLower = a < b ? a : b;
  var com = numBiger % numLower;

  if (com === 0) {
    return alert("\u041D\u041E\u0414 - ".concat(numLower));
  } else {
    findNod(numLower, com);
  }
} // 1.5 Запитай у користувача число і виведи всі дільники цього числа.


function allDivider() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : prompt("Введи число для вирохування всіх ділників");
  var divArr = [];

  for (var i = 1; i <= a; i++) {
    if (a % i === 0) {
      divArr.push(i);
    }
  }

  return alert("\u0412\u0441\u0456 \u0434\u0456\u043B\u043D\u0438\u043A\u0438 \u0434\u043B\u044F \u0446\u044C\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 \u0446\u0435 ".concat(divArr));
} // 2.1 Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


function polindromTester(a) {
  a = prompt("Напиши число з 5 цифр");

  if (a.length < 5 || a.length > 5) {
    return alert("Число повинно складатись тільки з 5 цифр");
  } else {
    return a === a.split("").reverse().join("");
  }
}
/* 2.2 Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
  від 200 до 300 - знижка буде 3%; 
  від 300 до 500 - 5%;
  від 500 і вище - 7%.*/


function priceDiscount(a) {
  a = +prompt("Введи суму покупки");

  if (a >= 200 && a < 300) {
    return alert("\u0422\u0432\u043E\u044F \u0441\u0443\u043C\u0430 \u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0437\u043D\u0438\u0436\u043A\u0438 3% \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C - ".concat(a * 0.97));
  } else if (a >= 300 && a < 500) {
    return alert("\u0422\u0432\u043E\u044F \u0441\u0443\u043C\u0430 \u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0437\u043D\u0438\u0436\u043A\u0438 5% \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C - ".concat(a * 0.95));
  } else if (a >= 500) {
    return alert("\u0422\u0432\u043E\u044F \u0441\u0443\u043C\u0430 \u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0437\u043D\u0438\u0436\u043A\u0438 7% \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C - ".concat(a * 0.93));
  } else {
    return alert("Замала сума для знижки");
  }
}
/*2.3 Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 	При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран.Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.*/


function tenNumber() {
  var arrNumber = [];
  var negativeNum = 0,
      positiveNum = 0,
      zeroNum = 0,
      even = 0,
      odd = 0;

  for (var i = 0; i < 10; i++) {
    var a = prompt("Введи число № " + (i + 1));
    arrNumber.push(a);
    +a > 0 ? positiveNum++ : +a < 0 ? negativeNum++ : zeroNum++;
    +a % 2 === 0 ? even++ : odd++;
  }

  var body = document.body;
  body.innerHTML = "<table>\n\t<thead>\n\t<tr>\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0435\u043C \u0432\u0432\u0435\u0434\u0435\u043D\u043E:\n\t</tr>\n\t<tr>".concat(arrNumber.join(" | "), "</tr></thead>\n\t<tbody>\n\t<tr>\n\t\t<td>\u0412\u0456\u0434'\u0454\u043C\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B</td>\n\t\t<td> ").concat(negativeNum, " </td>\n\t</tr>\n\t<tr>\n\t\t<td>\u0414\u043E\u0434\u0430\u0442\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B</td>\n\t\t<td> ").concat(positiveNum, " </td>\n\t</tr>\n\t<tr>\n\t\t<td>\u041D\u0443\u043B\u0456\u0432</td>\n\t\t<td> ").concat(zeroNum, " </td>\n\t</tr>\n\t<tr>\n\t\t<td>\u041F\u0430\u0440\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B</td>\n\t\t<td> ").concat(even, " </td>\n\t</tr>\n\t<tr>\n\t\t<td>\u041D\u0435\u043F\u0430\u0440\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B</td>\n\t\t<td> ").concat(odd, " </td>\n\t</tr>\n\t</tbody>\n\t</table>");
}
/*2.4 Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.*/


function newDay() {
  var i = 0;
  var arrDay = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];

  while (confirm("".concat(arrDay[i], ". \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?"))) {
    i === arrDay.length - 1 ? i = 0 : i++;
  }
}