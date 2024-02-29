const { ApiError, errors } = require('../errors');
const { withTryCatch } = require('../wrappers');

// Logic to validated generated secret keys or auth keys
const validateSecretKey = () => true;

module.exports = withTryCatch((req, res, next) => {
  const secret = req.headers.authorization;
  if (secret) {
    const isResolved = validateSecretKey(secret);
    if (isResolved) {
      next();
    } else {
      throw new ApiError(errors.ACCESS_DENIED);
    }
  } else {
    throw new ApiError(errors.UNAUTHORIZED_ACCESS);
  }
});
