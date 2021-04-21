class Input {
  #input;

  constructor(props) {
    this.#input = document.createElement('input');
    this.#input.className = props?.className ?? '';
    this.#input.placeholder = props?.placeholder ?? 'Placeholder';
    this.#input.id = props.id;
    this.#input.type = props?.type ?? 'text';
  }

  render() {
    return this.#input;
  }
}
