// import {arrMovies} from '../card-movie/infMovies';
import {CardMovie} from '../card-movie/CardMovie';
import {writeToLocalStorage} from '../local-Storage/writeToLocalStorage';
// import modal from './../card-movie/addNew.html'
export class ListMovies {
  #listMovies;
  constructor(data) {
    this.data = data;
    this.#listMovies = document.createElement('ul');
    this.#listMovies.className = 'list-movies';
  }

  render() {
    // console.log(this.data);
    this.data.forEach((item) => {
      const movie = new CardMovie(item);
      this.#listMovies.appendChild(movie.render());
      writeToLocalStorage(item);
    });

    return this.#listMovies;
  }
}
