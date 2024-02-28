const Joi = require('joi');

module.exports = {
  create: {
    id: Joi.number(),
    name: Joi.string().required(),
    categoryId: Joi.string().required(),
  },
  update: {
    id: Joi.number(),
    name: Joi.string(),
    categoryId: Joi.string(),
  },
};
