const statusCodes = require('../constants/statusCodes');

const errors = {
  SKU_EXISTS: 'SKU_EXISTS',
  SKU_NOT_FOUND: 'SKU_NOT_FOUND',
};

module.exports = {
  errors,
  data: {
    [errors.SKU_EXISTS]: {
      message: 'Sku Already Exists',
      statusCode: statusCodes.BAD_REQUEST,
    },
    [errors.SKU_NOT_FOUND]: {
      message: 'Sku Not found',
      statusCode: statusCodes.NOT_FOUND,
    },
  },
};
