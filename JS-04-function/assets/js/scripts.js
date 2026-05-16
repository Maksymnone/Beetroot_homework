// Напиши всі можливі варіанти створення функцій.
function fun() {} // function declaration
let fun1 = function (a, b) {}; //function exprassion
let fun2 = (a) => {}; // arrow function

// Створи функцію, яка буде виводити кількість переданих їй аргументів.
function countArgs(...args) {
	return args.length;
}

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

function comparison(a, b) {
	if (a > b) {
		return 1;
	} else if (a < b) {
		return -1;
	} else {
		return 0;
	}
}

// Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorialNumber(a) {
	let sum = 1;
	for (let i = 1; i <= a; i++) {
		sum = sum*i
	}
	return sum
}

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function concatNumber(a, b, c) {
	return parseInt(String(a) + b + c);
}

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function square(a,b) {
	if (b) {
		return (a+b)*2
	} else {
		return 4*a
	}
}

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function perfectNumber(a) {
	const divArr = [];
	for (let i = 1; i < a; i++) {
		if (a % i === 0) {
			divArr.push(i);
		}
	}
	return divArr.reduce((accu,num) => accu+num,0) === a
}


// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function rangePerfNum(a, b) {
	const rangeNumber = []
	const arrPerfNum = []
	for (let i = a; i <= b; i++) {
		rangeNumber.push(i)
		if (perfectNumber(i)) {
			arrPerfNum.push(i)
		} 
	}
	return arrPerfNum;
}