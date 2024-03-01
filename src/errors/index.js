const category = require('./category');
const subCategory = require('./subCategory');
const sku = require('./sku');
const department = require('./department');
const location = require('./location');
const common = require('./common');

const errors = {
  ...category.errors,
  ...department.errors,
  ...location.errors,
  ...common.errors,
  ...sku.errors,
  ...subCategory.errors,
};

const errorsData = {
  ...category.data,
  ...department.data,
  ...location.data,
  ...common.data,
  ...subCategory.data,
  ...sku.data,
};

const getDataByErrorName = (name) => errorsData[name || errors.INTERNAL_SERVER_ERROR];

class ApiError extends Error {
  constructor(errorName, options = {}) {
    const meta = getDataByErrorName(errorName);
    const message = options.message || meta.message;
    super(message);
    this.message = message;
    this.name = errorName;
    this.status = false;
    this.statusCode = options.statusCode || meta.statusCode;
    this.reason = options.reason || {};
  }
}

module.exports = {
  ApiError,
  errors,
  getDataByErrorName,
};
