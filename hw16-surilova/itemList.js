class ItemList {
  #itemList;
  #btnDelete;
  #btnEdit;
  #span;
  #storageKey;

  constructor(/*className, value*/ props) {
    this.#itemList = document.createElement('li');
    this.#itemList.className = props.className;

    this.#btnDelete = new Button({
      classNames: ['waves-effect', 'waves-light', 'red', 'lighten-2', 'btn-small', 'right', 'delete'],
      type: 'button',
      text: 'Удалить'
    },
    'delete');

    this.#btnEdit = new Button({
      classNames: ['waves-effect', 'waves-light', 'green', 'lighten-1', 'btn-small', 'right', 'edit'],
      type: 'button',
      text: 'Редактировать'
    },
    'edit');

    this.#span = document.createElement('span');
    this.#span.className = 'user-name';

    // if (value === null || value === "") {
      let value = props?.value ?? this.loadData();
    // }


    this.#span.textContent = value;

    this.#storageKey = `user-name-data-${value}`;

    this.saveData(value);
  }

  saveData(value) {
    localStorage.setItem(this.#storageKey, value);
  }

  loadData() {
    return localStorage.getItem(this.#storageKey);
  }

  render() {
    this.#itemList.appendChild(this.#span);
    this.#itemList.appendChild(this.#btnDelete.render());
    this.#itemList.appendChild(this.#btnEdit.render());


    return this.#itemList;
  }
}
