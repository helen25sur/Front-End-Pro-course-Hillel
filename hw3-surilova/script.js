// Задача №1
function getPeriod(startNum, endNum) {
	for (let i = startNum; i <= endNum; i++) {
		document.write(i);
		if (i === endNum) {
			document.write(`<br> <br>`);
			break;
		}
		document.write(', ');

	}
}
getPeriod(10, 20);

// Задача №2
function getSquare(startNum, endNum) {
	for (let i = startNum; i <= endNum; i++) {
		document.write(i * i);
		if (i === endNum) {
			document.write(`<br> <br>`);
			break;
		}
		document.write(', ');
	}
}
getSquare(10, 20);

// Задача №3
function getMultiplicationTable(num) {
	for (let i = 1; i <= 10; i++) {
		document.write(`${num} * ${i} = ${num * i}`);
		document.write(`<br>`);
	}
}
getMultiplicationTable(7);

// Задача №4
function calcSum(startNum, endNum) {
	let sum = 0;
	for (let i = startNum; i <= endNum; i++) {
		sum += i;
	}
	document.write(`<br>${sum} - это сумма всех целых чисел от ${startNum} и до ${endNum} <br>`);
	return sum;
}
calcSum(1, 15);

// Задача №5
function calcMultiplication(startNum, endNum) {
	let multi = 1;
	for (let i = startNum; i <= endNum; i++) {
		multi *= i;
	}
	document.write(`<br> ${multi} - произведение всех целых чисел от ${startNum} до ${endNum}`);

	return multi;
}
calcMultiplication(15, 35);

// Задача №6
function calcAverage(startNum, endNum) {
	let sum = 0;
	for (let i = startNum; i <= endNum; i++) {
		sum += i;
	}
	const average = sum / endNum;
	console.log(average);
	document.write(`<br><br>${average} - среднее арифметическое всех целых чисел от ${startNum} до ${endNum}`);
	return average;
}
calcAverage(1, 500);

// Задача №7
function calcSumEven(startNum, endNum) {
	let sum = 0;
	for (let i = startNum; i <= endNum; i++) {
		if (i % 2 !== 0) {
			continue;
		}
		sum += i;
	}
	console.log(sum);
	document.write(`<br><br>${sum} - сумма только четных чисел в диапазоне от ${startNum} до ${endNum}`);
	return sum;
}
calcSumEven(30, 80);

// Задача №8
function getPeriodMultiple(startNum, endNum, divider) {
	document.write(`<br><br> Все числа в диапазоне от ${startNum} до ${endNum} кратные ${divider}:<br>`);
	for (let i = startNum; i <= endNum; i++) {
		if (i % divider === 0) {
			document.write(i);
			document.write(', ');
		}
	}
	document.write(`<br><br>`);
}
getPeriodMultiple(100, 200, 3);

// Задача №9
function calcDividerNumber() {
	const num = Number(prompt('Введите число:'));
	let count = 0;
	let sum = 0;
	if (Number.isNaN(num)) {
		alert('Ошибка!');
	}
	for (let divider = 0; divider <= num; divider++) {
		if (num % divider === 0) {
			document.write(`<br>${divider} - делитель числа ${num}<br>`);
			if (divider % 2 === 0) {
				count++;
				sum += divider;
			}
		}
	}
	document.write(`<br>${count} - количество четных делителей`);
	document.write(`<br>${sum} - сумма четных делителей <br><br>`);
}
// calcDividerNumber();

// Задача №10
function writeMultiplicationTableFull(startNum, endNum) {
	for (let i = startNum; i <= endNum; i++) {
		for (let j = 1; j <= 10; j++) {
			document.write(`${i} * ${j} = ${i * j}<br>`);
		}
		document.write(`***<br>`);
	}
}
writeMultiplicationTableFull(1, 10);

// Задача №11
function gameGuessNumber(min, max) {
	const hiddenNumber = Math.floor(Math.random() * (max - min + 1)) + min;

	const startGame = confirm('Было загадано число от 0 до 10, хотите его угадать?');
	if (startGame === true) {
		while (true) {
			let answerNumber = prompt('Ваш вариант числа:');
			if (answerNumber === null) {
				break;
			}
			if (Number.isNaN(Number(answerNumber))) {
				answerNumber = prompt('Ошибка! Введите число:');
			}
			if (answerNumber === String(hiddenNumber)) {
				alert('Вы победили! Загаданное число было - ' + hiddenNumber);
				break;
			}
		}
	}
}
// gameGuessNumber(0, 10);
