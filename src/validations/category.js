const Joi = require('joi');

module.exports = {
  create: {
    id: Joi.number(),
    name: Joi.string().required(),
    departmentId: Joi.string().required(),
  },
  update: {
    id: Joi.number(),
    name: Joi.string(),
    departmentId: Joi.string(),
  },
};
