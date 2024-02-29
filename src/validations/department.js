const Joi = require('joi');

module.exports = {
  create: {
    id: Joi.number(),
    name: Joi.string().required(),
    locationId: Joi.number().required(),
  },
  update: {
    id: Joi.number(),
    name: Joi.string(),
    locationId: Joi.number(),
  },
};
