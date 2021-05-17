import {arrMovies} from '../card-movie';
import {CardMovie} from '../card-movie/CardMovie';

export class ListMovies {
  #listMovies;
  constructor() {
    this.#listMovies = document.createElement('ul');
    this.#listMovies.className = 'list-movies';
  }

  render() {
    arrMovies.forEach((item) => {
      const movie = new CardMovie(item);
      this.#listMovies.appendChild(movie.render());
    });

    return this.#listMovies;
  }
}
