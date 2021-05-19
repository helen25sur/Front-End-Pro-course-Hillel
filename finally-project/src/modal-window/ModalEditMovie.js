import {BaseComponent} from '../baseComponents';

import html from './ModalEditMovie.html';
import {arrMovies} from '../card-movie/infMovies';

export class ModalEditMovie extends BaseComponent {
  #allFieldsForm;

  constructor(data) {
    super(html, data);
    this.data = data;
    this.#allFieldsForm = this._element.querySelectorAll('.form-control');
    // console.log(this.#allFieldsForm);
    this.#allFieldsForm.forEach(field => field.addEventListener('input', this.onInput.bind(this)));
  }

  onInput(event) {
    const value = event.target.value;
    const key = event.target.dataset.key;
    // console.log(key);
    arrMovies[0][key] = value;
    // console.log(arrMovies[0]);

  }
}
