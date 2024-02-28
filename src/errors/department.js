const statusCodes = require('../constants/statusCodes');

const errors = {
  DEPARTMENT_EXISTS: 'DEPARTMENT_EXISTS',
  DEPARTMENT_NOT_FOUND: 'DEPARTMENT_NOT_FOUND',
};

module.exports = {
  errors,
  data: {
    [errors.DEPARTMENT_EXISTS]: {
      message: 'Department Already Exists',
      statusCode: statusCodes.BAD_REQUEST,
    },
    [errors.DEPARTMENT_NOT_FOUND]: {
      message: 'Department Not found',
      statusCode: statusCodes.NOT_FOUND,
    },
  },
};
