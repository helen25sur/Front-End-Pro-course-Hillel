const container = document.querySelector('.container-form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const blockUserData = document.querySelector('.block-user-data');
const paragraph = document.querySelector('.user-data');


const data = {
 title: 'Login form',
 labels: [
     { inputId: 'email', inputType: 'email', label: 'Email' },
     { inputId: 'password', inputType: 'password', label: 'Password' },
 ],
 buttons: [
  {type: 'submit', text: 'Отправить'}
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

const form = createElementFromTemplate('#form-template', data);
container.appendChild(form);

function addDataToObject() {
 const object = {
  email: email.value,
  password: password.value
 };
 return object;
}

function validateEmailInput () {
 const regexp = /[a-z0-9]*.+@.+\..+/ig;

 console.log(regexp.test('Test@test.com'));
 // ^...$
}

validateEmailInput();

form.addEventListener('submit', function(event) {
 event.preventDefault();
 const userData = addDataToObject();
 const jsonData = JSON.stringify(userData);
 paragraph.textContent = jsonData;
 blockUserData.classList.remove('hide');
 email.value = '';
 password.value = '';
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