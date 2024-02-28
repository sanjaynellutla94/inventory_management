const util = require('../utils');

// eslint-disable-next-line no-unused-vars
module.exports = (app) => app.use((err, req, res, next) => {
  const errorPayload = util.getErrorResponse(err, req);
  res.status(errorPayload.statusCode);
  res.send(errorPayload);
});
