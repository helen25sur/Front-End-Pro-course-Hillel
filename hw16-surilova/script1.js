
const arrUserName = ['Ivan Ivanov', 'Alvin Joe', 'John Joe'];

const container = document.createElement('div');
container.classList.add('container');

const form = new Form('main-form');
container.appendChild(form.render());

const list = new List('collection');
container.appendChild(list.render());
document.body.appendChild(container);


// if (localStorage.length === 0) {
  for (let i = 0; i < arrUserName.length; i++) {
    const l = document.body.querySelector('.collection');

    const newItem = new ItemList({
      className: 'collection-item',
      value: arrUserName[i]
    });
    l.appendChild(newItem.render());
  }
// }

const arrUserOnPage = Array.from(document.body.querySelectorAll('.user-name'));
for (const key in localStorage) {
  if (!localStorage.hasOwnProperty(key)) {
    continue;
  }

  for (const user of arrUserOnPage) {
    const l = document.body.querySelector('.collection');
    if (user.innerHTML !== localStorage.getItem(key)) {
      const newItem = new ItemList({
        className: 'collection-item',
        value: localStorage.getItem(key)
      });

      l.appendChild(newItem.render());
    }
    break;
  }
  break;

  // if (!arrUserOnPage.includes(localStorage.getItem(key))) {

  // }
}


const formOnPage = document.body.querySelector('.main-form');

// Слушатели событий
formOnPage.addEventListener('submit', function (event) {
  event.preventDefault();
  const value = document.body.querySelector('.validate').value;
  console.log(value);
  if (value !== '' && value.length > 3) {
    // arrUserName.push(value);
    const newItem = new ItemList({
      className: 'collection-item',
      value: value
    });
    const l = document.body.querySelector('.collection');
    // const n = localStorage.getItem(`user-name-data${value}`);
    l.appendChild(newItem.render());
    // l.appendChild(n);
    document.body.querySelector('.validate').value = '';
  }
});

