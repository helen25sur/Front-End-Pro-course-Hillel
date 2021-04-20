class List {
  #list;

  constructor(className) {
    this.#list = document.createElement('ul');
    this.#list.className = className;
  }

  render() {
    const container = document.createElement('div');
    container.className = 'row';

    const colContainer = document.createElement('div');
    colContainer.classList.add('col');
    colContainer.classList.add('s12');


    colContainer.appendChild(this.#list);

    container.appendChild(colContainer);

    return container;
  }
}
