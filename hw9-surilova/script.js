function createElements(tagName, listClasses, parent, text) {
	const newElem = document.createElement(tagName);
	for (const newClass of listClasses) {
		newElem.classList.add(newClass);
	}
	newElem.textContent = text;
	parent.prepend(newElem);
	return newElem;
}

const container = createElements('div', ['container'], document.body, '');
const container2 = createElements('div', ['row'], container, '');
const containerColl = createElements('div', ['col', 's12'], container2, '');

// Создание поля ввода и кнопки Отправить
function createForm() {
	const form = createElements('form', ['main-form'], container, '');
	const containerRow = createElements('div', ['row', 'valign-wrapper'], form, '');
	const containerButton = createElements('div', ['col', 's3'], containerRow, '');
	const inputField = createElements('div', ['input-field', 'col', 's9'], containerRow, '');
	const inputFullName = createElements('input', ['validate'], inputField, '');
	inputFullName.placeholder = 'Введите Ваше имя';
	inputFullName.id = 'full_name';
	inputFullName.type = 'text';

	const label = createElements('label', ['label'], inputField, 'Имя пользователя');
	label.for = 'full_name';

	const buttonSubmit = createElements('button', ['waves-effect', 'waves-light', 'btn', 'green', 'darken-3'], containerButton, 'Отправить');
	buttonSubmit.type = 'submit';
	buttonSubmit.name = 'action';
	const iconForSubmit = createElements('i', ['material-icons', 'right'], buttonSubmit, 'send');

	return { form, inputFullName, buttonSubmit };
}

const form = createForm();

// Создание списка пользователей
const listUser = createElements('ul', ['collection'], containerColl, '');

function createListItem(parent, name) {
	const listItem = createElements('li', ['collection-item'], parent, '');
	const span = createElements('span', ['user-name'], listItem, name);
	const btnEdit = createElements('a', ['waves-effect', 'waves-light', 'green', 'lighten-1', 'btn-small', 'right', 'edit'], listItem, 'Редактировать');
	const iconEdit = createElements('i', ['material-icons', 'right'], btnEdit, 'edit');
	const btnDelete = createElements('a', ['waves-effect', 'waves-light', 'red', 'lighten-2', 'btn-small', 'right', 'delete'], listItem, 'Удалить');
	const iconDelete = createElements('i', ['material-icons', 'right'], btnDelete, 'delete');

	return listItem;
}


createListItem(listUser, 'John Joe');
createListItem(listUser, 'Alvin Joe');
createListItem(listUser, 'Ivan Ivanov');


// Слушатели событий
form.buttonSubmit.addEventListener('click', function (event) {
	event.preventDefault();
	let button = event.target.closest('.btn');
	if (button) {
		createListItem(listUser, form.inputFullName.value);
		form.inputFullName.value = '';
	}
});

listUser.addEventListener('click', function (event) {
	const btnEdit = event.target.closest('a.edit');
	const rowTarget = event.target.closest('.collection-item');
	const span = rowTarget.querySelector('.user-name');
	if (btnEdit) {
		let newValue = prompt('Введите новое значение', `${span.textContent}`);
		newValue = newValue.trim();
		if (newValue) {
			span.textContent = newValue;
		}
	}

	const btnDelete = event.target.closest('a.delete');
	if (btnDelete) {
		const answer = confirm('Вы действительно хотите удалить это значение?');
		if (answer) {
			rowTarget.remove();
		}
	}
});