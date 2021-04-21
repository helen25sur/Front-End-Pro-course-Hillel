class Form {
  #form;

  constructor(props) {
    this.#form = document.createElement('form');
    this.#form.className = props?.className ?? '';
  }

  render() {
    return this.#form;
  }
}
