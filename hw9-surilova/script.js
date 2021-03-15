function createElements(tagName, listClasses, parent, text) {
 const newElem = document.createElement(tagName);
 for (const newClass of listClasses) {
  newElem.classList.add(newClass);
 }
 newElem.textContent = text;
 parent.append(newElem);
 return newElem;
}

const buttonEdit = createElements('a', ['waves-effect', 'waves-light', 'green', 'lighten-1', 'btn-small', 'right'], '', 'Редактировать');
const iconEdit = createElements('i', ['material-icons', 'right'], buttonEdit, 'edit');
const buttonDelete = createElements('a', ['waves-effect', 'waves-light', 'red', 'lighten-2', 'btn-small', 'right'], '', 'Удалить');
const iconDelete = createElements('i', ['material-icons', 'right'], buttonDelete, 'delete');

function createListItem (name) {
 const listItem = createElements('li', ['collection-item'], listUser, name);
 listItem.append(buttonEdit);
 listItem.append(buttonDelete);

 return listItem;
}


// Генерация поля ввода и кнопки Отправить
const container = createElements('div', ['container'], document.body, '');
const form = createElements('form', ['main-form'], container, '');
const containerRow = createElements('div', ['row', 'valign-wrapper'], form, '');
const inputField = createElements('div', ['input-field', 'col', 's9'], containerRow, '');
const inputFullName = createElements('input', ['validate'], inputField, '');
inputFullName.placeholder = 'Введите Ваше имя';
inputFullName.id = 'full_name';
inputFullName.type = 'text';
const label = createElements('label', ['label'], inputField, 'Имя пользователя');
label.for = 'full_name';
const containerButton = createElements('div', ['col', 's3'], containerRow, '');
const buttonSubmit = createElements('button', ['waves-effect', 'waves-light', 'btn', 'green', 'darken-3'], containerButton, 'Отправить');
buttonSubmit.type = 'submit';
buttonSubmit.name = 'action';

const iconForSubmit = createElements('i', ['material-icons', 'right'], buttonSubmit, 'send');


// Генерация списка пользователей
const container2 = createElements('div', ['row'], container, '');
const containerColl = createElements('div', ['col', 's12'], container2, '');
const listUser = createElements('ul', ['collection'], containerColl, '');

const listItem1 = createListItem('John Joe');
const listItem2 = createListItem('Alvin Joe');
const listItem3 = createListItem('Ivan Ivanov');


buttonSubmit.addEventListener('click', function(event){
 event.preventDefault();
 let button = event.target.closest('.btn'); 
  if (button) {
   return createListItem(inputFullName.value);
  }  
 });

// С помощью JavaScript создать поле для ввода текста, кнопку “Отправить” и список. 
// В поле для ввода текста вводится имя пользователя. По кнопке создается новый ряд в списке. 
// Поле для ввода текста очищается после добавления.

// Каждый ряд списка состоит из:

//     текст с именем пользователя
//     кнопка “Редактировать”
//     при клике открывается модальное окно prompt и вводится новое имя
//     кнопка “Удалить”
//     при клике открывается модальное окно confirm

// Изначально при открытии страницы в списке 3-5 пользователей.

// Все DOM элементы нужно создавать через JavaScript. Допускается только <div id=”wrapper” />