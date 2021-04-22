class DataLoader {
  #url;
  #button;

  constructor(url) {
    this.#url = url;
    this.#button = document.body.querySelector('.btn-data');
  }

  load() {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.open("GET", this.#url);

    // Не получилось доработать так, чтобы было видно изменения на кнопке
    // Если пыталась добавить эту функцию конкретно к наследующему классу PlanetsLoader, вообще никакой реакции
    // Ну а в devtools видно, что эта ф-ция дергает кнопку, но так как данный метод висит на родительском классе,
    // я не нашла подходящего способа для решения сложившейся ситуации

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        this.#button.innerText = 'GET DATA';
        this.#button.disabled = false;
      }
      if (xhr.readyState === XMLHttpRequest.LOADING) {
        this.#button.innerText = 'GETTING DATA';
        this.#button.disabled = true;
      }
    };

    xhr.onload = () => {
      if (xhr.status !== 200) {
        console.error(new Error(`Something went wrong! Status: ${xhr.status}`));
        return;
      }
      this.onLoad(xhr.response);

    };

    xhr.onerror = function () {
      console.error(new Error(`Something went wrong!`));
    };

    xhr.send();
  }

  onLoad(data) {
    console.log("DataLoader.onLoad", data);
    this.render(data.count);
    // throw new Error("Not implemented");
  }

  render(data) {
    document.querySelector('.count').innerText = data; // попытка сохранить колличество планет
  }
}

class PlanetsLoader extends DataLoader {
  constructor(index) {
    super(`https://swapi.dev/api/planets/${index}`);
  }

  onLoad(data) {
    console.log("PlanetsLoader.onLoad", data);

    const linksPersons = data.residents; // массив со ссылками на персонажей

    for (let i = 0; i < linksPersons.length; i++) { // цикл для создания всех персонажей с заданной планеты
      const index = linksPersons[i].match(/[0-9]+/g);
      const resident = new ResidentsLoader(index);
      resident.load();
    }

    this.render(data.name);

  }

  render(data) {
    const name = document.querySelector('.name-planet');
    name.innerText = data;
  }
}

class ResidentsLoader extends DataLoader {
  constructor(index) {
    super(`https://swapi.dev/api/people/${index}`);

  }

  onLoad(data) {
    console.log("ResidentsLoader.onLoad", data);
    this.render(data.name);

  }

  render(data) {
    const list = document.querySelector('.list-residents');
    const li = document.createElement('li');
    li.className = 'person';
    li.append(data);
    list.append(li);
  }
}
