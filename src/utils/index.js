/* eslint-disable no-bitwise */
const getHash = (string) => {
  let hash = 0;
  const str = string.toString();
  str.split('').forEach((char, i) => {
    const character = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + character;
    hash &= hash;
  });
  return hash;
};

export default getHash;
