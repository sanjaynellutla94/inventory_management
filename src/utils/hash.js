const compseHashModule = require('../libraries/hash');

const saltRounds = 10;

module.exports = compseHashModule(saltRounds);
