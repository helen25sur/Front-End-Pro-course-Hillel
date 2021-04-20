class Form {
  #form;
  #input;
  #sendButton;
  // #listItem;
  // #list;
  // #index;

  constructor(className) {
    this.#form = document.createElement('form');
    this.#form.classList.add(className);

    this.#input = new Input ({
      inputClassNames: ['validate'],
      placeholder: 'Введите Ваше имя',
      id: 'full_name',
      type: 'text',
      labelClassNames: ['label', 'active'],
      labelText: 'Имя пользователя'
    });

    this.#sendButton = new Button({
      classNames: ['waves-effect', 'waves-light', 'btn', 'green', 'darken-3'],
      type: 'submit',
      text: 'Отправить',
      // onClick: () => this.onClick()
    },
    'send');

    // this.#listItem = new ItemList();
    // this.#list = new List('collection');
  }

  // onClick() {
  //   event.preventDefault();
  //   console.log('click');
  //   this.#listItem = new ItemList('collection-item', 'Harry Potter', 10);
  //   console.log(this.#listItem);
  //   this.#list.appendChild(this.#listItem.render());
  //   // this.#listItem.render();


  // }


  render() {
    const row = document.createElement('div');
    row.classList.add('row');
    row.classList.add('valign-wrapper');

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('col');
    btnContainer.classList.add('s3');
    btnContainer.appendChild(this.#sendButton.render());

    row.appendChild(this.#input.render(['input-field', 'col', 's9']));
    row.appendChild(btnContainer);

    this.#form.appendChild(row);

    return this.#form;

  }
}
