const withTryCatch = require('./withTryCatch');

module.exports = (handler, validRoles) => withTryCatch((req, res, next) => {
  req.validRoles = validRoles;
  if (handler) {
    handler(req, res, next);
  } else {
    throw new Error('Handler function in not passed');
  }
});
