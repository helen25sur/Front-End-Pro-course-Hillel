class Button {
  #button;

  constructor(props) {
    this.#button = document.createElement('button');
    this.#button.className = props?.className ?? '';
    this.#button.type = props?.type ?? 'button';
    this.#button.innerText = props?.text ?? 'Button';
  }

  render() {
    return this.#button;
  }
}
