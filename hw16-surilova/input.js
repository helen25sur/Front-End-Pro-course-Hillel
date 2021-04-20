class Input {
  #input;
  #label;

  constructor(props) {
    this.#input = document.createElement('input');
    this.#label = document.createElement('label');

    for (const newClass of props.inputClassNames) {
      if (newClass !== undefined) {
        this.#input.classList.add(newClass);
      }
    }
    for (const newClass of props.labelClassNames) {
      if (newClass !== undefined) {
        this.#label.classList.add(newClass);
      }
    }

    this.#input.placeholder = props?.placeholder ?? 'Placeholder';
    this.#input.id = props.id;
    this.#input.type = props?.type ?? 'text';

    this.#label.textContent = props?.labelText ?? 'label';
    this.#label.for = props.id;

  }

  render(classListContainer) {
    const container = document.createElement('div');
    for (const newClass of classListContainer) {
      if (newClass !== undefined) {
        container.classList.add(newClass);
      }
    }

    container.appendChild(this.#label);
    container.appendChild(this.#input);

    return container;
  }
}
