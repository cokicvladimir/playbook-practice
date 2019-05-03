class StorageService {
  constructor() {
    this.storage = window.localStorage;
  }

  get(key) {
    return this.storage.getItem(key);
  }

  set(key, value) {
    return this.storage.setItem(key, value);
  }

  remove(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  has(key) {
    const value = this.storage.getItem(key);
    return typeof value !== 'undefined' && value !== null;
  }
}

export default new StorageService();
