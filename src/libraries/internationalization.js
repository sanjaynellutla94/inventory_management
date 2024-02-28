const i18n = require('i18n');
const _ = require('lodash');

module.exports = (app, staticCatalog) => {
  i18n.configure({
    locales: _.keys(staticCatalog),
    staticCatalog,
    objectNotation: true,
    register: global,
  });

  app.use(i18n.init);
};
