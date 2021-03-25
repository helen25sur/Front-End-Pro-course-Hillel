// Объявление переменных элементов, которые изначально есть на странице
const container = document.querySelector('.container-form');
const blockUserData = document.querySelector('.block-user-data');
const paragraph = document.querySelector('.user-data');
const errPassword = document.querySelector('.error-password');
const errEmail = document.querySelector('.error-email');

// Создание формы из шаблона
const data = {
	title: 'Login form',
	labels: [
		{ inputId: 'email', inputType: 'text', label: 'Email' }, // type="text" чтобы не было автоматической валидации от Matetialize
		{ inputId: 'password', inputType: 'password', label: 'Password' },
	],
	buttons: [
		{ type: 'submit', text: 'Отправить' }
	]
};

function createElementFromTemplate(templateId, data) {
	const template = document.querySelector(templateId).innerHTML;
	const createHtml = _.template(template);
	const html = createHtml(data);
	const container = document.createElement('div');
	container.innerHTML = html;

	return container.firstElementChild;
}

const formBlock = createElementFromTemplate('#form-template', data);
container.appendChild(formBlock);

// Объявление переменных элементов из формы, с которыми происходит дальнейшее взаимодействие
const form = formBlock.firstElementChild;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const labelEmail = document.querySelector('label[for="email"]');
const labelPassword = document.querySelector('label[for="password"]');
const btnSubmit = document.querySelector('.btn-submit');

function addDataToObject() {
	const object = {
		email: email.value,
		password: password.value
	};
	return object;
}

// Функции с регулярными выражениями для полей email и password
function validateEmailInput(str) {
	const regexp = /[a-z0-9]*.+@.+\..+/ig;
	return regexp.test(str);
}

function validatePasswordInput(str) {
	const regexp = /^(?=.*[0-9])(?=.*[@$#!?&])[a-z0-9@$#!?&]{8,}$/ig;
	return regexp.test(str);
}

// Функции добавления и удаления классов
function addClass(item, addedClass) {
	item.classList.add(addedClass);
}

function removeClass(item, delClass) {
	item.classList.remove(delClass);
}

// Общая функция валидации полей
function addClassForValidate(input, isValid) {
	if (isValid) {
		addClass(input, 'my-validate');

		switch(input) {
			case password:
				addClass(errPassword, 'hide');
				break;
			case email:
				addClass(errEmail, 'hide');
				break;
			default:
				break;
		}
	} else {
		removeClass(input, 'my-validate');
		addClass(input, 'my-validate-error');

		switch(input) {
			case password:
				removeClass(errPassword, 'hide');
				break;
			case email:
				removeClass(errEmail, 'hide');
				break;
			default:
				break;
		}
	}
}

// "Слушатели" полей

let isValidEmail;
let isValidPassword;
 // Выношу из функций эти переменные, чтобы дальше использовать для проверки и блокировки кнопки "Отправить"

email.addEventListener('blur', () => {
	isValidEmail = validateEmailInput(email.value);
	addClassForValidate(email, isValidEmail);
});

email.addEventListener('focus', () => {
	addClass(blockUserData, 'hide');
	addClass(errEmail, 'hide');
	removeClass(email, 'my-validate-error');
});

password.addEventListener('blur', () => {
	isValidPassword = validatePasswordInput(password.value);
	addClassForValidate(password, isValidPassword);
});

password.addEventListener('focus', () => {
	addClass(blockUserData, 'hide');
	addClass(errPassword, 'hide');
	removeClass(password, 'my-validate-error');
});

document.querySelectorAll('input').forEach((input) => {
	input.addEventListener('blur', () => {
		if (isValidEmail && isValidPassword) {
			btnSubmit.disabled = false;
		} else {
			btnSubmit.disabled = true;
		}
	});
	input.addEventListener("keypress", function (event) {
		if (event.code === 'Enter') {
			this.blur();
		}
	});
});

// "Слушатель" отправки формы 
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const userData = addDataToObject();
	const jsonData = JSON.stringify(userData);
	paragraph.textContent = jsonData;
	removeClass(blockUserData, 'hide');
	email.value = '';
	password.value = '';

	removeClass(email, 'my-validate');
	removeClass(password, 'my-validate');
	removeClass(labelEmail, 'active');
	removeClass(labelPassword, 'active');
});
