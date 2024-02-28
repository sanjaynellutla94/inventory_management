const util = require('../utils');

// eslint-disable-next-line no-unused-vars
module.exports = (app) => app.use((err, req, res, next) => {
  util.logError(err, req);
  next(err);
});
