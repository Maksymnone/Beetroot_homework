let firstName; //(camelCase)
let last_Name; //snake Case
let UserName; // Pascal Case
let name;
// Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі. Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);
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
	let name = prompt("Привіт, напиши своє ім'я будь ласка"); 
	if (name === null || name.length < 2) {
		return alert("Я бачу ти не написав ім'я(( Що, не хочеш знайомитись?");
	} else if (!isNaN(parseInt(name))) {
		return alert("Не можу повірити що твоє ім'я складається з цифр. Може напишеш справжнє ім'я?");
	} else {
		document
			.getElementsByClassName("age-section")[0]
			.classList.remove("section-hidden");
		return alert(`Привіт ${name}`);
	}
}

// Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;

function age() {
	let CURRENT_YEAR = new Date().getFullYear();
	let userYear = parseInt(prompt("Напиши свій рік народження, а я порахую скільки тобі років, а я напишу скільки тобі років"));
	let age
	console.log(typeof userYear);
	if (userYear === null || userYear.length < 4) {
		return alert("Ти повинен написати повний рік народження наприклад '1992'");
	} else if (isNaN(parseInt(userYear))) {
		return alert("В рік народження не можна вставляти літери, я все бачу))");
	} else if (userYear < 1920) {
		return alert("Щось ти занадто старий))")
	} else if (userYear > CURRENT_YEAR) {
		alert ("Не вірю що ти з майбутнього")

	} else {
		age = CURRENT_YEAR - userYear;
		document.querySelector("#inner-age").innerText = age;
		document
			.getElementsByClassName("perimetr-section")[0]
			.classList.remove("section-hidden");
		return alert(`Тобі ${age} років`);
	}
}

//Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

function perimetr() {
	const oneSide = prompt("Напиши довжину однієї сторони квадрату");
	if (isNaN(parseInt(oneSide))) {
		return alert("Ну так це ж не число, а ну давай мені число")
	} else if (parseInt(oneSide) <= 0) {
		return alert ("Такого квадрату не буває")
	} else { 
		document
			.getElementsByClassName("circle-section")[0]
			.classList.remove("section-hidden");
		return alert("Периметр такого квадрату дорівнює - " + (4*oneSide))
	}

}

// Запитай у користувача радіус кола і виведи площу такої окружності.

function circleSquare(radius = prompt("Напиши радіус")) {
	const Pi = 3.14;
	if (isNaN(parseInt(radius))) {
		return alert("Ну так це ж не число, а ну давай мені число");
	} else if (parseInt(radius) <= 0) {
		return alert("Такого круга не буває");
	} else {
		document
			.getElementsByClassName("speed-section")[0]
			.classList.remove("section-hidden");
		return alert("Площа такого круга дорівнює - " + Pi * parseInt(radius) ** 2);
	}
}

// Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.

function speed(
	km = prompt("Напиши мені відстань в кілометрах між містами"),
	hour = prompt("А тепер напиши за скільки годин ти хочеш туди доїхати"),
) {
	if (isNaN(+km) || isNaN(+hour)) {
		return alert("І відстань і час повинні бути числами, введи числа")
	} else {
		document
			.getElementsByClassName("currency-section")[0]
			.classList.remove("section-hidden");
		return alert("Твоя швидкість має бути - " + (+km / +hour)+"км/год");
	}
}

// Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.

function exchange() {
	const currencyValue = 0.85;
	const dollars = document.getElementById("dollars").value
	const euro = document.getElementById("euro");
	euro.value = +dollars*currencyValue
}

