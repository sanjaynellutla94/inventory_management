// const bcrypt = require('bcrypt');

const compose = () => {
  // saltRounds
  // const hashText = (text) => bcrypt.hash(text, saltRounds);

  const hashText = (text) => text;

  // const compareHash = (text, hash) => bcrypt.compare(text, hash);

  const compareHash = (text, hash) => (text === hash);

  return {
    hashText,
    compareHash,
  };
};

module.exports = compose;
