function createElementsOnPage(tag, className) {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}

const container = document.querySelector('.container');
const namePlanet = document.querySelector('.name-planet');

const selectList = createElementsOnPage('select', 'select-list');
const btnData = createElementsOnPage('button', 'btn-data');
btnData.innerText = 'Get Data';
const listResidents = createElementsOnPage('ul', 'list-residents');

container.appendChild(selectList);
container.appendChild(btnData);
container.appendChild(listResidents);

// Создаем наполнение для выпадающего списка по к-ву планет

function renderSelectOptions() {
  fetch(`https://swapi.dev/api/planets`)
    .then(response => response.json())
    .then(response => {
      const count = response.count;
      for (let i = 1; i <= count; i++) {
        const option = createElementsOnPage('option', 'select-option');
        option.innerText = `The planet ${i}`;
        selectList.appendChild(option);
      }
    })
    .catch(error => console.error("CATCH ERROR", error));
}

renderSelectOptions();

// Вспомогательная ф-ция для отрисовки отдельного имени в списке
function getSingleResident(url) {
  fetch(url)
    .then(response => response.json())
    .then(response => {
      const itemList = createElementsOnPage('li', 'name-resident');
      itemList.innerText = response.name;
      listResidents.appendChild(itemList);
    })
    .catch(error => console.error("CATCH ERROR", error));
}

// Ф-ция для наполнения списка именами жителей выбранной планеты
function getListResidents() {
  listResidents.innerHTML = '';
  const selectedPlanet = selectList.value;
  const num = Number(selectedPlanet.match(/[0-9]+/g));
  fetch(`https://swapi.dev/api/planets/${num}/`)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      namePlanet.innerText = response.name;
      const arrResidents = response.residents;
      if (arrResidents.length === 0) {
        return console.log('Массив с жителями планеты пуст');
      }
      for (const resident of arrResidents) {
        getSingleResident(resident);
      }
    })
    .catch(error => console.error("CATCH ERROR", error));
}

btnData.addEventListener('click', getListResidents);
