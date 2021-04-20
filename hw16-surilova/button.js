class Button {
  #button;
  #icon;

  constructor(props, textIcon) {
    this.#button = document.createElement('button');
    this.#icon = new Icon(textIcon);

    for (const newClass of props.classNames) {
      if (newClass !== undefined) {
        this.#button.classList.add(newClass);
      }
    }
    this.#button.type = props?.type ?? 'button';
    this.#button.textContent = props?.text ?? 'button';

  //   const onClick = props?.onClick;
  //   if (onClick !== undefined) {
  //     this.#button.addEventListener("click", onClick);
  // }
  }

  // onClick() {

  // }

  render() {
    this.#button.appendChild(this.#icon.render());
    return this.#button;
  }

}
