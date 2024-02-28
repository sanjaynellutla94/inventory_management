const Joi = require('joi');

module.exports = {
  create: {
    id: Joi.number(),
    locationId: Joi.number().required(),
    departmentId: Joi.number().required(),
    categoryId: Joi.number().required(),
    subCategoryId: Joi.number().required(),
    productName: Joi.string().required(),
    productColor: Joi.string().required(),
  },
};
