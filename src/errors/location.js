const statusCodes = require('../constants/statusCodes');

const errors = {
  LOCATION_EXISTS: 'LOCATION_EXISTS',
  LOCATION_NOT_FOUND: 'LOCATION_NOT_FOUND',
};

module.exports = {
  errors,
  data: {
    [errors.LOCATION_EXISTS]: {
      message: 'Location Already Exists',
      statusCode: statusCodes.BAD_REQUEST,
    },
    [errors.LOCATION_NOT_FOUND]: {
      message: 'Location Not found',
      statusCode: statusCodes.NOT_FOUND,
    },
  },
};
