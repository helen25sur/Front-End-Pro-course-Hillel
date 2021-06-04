import {v4 as uuidv4} from 'uuid';
import {BaseComponent} from '../baseComponents';
import {CardMovie} from '../card-movie/CardMovie';
import {appHistory} from '../historyApp';

import {arrMovies} from './../card-movie/infMovies';
import html from './ModalNewMovie.html';
import {validationForm} from '../validation/validation';
import {OptionalField} from './optional-field/OptionalField';

export class ModalNewMovie extends BaseComponent {
  #allFieldsForm;
  #loadPosterInput;
  #form;
  #btnAddNewField;

  constructor() {
    super(html, {});
    this.newMovie = {};
    this._id = uuidv4();

    this.#allFieldsForm = this._element.querySelectorAll('.form-control');
    this.#allFieldsForm.forEach((field) => field.addEventListener('input', this.onInput.bind(this)));
    this.#allFieldsForm.forEach((field) => field.addEventListener('blur', validationForm));

    this.#form = this._element.querySelector('#modal-window');
    this.#form.addEventListener('submit', this.saveRenderData.bind(this));

    this.#btnAddNewField = this._element.querySelector('.btn-add-field');
    this.#btnAddNewField.addEventListener('click', this.addNewField.bind(this));

    // this.#loadPosterInput = this._element.querySelector('.custom-file-input');
    // this.#loadPosterInput.addEventListener('change', this.loadPicture.bind(this));
  }

  saveRenderData(event) {
    appHistory.push({hash: '#list'});
    event.preventDefault();
    $(this._element).modal('hide');
    this.newMovie.id = this._id;
    // this.#allFieldsForm.forEach(field => {
    //   const key = field.dataset.key;
    //   if (key === 'cast') {
    //     this.newMovie.cast = localStorage.getItem(`${this._id}:cast`).split(',');
    //   } else {
    //     this.newMovie[key] = localStorage.getItem(`${this._id}:${key}`);
    //   }
    // });
    // arrMovies.push(this.newMovie);

    // const listMovies = document.querySelector('.list-movies');
    // const newMovie = new CardMovie(this.newMovie);
    // listMovies.appendChild(newMovie.render());
  }

  onInput(event) {
    const value = event.target.value;
    const key = event.target.dataset.key;
    localStorage.setItem(`${this._id}:${key}`, value);
  }

  loadPicture() {
    const file = this.#loadPosterInput.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();
      this.newMovie.srcImg = reader.result;
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  addNewField() {
    // <fieldset class="form-group">
    const fieldset = this._element.querySelector('fieldset.form-group');

    const containerField = document.createElement('div');
    containerField.classList.add('form-group');
    containerField.classList.add('row');

    const newField = new OptionalField();
    containerField.append(newField.render());

    fieldset.appendChild(containerField);
  }
}
