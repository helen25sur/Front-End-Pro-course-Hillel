import {BaseComponent} from '../../baseComponents';
import html from './optionalField.html';

export class OptionalField extends BaseComponent {
  #fieldProfession;
  #fieldName;

  constructor(id) {
    super(html);

    this.id = id;

    this.#fieldProfession = this._element.querySelector('.optional-profession');
    this.#fieldName = this._element.querySelector('.optional-name');

    this.#fieldProfession.addEventListener('input', this.onInput.bind(this));
    this.#fieldName.addEventListener('input', this.onInput.bind(this));

    this.#fieldName.addEventListener('focusout', () => {
      localStorage.setItem(`${this.id}:${this.#fieldProfession.value}`, `optional-${this.#fieldName.value}`);
    });
  }

  onInput() {
    const profession = this.#fieldProfession.value;
    const name = this.#fieldName.value;

    console.log(profession, name);
  }
}
