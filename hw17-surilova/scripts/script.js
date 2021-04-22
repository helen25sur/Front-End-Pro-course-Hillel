const button = document.body.querySelector('.btn-data');

const list = document.querySelector('.list-residents');
console.log(button);

const n = new DataLoader('https://swapi.dev/api/planets'); // для сохранения колличества планет
n.load();

let counter = 1;
let maxCounter = 1;

button.addEventListener('click', () => {
  if (counter <= maxCounter) {
    const planetsLoader = new PlanetsLoader(counter);
    maxCounter = +document.querySelector('.count').innerText; // я не придумала ничего лучше, чем записать к-во в дом-элемент и потом его оттуда вычитывать

    planetsLoader.load();
    counter++;
  }
  if (counter > 2) {
    const items = document.querySelectorAll('.person');
    for (const item of items) {
      item.remove();
    }
  }
  if (counter === maxCounter+1) {
    button.disabled = true;
  }
});

// Во время выполнения запроса:
// текст кнопки меняется на “Getting data”
// кнопка становится неактивной
