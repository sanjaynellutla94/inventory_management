const composeAuthModule = require('../libraries/authToken');
const { authSecret } = require('../config/config');

module.exports = composeAuthModule(authSecret);
