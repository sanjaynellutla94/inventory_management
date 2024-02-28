const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

module.exports = {
  build: () => express(),
  bodyParserHandler: (app) => app.use(bodyParser.json()),
  corsHandler: (app) => app.use(cors()),
  securityHeadersHandler: (app) => app.use(helmet()),
  getRouter: () => express.Router(),
};
