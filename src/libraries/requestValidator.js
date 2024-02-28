const Joi = require('joi');

const compose = () => ({
  onValidate: (schema, body) => schema.validate(body),
  getValidationSchema: (schemaObject) => Joi.object(schemaObject),
});

module.exports = compose;
