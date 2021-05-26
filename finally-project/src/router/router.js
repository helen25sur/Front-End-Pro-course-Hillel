import {Header} from './../header/Header';
import {CardMovie} from './../card-movie/CardMovie';
import {PageMovie} from '../page-movie/PageMovie';
import {ListMovies} from './../list-movies/ListMovies';
import {ModalNewMovie} from './../modal-window/ModalNewMovie';

import {arrMovies} from '../card-movie/infMovies';

import {appHistory} from '../historyApp';

const mainContent = document.querySelector('#content');

export function renderRoute(pathname) {
  function findOnId (pathname) {
    const regexp = /^#list-[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (regexp.test(pathname)) {
      const id = pathname.slice(6);
      const value = arrMovies.filter(item => {
        if (item.id === id) {
          return item;
        }
      })[0];
      mainContent.innerHTML = '';
      const pageMovie = new PageMovie(value);
      mainContent.appendChild(pageMovie.render());
    }
  }

  switch (pathname) {
    case '': {
      mainContent.innerHTML =
        '<h1 class="mt-5 text-center text-uppercase">Добро пожаловать<br> на портал Мир Кино!</h1>';
      break;
    }
    case '#list': {
      mainContent.innerHTML = '';

      const list = new ListMovies(arrMovies);
      mainContent.appendChild(list.render());
      break;
    }

    default: {
      // mainContent.innerHTML = '404';
      findOnId(pathname);
      break;
    }
  }
}

appHistory.listen((listener) => {
  console.log('history listener', `${listener.location.hash}`);
  renderRoute(listener.location.hash);
});

renderRoute(appHistory.location.hash);
