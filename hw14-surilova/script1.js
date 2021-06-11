const select = document.querySelector('#type-time');
const setting = document.querySelector('.setting');

// Создание html-элементов
function createElements(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

const container = document.querySelector('.container');
const containerTime = createElements('div', 'container-time');
const elementFirst = createElements('div', 'block-first');
const elementSecond = createElements('div', 'block-second');
const elementThird = createElements('div', 'block-third');

const containerDate = createElements('div', 'container-date');

containerTime.append(elementFirst);
containerTime.append(elementSecond);
containerTime.append(elementThird);

container.appendChild(containerTime);
container.appendChild(containerDate);

// Функция возвращает строку с текущим временем
function getCurrentTime() {
  return new Date();
}

// Функция для отображения времени в формате HH:MM:SS
function showTimeHHMMSS(time) {
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  elementFirst.innerText = hours;
  elementSecond.innerText = minutes;
  elementThird.innerText = seconds;

  console.log(time.toLocaleTimeString());
}

// Функция для отображения времени в формате H:M AM/PM
function showTimeAMPM(time) {
  let hours = time.getHours();
  let minutes = time.getMinutes();

  if (hours <= 12) {
    elementThird.innerText = 'AM';
  } else if (hours > 12 && hours <= 24) {
    elementThird.innerText = 'PM';
    hours = hours - 12;
  }

  elementFirst.innerText = hours;
  elementSecond.innerText = minutes;
}

// Функция для отображения времени в формате YYYY-MM-DD HH:MM
function showTimeYYMMDD(time) {
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  elementFirst.innerText = hours;
  elementSecond.innerText = minutes;
  elementThird.innerText = seconds;
  containerDate.innerText = `${year}-${month}-${day}`;
}

setting.addEventListener('click', () => {
  select.style.display = 'block';
});


// Функция, которая связывает все функции с форматами дат и селект

function timer() {
  const currentTime = getCurrentTime();
  if (select.value === 'HHMMSS') {
    containerDate.style.display = 'none';
   return showTimeHHMMSS(currentTime);
  }
  if (select.value === 'AM/PM') {
    containerDate.style.display = 'none';
   return showTimeAMPM(currentTime);
  }
  if (select.value === 'YYYY-MM-DD HH:MM') {
    containerDate.style.display = 'block';
    return showTimeYYMMDD(currentTime);
  }
}

select.addEventListener('change', () => {
  setInterval(timer, 1000);
  select.style.display = 'none';
});
setInterval(timer, 1000);
// setInterval(console.clear, 1500);
