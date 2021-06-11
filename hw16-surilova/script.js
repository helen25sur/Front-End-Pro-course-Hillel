const storageKey = 'user-name-data-';

const form = new Form({
  className: 'main-form',
});

const input = new Input({
  className: 'input-username',
  placeholder: 'Введите ваше имя',
  id: 'username',
  type: 'text',
});

const submitButton = new Button ({
  className: 'btn-submit',
  type: 'submit',
  text: 'Отправить',
});

const listUser = new List({
  className: 'list-username',
});

if (localStorage.length === 0) {
	let itemList1 = new ListItem({
		className: 'item-username',
		value: 'Alex Lenz'
	});
	let itemList2 = new ListItem({
		className: 'item-username',
		value: 'Peter Parker'
	});
	let itemList3 = new ListItem({
		className: 'item-username',
		value: 'Harry Potter'
	});

	itemList1.saveData();
	itemList2.saveData();
	itemList3.saveData();
}

const container = document.body.querySelector('.container');
container.appendChild(form.render());

const formOnPage = document.body.querySelector('.main-form');
formOnPage.appendChild(input.render());
formOnPage.appendChild(submitButton.render());

container.appendChild(listUser.render());

const listUserOnPage = document.body.querySelector('.list-username');



formOnPage.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = document.body.querySelector('.input-username').value;
  if (value.length) {
    const itemList = new ListItem({
      className: 'item-username',
      value: value
    });
    listUserOnPage.prepend(itemList.render());
    itemList.saveData();
    document.body.querySelector('.input-username').value = '';
  }
});

for (const key in localStorage) {
  if (localStorage.hasOwnProperty(key)) {
		try {
			const itemList = new ListItem({
				className: 'item-username',
				value: localStorage.getItem(key)
			});
			listUserOnPage.appendChild(itemList.render());

		} catch (err) {
			console.error(`Something went wrong ${err}`);
		}

  }
}


listUserOnPage.addEventListener('click', (event) => {
  const rowTarget = event.target.closest('.item-username');
  const span = rowTarget.querySelector('.username-span');


  if (event.target.closest('.btn-edit')) {
    let newValue = prompt('Введите новое значение', `${span.innerText}`);
    newValue = newValue.trim();
    localStorage.removeItem(`${storageKey}${span.innerText}`);
    span.innerText = newValue;
    localStorage.setItem(`${storageKey}${newValue}`, `${newValue}`);
  }

  if (event.target.closest('.btn-delete')) {
    const answer = confirm('Вы действительно хотите удалить это значение?');
		if (answer) {
			rowTarget.remove();
      localStorage.removeItem(`${storageKey}${span.innerText}`);
		}
  }
});
