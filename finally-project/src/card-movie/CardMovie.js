import {BaseComponent} from '../baseComponents';
// import {appHistory} from '../historyApp';

import html from './cardMovie.html';


export class CardMovie extends BaseComponent {
  constructor(data) {
    super(html, data);
    this.data = data;
    // this.addBtns();
  }

  static deleteCard() {
    // this.deleteCard();
    // this.#deleteBtn = document.querySelector('.btn-delete');
    // this.#deleteBtn.addEventListener('click', this.deleteCard);
    // console.log(this.#deleteBtn);

    // if (confirm(`Удалить  "${this.data.title}"?`)) {
    //   console.log('delete');
    // }
  }


}
