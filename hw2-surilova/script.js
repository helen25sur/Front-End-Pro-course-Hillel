// ===== Задача №1
const firstNumber = Number(prompt("Введите первое число:", ""));
const secondNumber = Number(prompt("Введите второе число:", ""));
if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
	alert("Ошибка!");
} else if (firstNumber === secondNumber) {
	alert("Числа равны");
} else if (firstNumber > secondNumber) {
	alert(`${firstNumber} больше ${secondNumber}`);
} else if (secondNumber > firstNumber) {
	alert(`${secondNumber} больше ${firstNumber}`);
}

// ===== Задача №2
const thirdNumber = Number(prompt("Введите число:", ""));
if (Number.isNaN(thirdNumber)) {
	alert("Ошибка!");
} else if (thirdNumber % 2 === 0) {
	alert(`${thirdNumber} четное число`);
} else if (thirdNumber % 2 !== 0) {
	alert(`${thirdNumber} нечетное число`);
}
alert(`${thirdNumber % 10} - последнее число`);

// ===== Задача №3
const userName = prompt("Как тебя зовут?") ?? "Аноним";
const userAge = Number(prompt("Сколько тебе лет?"));
const alcoholAnswer = confirm("Алкоголь употребляем?");

if (Number.isNaN(userAge)) {
	console.log(`${userName}, введи возраст свой возраст числом`);
} else if (userAge === 0) {
	console.log(`${userName}, кажется, ты забыл указать свой возраст`);
} else if (alcoholAnswer === true && userAge > 40) {
	console.log(`${userName}, не злоупотребляйте`);
} else if (alcoholAnswer === true && userAge < 18) {
	console.log(`${userName}! Ты что?! Маме расскажу!`);
} else if (alcoholAnswer === true && userAge >= 18 && userAge <= 40) {
	console.log(`${userName}, только водку с пивом не мешай...`);
} else if (alcoholAnswer === false) {
	console.log(`${userName}, так держать!`);
}
