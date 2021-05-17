import {arrMovies} from '../card-movie/infMovies';
import {CardMovie} from '../card-movie/CardMovie';
import {ModalEditMovie} from '../card-movie/editMovie';

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
      }
    }

    if (event.target.closest('.btn-edit')) {
      const modal = document.querySelector('.modal');
      console.log(modal);
      $(modal).modal({
        keyboard: false
      });
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
