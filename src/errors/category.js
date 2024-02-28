const statusCodes = require('../constants/statusCodes');

const errors = {
  CATEGORY_EXISTS: 'CATEGORY_EXISTS',
  CATEGORY_NOT_FOUND: 'CATEGORY_NOT_FOUND',
};

module.exports = {
  errors,
  data: {
    [errors.CATEGORY_EXISTS]: {
      message: 'Category Already Exists',
      statusCode: statusCodes.BAD_REQUEST,
    },
    [errors.CATEGORY_NOT_FOUND]: {
      message: 'Category Not found',
      statusCode: statusCodes.NOT_FOUND,
    },
  },
};
