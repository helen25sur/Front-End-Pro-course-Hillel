import template from 'lodash.template';
// import {defaultTo} from 'lodash.defaultto';

function renderTemplate(html, data) {
  const tmpl = template(html);

  const string = tmpl(data);

  const container = document.createElement('div');
  container.innerHTML = string;

  return container.firstChild;
}

export class BaseComponent {
  constructor(html, data) {
    this._element = renderTemplate(html, data);
  }

  render() {
    return this._element;
  }
}
