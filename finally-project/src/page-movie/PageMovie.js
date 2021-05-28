import {BaseComponent} from '../baseComponents';
// import {arrMovies} from '../card-movie/infMovies';
import html from './pageMovie.html';

export class PageMovie extends BaseComponent {
  constructor(data) {
    super(html, data);
    this.data = data;
    this.countLikes();
  }

  countLikes() {
    const btnLike = this._element.querySelector('.like');
    const btnDislike = this._element.querySelector('.dislike');

    let counterLike = btnLike.dataset.count;
    let counterDislike = btnDislike.dataset.count;

    if (localStorage.getItem(`${this.id}:like`) !== null) {
      counterLike = Number(localStorage.getItem(`${this.id}:like`));
      btnLike.dataset.count = counterLike;
    } else {
      counterLike = Number(btnLike.dataset.count);
    }

    if (localStorage.getItem(`${this.id}:dislike`) !== null) {
      let counterDislike = Number(localStorage.getItem(`${this.id}:dislike`));
      btnDislike.dataset.count = counterDislike;
    } else {
      counterDislike = Number(btnDislike.dataset.count);
    }

    btnLike.addEventListener('click', () => {
      counterLike++;
      btnLike.dataset.count = counterLike;
      localStorage.setItem(`${this.id}:like`, counterLike);
    });
    btnDislike.addEventListener('click', () => {
      counterDislike++;
      btnDislike.dataset.count = counterDislike;
      localStorage.setItem(`${this.id}:dislike`, counterDislike);

    });

  }

  get id () {
    return this.data.id;
  }
}
