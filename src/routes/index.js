const locationRouter = require('./location.route');
const departmentRouter = require('./department.route');
const categoryRouter = require('./category.route');
const subCategoryRouter = require('./subCategory.route');
const skuRouter = require('./sku.route');

const urls = require('../config/urls');
const { authenticationHandler } = require('../middlewares');

const routes = [
  {
    key: 'location',
    url: urls.location.base,
    isPublic: false,
    handlers: [authenticationHandler, locationRouter],
  },
  {
    key: 'department',
    url: urls.departments.base,
    isPublic: false,
    handlers: [authenticationHandler, departmentRouter],
  },
  {
    key: 'category',
    url: urls.categories.base,
    isPublic: false,
    handlers: [authenticationHandler, categoryRouter],
  },
  {
    key: 'subCategory',
    url: urls.subCategories.base,
    isPublic: false,
    handlers: [authenticationHandler, subCategoryRouter],
  },
  {
    key: 'sku',
    url: urls.sku.base,
    isPublic: false,
    handlers: [authenticationHandler, skuRouter],
  },
];

const initRouter = (app) => {
  routes.forEach((item) => {
    app.use(`${urls.base}${item.url}`, ...item.handlers);
  });
};

module.exports = initRouter;
