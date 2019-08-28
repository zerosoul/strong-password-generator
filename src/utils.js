import cryptoRandomString from 'crypto-random-string';

const Numbers = '0123456789';

const Symbols = '!@~#$%&*^?';

const Chars = 'qwertyuiopasdfghjklzxcvbnm';
const UpperCaseChars = Chars.toUpperCase();

export const getPwd = (length = 4, { letter, number, symbol, uppercase }) => {
  const characters = `${number ? Numbers : ''}${symbol ? Symbols : ''}${letter ? Chars : ''}${
    letter && uppercase ? UpperCaseChars : ''
  }`;

  return cryptoRandomString({ length, characters });
};
// export { getPwd };
