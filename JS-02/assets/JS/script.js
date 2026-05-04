// #1 Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let rez = 0.1 + 0.2
console.log(rez.toFixed(1));

// #2 Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let num2_1 = "1"
let num2_2 = 2

console.log(+1 + 2);

// #3 Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

function exec_3(size = prompt("Скільки гігабайт твоя флешка?")) {
	const file_size = 820 / 1000;
	let realSize = ((size * 1000) / 1024).toFixed(2);
	return alert (`На твою флешку влізе ${Math.trunc(realSize / file_size)} файлів`)
}


// #4 Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

function countChoco(cash = prompt("Скільки грошей в тебе в гаманці?"), choco = prompt("А тепер введи скільки коштує одна шоколадка")) {
	if (isNaN(cash) || isNaN(choco)) {
		return alert("Ти повинен ввести все тільки числами")
	} else {
		return alert(`На свої гроші ти можеш купити ${Math.trunc(cash / choco)} шоколадок`);
	}
}
// №5 Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

function reversNumber(num = prompt("Введи трьохзначне число")) {
	if (num.length < 3 || num.length > 3) {
		alert ("Введи число з 3-х цифр")
	} else {
		const thirdDigit = Math.trunc(((num / 10) % 1)*10)+"";
		const firstDigit = Math.trunc(num / 100)+"";
		const secondDigit = Math.trunc(((Math.trunc(num / 10)/10)%1)*10)+"";
		return alert (`Твоє число навпаки - ${thirdDigit+secondDigit+firstDigit}`)
	}
}

// №6 Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

function percentPer2Mounth(deposit = prompt("Скільки коштів ти поклав у банк?")) {
	const yearPercent = 5;
	let sum = +deposit*((yearPercent/100)/12)*2
	return alert ("За два місяці з цієї суми ти отримуєш - " + sum)
}