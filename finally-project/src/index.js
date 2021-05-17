import './style.css';

import {Header} from './header/Header';
import {CardMovie} from './card-movie/CardMovie';
import {ListMovies} from './list-movies/ListMovies';
import {ModalWindow} from './modal-window/ModalWindow';

import {appHistory} from './historyApp';

const mainContent = document.querySelector('#content');

function renderRoute(pathname) {
  switch (pathname) {
    case '': {
      mainContent.innerHTML =
        '<h1 class="mt-5 text-center text-uppercase">Добро пожаловать<br> на портал Мир Кино!</h1>';
      break;
    }
    case '#list': {
      mainContent.innerHTML = '';

      const list = new ListMovies();
      mainContent.appendChild(list.render());
      break;
    }

    default: {
      mainContent.innerHTML = '404';
      break;
    }
  }
}

appHistory.listen((listener) => {
  console.log('history listener', `${listener.location.hash}`);
  renderRoute(listener.location.hash);
});

renderRoute(appHistory.location.hash);
