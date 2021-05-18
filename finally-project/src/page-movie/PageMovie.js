import {BaseComponent} from '../baseComponents';
// import {arrMovies} from '../card-movie/infMovies';
import html from './pageMovie.html';

export class PageMovie extends BaseComponent {
  constructor(data) {
    super(html, data);
    this.data = data;
  }

  get id () {
    return this.data.id;
  }
}
