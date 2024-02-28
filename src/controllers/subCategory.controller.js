const {
  ApiError, errors, statusCodes, nextWithSuccess,
} = require('../utils');
const subCategoryService = require('../services/subCategory.service');

const getAll = async (req, res, next) => {
  const { locationId, departmentId, categoryId } = req.query;
  let subCategories = [];
  if (categoryId) {
    subCategories = await subCategoryService.getByCategoryId(departmentId);
  } else if (departmentId) {
    subCategories = await subCategoryService.getByDepartmentId(departmentId);
  } else if (locationId) {
    subCategories = await subCategoryService.getByLocationId(locationId);
  } else {
    subCategories = await subCategoryService.getAll();
  }
  const payload = {
    success: true,
    statusCode: statusCodes.OK,
    message: 'Successfully fetched subCategories data',
    data: subCategories || [],
  };
  nextWithSuccess({
    payload,
    res,
    next,
  });
};

const getById = async (req, res, next) => {
  const subCategory = await subCategoryService.getById(req.params.id);
  if (subCategory && subCategory.id) {
    const payload = {
      success: true,
      statusCode: statusCodes.OK,
      message: 'Successfully fetched sub categories data',
      data: subCategory,
    };
    nextWithSuccess({
      payload,
      res,
      next,
    });
  } else {
    throw new ApiError(errors.SUB_CATEGORY_NOT_FOUND);
  }
};

const create = async (req, res, next) => {
  let subCategory = null;
  subCategory = await subCategoryService.getByName(req.body.name);
  if (subCategory && subCategory.id) {
    throw new ApiError(errors.SUB_CATEGORY_EXISTS);
  } else {
    subCategory = await subCategoryService.create(req.body);
    const payload = {
      statusCode: statusCodes.CREATED,
      message: 'Successfully Created',
      data: subCategory,
    };
    nextWithSuccess({
      payload,
      res,
      next,
    });
  }
};

const update = async (req, res, next) => {
  const subCategory = await subCategoryService.update(req.body);
  const payload = {
    statusCode: statusCodes.OK,
    message: 'Updated successfully',
    data: subCategory,
  };
  nextWithSuccess({
    payload,
    res,
    next,
  });
};

const remove = async (req, res, next) => {
  const subCategory = await subCategoryService.remove(req.params.id);
  if (!subCategory) {
    throw new ApiError(errors.SUB_CATEGORY_NOT_FOUND);
  }
  nextWithSuccess({
    payload: {
      statusCode: statusCodes.REMOVED,
      message: 'Sub Category Deleted Successfully',
      data: subCategory,
    },
    res,
    next,
  });
};

module.exports = {
  getAll,
  getById,
  remove,
  create,
  update,
};
