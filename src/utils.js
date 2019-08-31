import cryptoRandomString from 'crypto-random-string';

const Numbers = '0123456789';

const Symbols = '!@~#$%&*^?';

const Chars = 'qwertyuiopasdfghjklzxcvbnm';
const UpperCaseChars = Chars.toUpperCase();

export const getPwd = (length = 4, { letter, number, symbol, uppercase, excludeSimilar }) => {
  let characters = `${number ? Numbers : ''}${symbol ? Symbols : ''}${letter ? Chars : ''}${
    letter && uppercase ? UpperCaseChars : ''
  }`;
  if (excludeSimilar) {
    characters = characters.replace(/(0|o|i|l|L|O|1|I)/g, '');
  }
  return cryptoRandomString({ length, characters });
};
// export { getPwd };
