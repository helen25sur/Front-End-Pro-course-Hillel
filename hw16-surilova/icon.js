class Icon {
  #icon;

  constructor(text) {
    this.#icon = document.createElement('i');
    this.#icon.classList.add('material-icons');
    this.#icon.classList.add('right');

    this.#icon.textContent = text;
  }

  render() {
    return this.#icon;
  }
}
