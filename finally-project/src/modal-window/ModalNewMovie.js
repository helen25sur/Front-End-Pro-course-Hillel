import { v4 as uuidv4 } from 'uuid';
import {BaseComponent} from "../baseComponents";
import { CardMovie } from '../card-movie/CardMovie';

import {arrMovies} from './../card-movie/infMovies';
import html from './ModalNewMovie.html';

export class ModalNewMovie extends BaseComponent {
  #allFieldsForm;
  #saveBtn;
  // #id;

  constructor() {
    super(html, {});
    this.newMovie = {};
    this._id = uuidv4();
    console.log(this._id);
    this.#allFieldsForm = this._element.querySelectorAll('.form-control');
    this.#allFieldsForm.forEach(field => field.addEventListener('input', this.onInput.bind(this)));

    this.#saveBtn = this._element.querySelector('.save-data');
    this.#saveBtn.addEventListener('click', this.saveRenderData.bind(this));
  }

  saveRenderData() {
    $(this._element).modal('hide');

      this.newMovie.srcImg = 'https://placeimg.com/400/600/animals';
      this.newMovie.id = this._id;
      this.#allFieldsForm.forEach(field => {
        const key = field.dataset.key;
        this.newMovie[key] = localStorage.getItem(`${this._id}:${key}`);

      });
      console.log(this.newMovie);

      const listMovies = document.querySelector('.list-movies');
      arrMovies.push(this.newMovie);
      const newMovie = new CardMovie(this.newMovie);
      listMovies.appendChild(newMovie.render());
  }

  onInput(event) {
    const value = event.target.value;
    const key = event.target.dataset.key;
    localStorage.setItem(`${this._id}:${key}`, value);
    // console.log(this.id);
    // const newMovie = [];
    // if (localStorage.getItem(`${this._id}:srcImg`) === undefined) {
    // }

    // this.saveRenderData(this.newMovie);
  }

  // loadPicture(event) {
  //   const file = inputLoad.files[0];
  //   const reader = new FileReader();
  //   event.target.value = '';
  //   reader.onload = () => {
  //     img.src = reader.result;
  //   };
  //   reader.readAsDataURL(file);
  //   drawCanvas(img);
  //   addActiveClassBtn(btnLoad);
  // }
}
