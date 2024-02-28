const statusCodes = require('../constants/statusCodes');

const errors = {
  SUB_CATEGORY_EXISTS: 'SUB_CATEGORY_EXISTS',
  SUB_CATEGORY_NOT_FOUND: 'SUB_CATEGORY_NOT_FOUND',
};

module.exports = {
  errors,
  data: {
    [errors.SUB_CATEGORY_EXISTS]: {
      message: 'Sub Category Already Exists',
      statusCode: statusCodes.BAD_REQUEST,
    },
    [errors.SUB_CATEGORY_NOT_FOUND]: {
      message: 'Sub Category Not found',
      statusCode: statusCodes.NOT_FOUND,
    },
  },
};
