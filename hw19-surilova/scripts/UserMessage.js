class UserMessage {
  #userMessage;
  #textArea;

  constructor() {
    this.#textArea = document.querySelector('.new-message-field');
    this.#userMessage = this.saveUserMessage();
  }

  saveUserMessage() {
    if (this.#textArea.value !== undefined) {
      this.#userMessage = this.#textArea.value;
      this.#textArea.value = '';
      return this.#userMessage;
    }
  }

  render() {
    const containerMessages = document.querySelector('.all-messages');
    const newMessUser = document.createElement('p');
    newMessUser.className = 'new-user-message';
    newMessUser.innerText = this.#userMessage;
    containerMessages.append(newMessUser);
    const message = document.querySelector('p:last-of-type');
    message.scrollIntoView({block: "start", behavior: "smooth"});
  }
}
