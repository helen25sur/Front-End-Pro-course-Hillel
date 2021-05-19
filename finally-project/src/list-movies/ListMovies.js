import {arrMovies} from '../card-movie/infMovies';
import {CardMovie} from '../card-movie/CardMovie';
import {PageMovie} from '../page-movie/PageMovie';
import {ModalEditMovie} from '../modal-window/ModalEditMovie';

import {appHistory} from '../historyApp';


// import modal from './../card-movie/addNew.html'

export class ListMovies {
  #listMovies;
  constructor() {
    this.#listMovies = document.createElement('ul');
    this.#listMovies.className = 'list-movies';
  }

  onClick(event) {
    const card = event.target.closest('.card');
    // console.log(card);
    if (event.target.closest('.btn-delete')) {
      const resp = confirm('Вы хотите удалить этот фильм?');
      if (resp) {
        card.remove();
        // удалить и из массива тоже
      }
    }

    if (event.target.closest('.btn-edit')) {

      const containerMovie = event.target.closest('.no-gutters');     //найти способ переиспользовать код здесь и на строке 51
      const nameMovie = containerMovie.querySelector('.card-title').innerText;
      const needMovieElement = arrMovies.filter(item => {
        if (item.titleMovie === nameMovie) {
          return item;
        }
      })[0];
      const modal = new ModalEditMovie(needMovieElement);
      document.body.appendChild(modal._element);
      // console.log(modal._element);
      $(modal._element).modal({
        keyboard: true
      });
      $(modal._element).on('hide.bs.modal', function () {
        modal._element.remove();
      })
    }

    if (event.target.closest('.more')) {
      event.preventDefault();
      const containerMovie = event.target.closest('.card-body');
      const nameMovie = containerMovie.querySelector('.card-title').innerText;
      const needMovieElement = arrMovies.filter(item => {
        if (item.titleMovie === nameMovie) {
          return item;
        }
      })[0];
      appHistory.push({ hash: `#list-${needMovieElement.id}`});

    }
  }

  render() {
    arrMovies.forEach((item) => {
      const movie = new CardMovie(item);
      movie._element.addEventListener('click', this.onClick.bind(this));
      this.#listMovies.appendChild(movie.render());
    });

    return this.#listMovies;
  }
}
