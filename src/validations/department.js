const Joi = require('joi');

module.exports = {
  create: {
    id: Joi.number(),
    name: Joi.string().required(),
    locationId: Joi.string().required(),
  },
  update: {
    id: Joi.number(),
  },
};
