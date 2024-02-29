const Joi = require('joi');

module.exports = {
  create: {
    id: Joi.number(),
    name: Joi.string().required(),
    departmentId: Joi.number().required(),
  },
  update: {
    id: Joi.number(),
    name: Joi.string(),
    departmentId: Joi.number(),
  },
};
