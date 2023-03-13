/* eslint-disable no-bitwise */
export const API_DEV = 'http://localhost:3000';
export const API_PROD = 'https://my-json-server.typicode.com/josemacruz/inditex-app';

export const getHash = (string) => {
  let hash = 0;
  const str = string.toString();
  str.split('').forEach((char, i) => {
    const character = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + character;
    hash &= hash;
  });
  return hash;
};

export const handleKeyDown = (event, action) => {
  if (event.keyCode === 13) {
    action();
  }
};
