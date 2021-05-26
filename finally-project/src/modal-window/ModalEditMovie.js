import {BaseComponent} from '../baseComponents';
import {ListMovies} from '../list-movies/ListMovies';

import html from './ModalEditMovie.html';
import {arrMovies} from '../card-movie/infMovies';
export class ModalEditMovie extends BaseComponent {
  #allFieldsForm;

  constructor(data) {
    super(html, data);
    this.data = data;
    this.#allFieldsForm = this._element.querySelectorAll('.form-control');
    this.#allFieldsForm.forEach(field => field.addEventListener('input', this.onInput.bind(this)));
  }

  saveRenderData() {
    const saveBtn = this._element.querySelector('.save-data');
    saveBtn.addEventListener('click', () => {
      $(this._element).modal('hide');
      const mainContent = document.querySelector('#content');
      mainContent.innerHTML = '';
      // console.log(arrMovies);
      const newList = new ListMovies(arrMovies);
      mainContent.appendChild(newList.render());
    });
  }

  onInput(event) {
    const value = event.target.value;
    const key = event.target.dataset.key;
    localStorage.setItem(`${this.data.id}:${key}`, value);
    const currentMovie = arrMovies.filter(item => {
      if (item.id === this.data.id) {
        return item;
      }
    })[0];
    currentMovie[key] = localStorage.getItem(`${this.data.id}:${key}`);
    this.saveRenderData();
  }

}
