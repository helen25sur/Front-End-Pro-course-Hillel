class ListItem {
  #listItem;
  #span;
  #btnEdit;
  #btnDelete;
  #storageKey;
  #value;

  constructor(props) {
    this.#listItem = document.createElement('li');
    this.#listItem.className = props?.className ?? '';
    this.#span = document.createElement('span');
    this.#span.innerText = props?.value ?? 'Ivan Ivanov';
    this.#span.className = 'username-span';

    this.#value = this.#span.innerText;

    this.#btnEdit = new Button({
      className: 'btn-edit',
      type: 'button',
      text: 'Редактировать'
    });
    this.#btnDelete = new Button({
      className: 'btn-delete',
      type: 'button',
      text: 'Удалить'
    });

    this.#storageKey = `user-name-data-${this.#value}`;
  }

  saveData() {
    localStorage.setItem(this.#storageKey, this.#value);
  }

  loadData() {
    return localStorage.getItem(this.#storageKey);
  }
  
  render() {
    this.#listItem.appendChild(this.#span);
    this.#listItem.appendChild(this.#btnEdit.render());
    this.#listItem.appendChild(this.#btnDelete.render());

    return this.#listItem;
  }
}
