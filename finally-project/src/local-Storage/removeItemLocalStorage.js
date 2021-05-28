export function removeItemLocalStorage(idMovie) {
  for (let i = 0; i < localStorage.length; i++) {
    const keyStorage = localStorage.key(i);
    const id = keyStorage.match(/[a-f0-9]{8}-?[a-f0-9]{4}-?[1-5][a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/i)[0];
    if (id === idMovie) {
      console.log(id);
      localStorage.removeItem(keyStorage);
    }
  }
}
