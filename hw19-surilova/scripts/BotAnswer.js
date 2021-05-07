class BotAnswer {
  #message;

  constructor({ text } = {}) {
    if (text === undefined) {
      this.#message = this.getMessage();
    } else {
      this.#message = text;
    }

  }

  async getMessage() {
    const result = await fetch('https://api.quotable.io/random');
    const data = await result.json();
    const { content, author } = data;
    if (result.ok) {
      this.#message = `${content} \n ${author}`;
      return this.#message;
    } else {
      throw new Error('Error!');
    }
  }

  async render() {
    const containerMessages = document.querySelector('.all-messages');
    const newMess = document.createElement('p');
    newMess.className = 'new-bot-message';
    newMess.innerText = await this.#message;
    containerMessages.append(newMess);
    const message = document.querySelector('p:last-of-type');
    message.scrollIntoView({block: "start", behavior: "smooth"});
  }
}
