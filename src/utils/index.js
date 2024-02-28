const authToken = require('./authToken');
const hash = require('../libraries/hash');
const logger = require('./logger');
const statusCodes = require('../constants/statusCodes');
const { errors, ApiError } = require('../errors');

module.exports = {
  authToken,
  hash,
  logger,
  statusCodes,
  ApiError,
  errors,
  nextWithSuccess: ({ payload, res, next }) => {
    res.payload = payload;
    next();
  },
  nextWithError: ({ error, next }) => {
    next(error);
  },
  getErrorResponse: (error, req) => {
    const defaultMessage = 'Something went wrong';
    /*
    Using error types/identifiers we can get error messages from different
    languages
    */
    const localeMessage = req.__(`errors.${errors.INTERNAL_SERVER_ERROR}`); //eslint-disable-line
    let errorResponse = {
      name: errors.INTERNAL_SERVER_ERROR,
      message: localeMessage || defaultMessage,
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
    };
    const hasApiError = error && error.statusCode;

    if (hasApiError) {
      const name = error.name || errors.INTERNAL_SERVER_ERROR;
      const message = error.message || defaultMessage;
      const localeMessage = req.__(`errors.${name}`); //eslint-disable-line
      const statusCode = error.statusCode || statusCodes.INTERNAL_SERVER_ERROR;
      errorResponse = {
        name,
        message: localeMessage || message,
        statusCode,
        reason: error?.reason,
      };
    }
    return errorResponse;
  },
  logSuccess: (payload) => {
    logger.info({
      ...payload,
    });
  },
  logError: (error, req = {}) => {
    const logPayload = {
      ...(error || {}),
      requestId: req.id,
      userId: req.userId,
      clientId: req.clientId,
      userAgent: req.userAgent,
      statusCode: error?.statusCode || statusCodes.INTERNAL_SERVER_ERROR,
    };
    logger.error(logPayload);
  },
};
