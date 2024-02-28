const { getValidationSchema, onValidate } = require('../validations');
const { ApiError, errors } = require('../utils');
const { withTryCatch } = require('../wrappers');

module.exports = withTryCatch((req, res, next) => {
  const { validationSchema } = req;
  const schema = getValidationSchema(validationSchema);
  const { error } = onValidate(schema, req.body);
  if (error) {
    const reason = error && error.details && error.details.length
      ? error.details.map((item) => item.message)
      : {};
    throw new ApiError(errors.INVALID_REQUEST_PAYLOAD, {
      reason,
    });
  } else {
    next();
  }
});
