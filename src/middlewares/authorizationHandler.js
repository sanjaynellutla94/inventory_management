const { ApiError, errors } = require('../errors');
// const { authToken } = require('../utils');
const { withTryCatch } = require('../wrappers');

module.exports = withTryCatch((req, res, next) => {
  const { validRoles, user } = req;
  const { roles } = user;
  const hasRoles = roles.filter((item) => validRoles.includes(item.name));
  if (hasRoles && hasRoles.length) {
    next();
  } else {
    throw new ApiError(errors.ACCESS_DENIED);
  }
});
