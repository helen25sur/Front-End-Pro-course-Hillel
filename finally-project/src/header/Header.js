// import {BaseComponent} from '../baseComponents';
import {appHistory} from '../historyApp';
// import {ModalNewMovie} from '../modal-window/ModalNewMovie';
import {ModalWindow} from '../modal-window/ModalWindow';
import htmlNew from '../modal-window/ModalNewMovie.html';

export class Header {
  #btnAllMovies;
  #btnCreateNew;

  constructor() {
    this.#btnAllMovies = document.querySelector('a.all-movies');
    this.#btnAllMovies.addEventListener('mousedown', this.onClick.bind(this));

    this.#btnCreateNew = document.querySelector('#add-new');
    this.#btnCreateNew.addEventListener('click', this.createNewMovie);
  }

  onClick(event) {
    event.preventDefault();
    const {hash} = event.target.href;
    appHistory.push({hash: hash});
  }

  createNewMovie() {
    const newModal = new ModalWindow(htmlNew);
    document.body.appendChild(newModal._element);
    $(newModal._element).modal();
  }
}
