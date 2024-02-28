const statusCodes = require('../constants/statusCodes');

const errors = {
  INVALID_REQUEST_PAYLOAD: 'INVALID_REQUEST_PAYLOAD',
  UNAUTHORIZED_ACCESS: 'UNAUTHORIZED_ACCESS',
  ACCESS_DENIED: 'ACCESS_DENIED',
  INTERNAL_SERVER_ERROR: 'SOMETHING_WENT_WRONG',
};

module.exports = {
  errors,
  data: {
    [errors.INVALID_REQUEST_PAYLOAD]: {
      message: 'Invalid Request payload',
      statusCode: statusCodes.BAD_REQUEST,
    },
    [errors.INVALID_REQUEST_PARAMS]: {
      message: 'Invalid Request params',
      statusCode: statusCodes.BAD_REQUEST,
    },
    [errors.UNAUTHORIZED_ACCESS]: {
      message: 'Un Authorized request',
      statusCode: statusCodes.UN_AUTHORIZE_ACCESS,
    },
    [errors.ACCESS_DENIED]: {
      message: 'Access Denied',
      statusCode: statusCodes.ACCESS_DENIED,
    },
    [errors.INTERNAL_SERVER_ERROR]: {
      message: 'Something went wrong',
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
    },
  },
};
