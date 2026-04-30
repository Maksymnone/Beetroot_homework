"use strict";

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

function hello() {
  var name = prompt("Hello write your name please");
}

console.log("object");
document.getElementById("hello_btn").onclick = "hello()";