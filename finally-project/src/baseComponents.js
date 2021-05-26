import template from 'lodash.template';
// import {defaultTo} from 'lodash.defaultto';
const emptyObj = { screenplay: '',  producer: '',  cameraman: '',  composer: '',  textDescription:  '',  textRange: '',};

function renderTemplate(html, data) {
  const tmpl = template(html, { 'imports': emptyObj });

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
