const container = document.querySelector('.container-form');
const blockUserData = document.querySelector('.block-user-data');
const paragraph = document.querySelector('.user-data');
const errPassword = document.querySelector('.error-password');

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

function validateEmailInput(str) {
	const regexp = /[a-z0-9]*.+@.+\..+/ig;
	return regexp.test(str);
}

function validatePasswordInput(str) {
	const regexp = /^(?=.*[0-9])(?=.*[@$#!?&])[a-z0-9@$#!?&]{8,}$/ig;
	return regexp.test(str);
}

function addClass(item, addedClass) {
	item.classList.add(addedClass);
}

function removeClass(item, delClass) {
	item.classList.remove(delClass);
}

function addClassForValidate(input, isValid) {
	if (isValid) {
		addClass(input, 'my-validate');
		if (input === password) {
			addClass(errPassword, 'hide');
		}
	} else {
		removeClass(input, 'my-validate');
		addClass(input, 'my-validate-error');
		if (input === password) {
			removeClass(errPassword, 'hide');
		}
	}
}
let isValidEmail;
email.addEventListener('blur', () => {
	isValidEmail = validateEmailInput(email.value);
	addClassForValidate(email, isValidEmail);
});

email.addEventListener('focus', () => {
	blockUserData.classList.add('hide');
	removeClass(email, 'my-validate-error');
});

let isValidPassword;
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
		if (isValidEmail && isValidEmail) {
			btnSubmit.disabled = false;
		} else {
			btnSubmit.disabled = true;
		}
	});
});

form.addEventListener('submit', function (event) {
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


document.querySelectorAll('input').forEach((event) => {
	event.addEventListener("keypress", function (event) {
		if (event.code === 'Enter') {
			this.blur();
		}
	});
});


// Сделать форму логина. Она состоит из поля для ввода почты, поля для ввода пароля и кнопки “отправить”. 

// Кнопка “отправить” показывает введенные данные в формате JSON и очищает поля для ввода. Кнопка заблокирована (disabled) если введены невалидные данные.

//     Почта считается валидной если в ней есть символ @ и точка
//     задание со “звездочкой” - использовать регулярное выражение для валидации почты
//     Пароль считается валидным если в нем:
//     минимум 8 символов
//     есть хотя бы одна цифра
//     есть хотя бы один из перечисленных символов: @$#!?&

// Если пользователь ввел невалидные данные, поле для ввода должно выделиться красным цветом.