class List {
  #list;

  constructor(props) {
    this.#list = document.createElement('ul');
    this.#list.className = props?.className ?? '';
  }

  render() {
    return this.#list;
  }
}
