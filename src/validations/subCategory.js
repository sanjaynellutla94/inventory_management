const Joi = require('joi');

module.exports = {
  create: {
    id: Joi.number(),
    name: Joi.string().required(),
    categoryId: Joi.number().required(),
  },
  update: {
    id: Joi.number(),
    name: Joi.string(),
    categoryId: Joi.number(),
  },
};
