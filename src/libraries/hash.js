const bcrypt = require('bcrypt');

const compose = (saltRounds) => {
  const hashText = (text) => bcrypt.hash(text, saltRounds);

  const compareHash = (text, hash) => bcrypt.compare(text, hash);
  return {
    hashText,
    compareHash,
  };
};

module.exports = compose;
