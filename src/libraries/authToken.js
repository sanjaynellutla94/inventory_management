const jwt = require('jsonwebtoken');

const compose = (authSecret) => {
  const verifyToken = (token, cb) => jwt.verify(token, authSecret, cb);

  const getTokenData = async (authHeader) => {
    const token = authHeader.split(' ')[1];
    return jwt.verify(token, authSecret);
  };

  const signToken = (payload) => jwt.sign(payload, authSecret);

  return {
    getTokenData,
    signToken,
    verifyToken,
    getTokenByHeader: (token) => {
      if (!token) return null;
      const words = token.split(' ');
      if (words.length >= 1) {
        return words[1];
      }
      return null;
    },
  };
};

module.exports = compose;
