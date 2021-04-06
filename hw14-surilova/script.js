function createElements(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

const container = document.querySelector('.container');

const containerTime = createElements('div', 'container-time');
const elementHours = createElements('div', 'block-hours');
const elementMinutes = createElements('div', 'block-minutes');
const elementSeconds = createElements('div', 'block-seconds');

containerTime.append(elementHours);
containerTime.append(elementMinutes);
containerTime.append(elementSeconds);

container.appendChild(containerTime);

function showCurrentTime() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  elementHours.innerText = hours;
  elementMinutes.innerText = minutes;
  elementSeconds.innerText = seconds;

  console.log(`${currentTime.toLocaleTimeString()}`);
}

setInterval(showCurrentTime, 1000);
setInterval(console.clear, 1500);
