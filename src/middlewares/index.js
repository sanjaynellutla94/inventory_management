const {
  bodyParserHandler,
  corsHandler,
  securityHeadersHandler,
} = require('../libraries/appBuilder');

const internationalizationHandler = require('../libraries/internationalization');
const successResponseHandler = require('./successResponseHandler');
const errorResponseHandler = require('./errorResponseHandler');
const successLoggingHandler = require('./successLoggingHandler');
const errorLoggingHandler = require('./errorLoggingHandler');
const requestValidationHandler = require('./requestValidationHandler');
const authenticationHandler = require('./authenticationHandler');

module.exports = {
  errorResponseHandler,
  errorLoggingHandler,
  successResponseHandler,
  successLoggingHandler,
  bodyParserHandler,
  corsHandler,
  securityHeadersHandler,
  requestValidationHandler,
  authenticationHandler,
  internationalizationHandler,
};
