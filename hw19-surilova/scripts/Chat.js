class Chat {
  #stoppedWords;
  #buttonSubmit;

  constructor() {
    this.#stoppedWords = [
      'Ой, все',
      'Пока',
      'Отстань',
      'Помолчи',
      'До свиданья',
      'Гудбай',
      'Good Bye',
      'Bye',
    ];
    this.#buttonSubmit = document.createElement('button');
    this.#buttonSubmit.className = 'btn-submit';
    this.#buttonSubmit.innerHTML = 'Submit message';

    this.#buttonSubmit.addEventListener('click', () => {
      this.sendMessage();
    });
  }

  wait() {
    const randomNum = Math.random() * (3 - 1) + 1;
    console.log(randomNum * 1000);
    return new Promise((resolve) => setTimeout(resolve, randomNum * 1000));
  }

  async sendMessage() {
    const textareaValue = document.querySelector('.new-message-field').value;

      if (textareaValue.length > 0) {
        const userMess = new UserMessage();
        userMess.render();
        await this.wait();

        if (!this.isFarewell()) {
          const newMessBot = new BotAnswer();
          newMessBot.render();
        } else {
          console.log('farewell');
          try {
            const lastMess = document.querySelector('.new-bot-message:nth-last-of-type(2)').innerText;
            if (lastMess !== undefined && lastMess !== 'Good Bye!') {
              console.log(lastMess);
              const lastMessBot = new BotAnswer({text: 'Good Bye!'});
              lastMessBot.render();
            }
          } catch (err) {
            console.log('Общение с ботом было завершено, поэтому не удалось найти нужный элемент.');
          }
        }
      }
  }

  isFarewell() {
    const allMessages = document.querySelectorAll('.new-user-message');
    let resultSearch = false;
    this.#stoppedWords.forEach((word) => {
      allMessages.forEach((message) => {
        if (word.toLowerCase() === message.innerText.toLowerCase()) {
          resultSearch = true;
        }
      });
    });

    return resultSearch;
  }

  render() {
    const field = document.querySelector('.field-input');
    field.appendChild(this.#buttonSubmit);
  }
}
