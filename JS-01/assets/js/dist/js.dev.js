"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var firstName; //(camelCase)

var last_Name; //snake Case

var UserName; // Pascal Case

var name; // Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі. Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);
// Вкажи всі можливі способи коментування коду;
// Які стилі написання імен змінних ти знаєш?

/*
let 1Name
let my name
let first-name
let !lastName
let function-Name
*/
// Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;

function hello() {
  var name = prompt("Привіт, напиши своє ім'я будь ласка");

  if (name === null || name.length < 2) {
    return alert("Я бачу ти не написав ім'я(( Що, не хочеш знайомитись?");
  } else if (!isNaN(parseInt(name))) {
    return alert("Не можу повірити що твоє ім'я складається з цифр. Може напишеш справжнє ім'я?");
  } else {
    document.getElementsByClassName("age-section")[0].classList.remove("section-hidden");
    return alert("\u041F\u0440\u0438\u0432\u0456\u0442 ".concat(name));
  }
} // Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;


function age() {
  var CURRENT_YEAR = new Date().getFullYear();
  var userYear = parseInt(prompt("Напиши свій рік народження, а я порахую скільки тобі років, а я напишу скільки тобі років"));
  var age;
  console.log(_typeof(userYear));

  if (userYear === null || userYear.length < 4) {
    return alert("Ти повинен написати повний рік народження наприклад '1992'");
  } else if (isNaN(parseInt(userYear))) {
    return alert("В рік народження не можна вставляти літери, я все бачу))");
  } else if (userYear < 1920) {
    return alert("Щось ти занадто старий))");
  } else if (userYear > CURRENT_YEAR) {
    alert("Не вірю що ти з майбутнього");
  } else {
    age = CURRENT_YEAR - userYear;
    document.querySelector("#inner-age").innerText = age;
    document.getElementsByClassName("perimetr-section")[0].classList.remove("section-hidden");
    return alert("\u0422\u043E\u0431\u0456 ".concat(age, " \u0440\u043E\u043A\u0456\u0432"));
  }
} //Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата


function perimetr() {
  var oneSide = prompt("Напиши довжину однієї сторони квадрату");

  if (isNaN(parseInt(oneSide))) {
    return alert("Ну так це ж не число, а ну давай мені число");
  } else if (parseInt(oneSide) <= 0) {
    return alert("Такого квадрату не буває");
  } else {
    document.getElementsByClassName("circle-section")[0].classList.remove("section-hidden");
    return alert("Периметр такого квадрату дорівнює - " + 4 * oneSide);
  }
} // Запитай у користувача радіус кола і виведи площу такої окружності.


function circleSquare() {
  var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : prompt("Напиши радіус");
  var Pi = 3.14;

  if (isNaN(parseInt(radius))) {
    return alert("Ну так це ж не число, а ну давай мені число");
  } else if (parseInt(radius) <= 0) {
    return alert("Такого круга не буває");
  } else {
    document.getElementsByClassName("speed-section")[0].classList.remove("section-hidden");
    return alert("Площа такого круга дорівнює - " + Pi * Math.pow(parseInt(radius), 2));
  }
} // Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.


function speed() {
  var km = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : prompt("Напиши мені відстань в кілометрах між містами");
  var hour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prompt("А тепер напиши за скільки годин ти хочеш туди доїхати");

  if (isNaN(+km) || isNaN(+hour)) {
    return alert("І відстань і час повинні бути числами, введи числа");
  } else {
    document.getElementsByClassName("currency-section")[0].classList.remove("section-hidden");
    return alert("Твоя швидкість має бути - " + +km / +hour + "км/год");
  }
} // Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.


function exchange() {
  var currencyValue = 0.85;
  var dollars = document.getElementById("dollars").value;
  var euro = document.getElementById("euro");
  euro.value = +dollars * currencyValue;
}