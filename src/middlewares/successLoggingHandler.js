const util = require('../utils');

// eslint-disable-next-line no-unused-vars
module.exports = (app) => app.use((req, res, next) => {
  const { payload } = res;
  util.logSuccess(payload);
  next();
});
