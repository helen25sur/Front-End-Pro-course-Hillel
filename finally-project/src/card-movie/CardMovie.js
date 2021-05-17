import {BaseComponent} from '../baseComponents';
import {appHistory} from '../historyApp';

import html from './cardMovie.html';

export class CardMovie extends BaseComponent {
  constructor(data) {
    super(html, data);
  }
}
