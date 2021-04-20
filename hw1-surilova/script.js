// Задача №1

let userName = prompt('Как тебя зовут?');
let userYear = Number(prompt('Какого ты года рождения?'));
let lastYear = 2020;
let userAge = lastYear - userYear;
alert(`${userName} ${userAge}`);

// Задача №2

let a = Number(prompt('Введите первое число, пожалуйста:'));
let b = Number(prompt('Введите второе число, пожалуйста:'));
let c = Number(prompt('Введите третье число, пожалуйста:'));
let sum = a + b + c;
let average = Math.round(sum / 3);
alert(`${sum} - это сумма трех чисел`);
if (a % 2 === 0 && a !== 0) {
  alert(`${a} - это чётное число`);
}
if (b % 2 === 0 && b !== 0) {
  alert(`${b} - это чётное число`);
}
if (c % 2 === 0 && c !== 0) {
  alert(`${c} - это чётное число`);
}
alert(`${average} - это среднее арифметическое трех чисел`);

// Задача №3

let number = Number(prompt('Введите, пожалуйста, пятизначное число'));
let units = number % 10;
number -= units;

let tens = number % 100;
number -= tens;
tens /= 10;

let hundreds = number % 1000;
number -= hundreds;
hundreds /= 100;

let thousands = number % 10000;
number -= thousands;
thousands /= 1000;

let tensThousands = number % 100000;
number -= tensThousands;
tensThousands /= 10000;

alert(`${units}, ${tens}, ${hundreds}, ${thousands}, ${tensThousands}`);
