import {BaseComponent} from '../baseComponents';
import {ListMovies} from '../list-movies/ListMovies';

import html from './ModalEditMovie.html';
import {arrMovies} from '../card-movie/infMovies';
import {validationForm} from '../validation/validation';
import {readLocalStorage} from '../local-Storage/readLocalStorage';
export class ModalEditMovie extends BaseComponent {
  #allFieldsForm;
  #form;
  #loadPosterInput;

  constructor(data) {
    super(html, data);
    this.data = data;
    this.#allFieldsForm = this._element.querySelectorAll('.form-control');
    this.#form = this._element.querySelector('#modal-window');
    this.#form.addEventListener('submit', this.saveRenderData.bind(this));

    this.#allFieldsForm.forEach((field) => field.addEventListener('input', this.onInput.bind(this)));
    this.#allFieldsForm.forEach((field) => field.addEventListener('blur', validationForm));

    this.#loadPosterInput = this._element.querySelector('.custom-file-input');
    this.#loadPosterInput.addEventListener('change', this.loadPicture.bind(this));
  }

  saveRenderData(event) {
    event.preventDefault();
    $(this._element).modal('hide');
    const mainContent = document.querySelector('#content');
    mainContent.innerHTML = '';

    const newList = new ListMovies(readLocalStorage(arrMovies));
    mainContent.appendChild(newList.render());
  }

  onInput(event) {
    const value = event.target.value;
    const key = event.target.dataset.key;
    localStorage.setItem(`${this.data.id}:${key}`, value);
    const currentMovie = arrMovies.filter((item) => {
      if (item.id === this.data.id) {
        return item;
      }
    })[0];
    // if (key === 'cast') {
    //   currentMovie.cast = localStorage.getItem(`${this.data.id}:cast`).split(',');
    // } else {
    //   currentMovie[key] = localStorage.getItem(`${this.data.id}:${key}`);
    // }
  }

  loadPicture() {
    const file = this.#loadPosterInput.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();
      this.data.srcImg = reader.result;
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
}
