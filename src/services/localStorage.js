const KEY_TOKEN = '@front-next/token';

export function localStorageSetToken(token) {
  localStorage.setItem(KEY_TOKEN, token);
}

export function localStorageGetToken() {
  return localStorage.getItem(KEY_TOKEN);
}