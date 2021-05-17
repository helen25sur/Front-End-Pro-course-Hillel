import {BaseComponent} from '../baseComponents';
import {appHistory} from '../historyApp';

export class Header extends BaseComponent {
  #btnAllMovies;
  constructor() {
    super(html, data);
    this.#btnAllMovies = document.querySelector('a.all-movies');

    this.#btnAllMovies.addEventListener('mousemove', this.onClick.bind(this));
  }

  onClick(event) {
    event.preventDefault();

    const {hash} = event.target.href;
    appHistory.push({hash: hash});
  }
}
