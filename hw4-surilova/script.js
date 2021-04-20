// Функция считает площадь круга с заданным радиусом
function calcAreaRound(radius) {
	return Math.PI * radius * radius;
}
console.log(calcAreaRound(12));

// Функция считает длину окружности с заданным радиусом
function calcCircumference(radius) {
	return 2 * radius * Math.PI;
}
console.log(calcCircumference(12));

// Функция находит среднее арифметическое двух чисел
function calcAverage(a, b) {
	return (a + b) / 2;
}
console.log(calcAverage(5, 15));

// Функция выполняет заданное математическое действие с двумя операндами
function calc(x, y, action) {
	switch (action) {
		case '+':
			return x + y;
		case '-':
			return x - y;
		case '*':
			return x * y;
		case '/':
			return x / y;
		case '%':
			return x % y;
		case '^':
			return x ** y;
		// return Math.pow(x, y);
		default:
			return null;
	}
}
console.log(calc(2, 8, '^'));