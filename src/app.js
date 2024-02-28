const { build } = require('./libraries/appBuilder');
const routerHandler = require('./routes');
const {
  errorLoggingHandler,
  errorResponseHandler,
  successLoggingHandler,
  successResponseHandler,
  bodyParserHandler,
  corsHandler,
  securityHeadersHandler,
  internationalizationHandler,
} = require('./middlewares');
const localesData = require('./locales');

module.exports = () => {
  const app = build();
  bodyParserHandler(app);
  securityHeadersHandler(app);
  corsHandler(app);
  internationalizationHandler(app, localesData);
  routerHandler(app);
  successLoggingHandler(app);
  successResponseHandler(app);
  // Error Handlers
  errorLoggingHandler(app);
  errorResponseHandler(app);
  return app;
};
