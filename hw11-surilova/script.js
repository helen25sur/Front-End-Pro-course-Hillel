const squareCards = document.querySelectorAll('.square-card');
const blockButtons = document.querySelectorAll('.block-buttons');

const colorCards = document.querySelectorAll('.color-card');

// Функция и слушатель клика для счетчиков
squareCards.forEach(function (card) {
	card.addEventListener('click', function (event) {
		const evt = event.target.closest('.square-card');
		const btnAdd = event.target.closest('.add');
		const btnRemove = event.target.closest('.remove');

		let counter = Number(card.firstElementChild.dataset.counter);
		let value = counter;

		if (btnRemove) {
			value--;
		} else if (btnAdd || evt) {
			value++;
		}

		card.firstElementChild.dataset.counter = value;
	});
});

// Функция и слушатель клика для смены цвета

function addBlueColor(event) {
	event.target.classList.remove('grey');
	event.target.classList.remove('lighten-5');
	event.target.classList.add('indigo');
	event.target.classList.add('darken-4');
}

function addGreenColor(event) {
	event.target.classList.remove('indigo');
	event.target.classList.remove('darken-4');
	event.target.classList.add('green');
	event.target.classList.add('darken-3');
}

function addYellowColor(event) {
	event.target.classList.remove('green');
	event.target.classList.remove('darken-3');
	event.target.classList.add('amber');
	event.target.classList.add('lighten-2');
}

function addColorDefault(event) {
	event.target.classList.remove('amber');
	event.target.classList.remove('lighten-2');
	event.target.classList.add('grey');
	event.target.classList.add('lighten-5');
}

colorCards.forEach(function (card) {
	card.addEventListener('click', function (event) {
		if (event.target.classList.contains('grey')) {
			addBlueColor(event);
		} else if (card.classList.contains('indigo')) {
			addGreenColor(event);
		} else if (card.classList.contains('green')) {
			addYellowColor(event);
		} else if (card.classList.contains('amber')) {
			addColorDefault(event);
		}
	});

});
