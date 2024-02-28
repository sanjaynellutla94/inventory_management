const withTryCatch = require('./withTryCatch');

module.exports = (handler, validationSchema) => withTryCatch((req, res, next) => {
  req.validationSchema = validationSchema;
  if (handler) {
    handler(req, res, next);
  } else {
    throw new Error('Handler function in not passed');
  }
});
