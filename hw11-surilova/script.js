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


// Массив с цветами
const colors = [
	{
		startColor: 'grey',
		startShade: 'lighten-5',
		currentColor: 'indigo',
		currentShade: 'darken-4'
	},
	{
		startColor: 'indigo',
		startShade: 'darken-4',
		currentColor: 'green',
		currentShade: 'darken-3'
	},
	{
		startColor: 'green',
		startShade: 'darken-3',
		currentColor: 'amber',
		currentShade: 'lighten-2'
	},
	{
		startColor: 'amber',
		startShade: 'lighten-2',
		currentColor: 'grey',
		currentShade: 'lighten-5'
	}
];

// Функция и слушатель клика для смены цвета
function addColor(event, arr, counter) {
	event.target.classList.remove(arr[counter].startColor);
	event.target.classList.remove(arr[counter].startShade);
	event.target.classList.add(arr[counter].currentColor);
	event.target.classList.add(arr[counter].currentShade);
}

colorCards.forEach(function (card) {
	let counter = 0;
	card.addEventListener('click', function (event) {
		if (counter > colors.length - 1) {
			counter = 0;
		}
		addColor(event, colors, counter);
		counter++;
	});

});
