export function getStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) || 'null');
}

export function setStorage(key: string, data: unknown) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function removeStorage(key: string) {
  localStorage.removeItem(key);
}
