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

function addColor(event, startColor, startShade, currentColor, currentShade) {
	event.target.classList.remove(startColor);
	event.target.classList.remove(startShade);
	event.target.classList.add(currentColor);
	event.target.classList.add(currentShade);
}

colorCards.forEach(function (card) {
	card.addEventListener('click', function (event) {
		if (event.target.classList.contains('grey')) {
			addColor(event, 'grey', 'lighten-5', 'indigo', 'darken-4');
		} else if (card.classList.contains('indigo')) {
			addColor(event, 'indigo', 'darken-4', 'green', 'darken-3');
		} else if (card.classList.contains('green')) {
			addColor(event, 'green', 'darken-3', 'amber', 'lighten-2');
		} else if (card.classList.contains('amber')) {
			addColor(event, 'amber', 'lighten-2', 'grey', 'lighten-5');
		}
	});

});
