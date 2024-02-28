const {
  ApiError, errors, statusCodes, nextWithSuccess,
} = require('../utils');
const categoryService = require('../services/category.service');

const getAll = async (req, res, next) => {
  const { locationId, departmentId } = req.query;
  let categories = [];
  if (departmentId) {
    categories = await categoryService.getByDepartmentId(departmentId);
  } else if (locationId) {
    categories = await categoryService.getByLocationId(locationId);
  } else {
    categories = await categoryService.getAll();
  }
  const payload = {
    success: true,
    statusCode: statusCodes.OK,
    message: 'Successfully fetched categories data',
    data: categories || [],
  };
  nextWithSuccess({
    payload,
    res,
    next,
  });
};

const getById = async (req, res, next) => {
  const category = await categoryService.getById(req.params.id);
  if (category && category.id) {
    const payload = {
      success: true,
      statusCode: statusCodes.OK,
      message: 'Successfully fetched address data',
      data: category,
    };
    nextWithSuccess({
      payload,
      res,
      next,
    });
  } else {
    throw new ApiError(errors.CATEGORY_NOT_FOUND);
  }
};

const create = async (req, res, next) => {
  let category = null;
  category = await categoryService.getByName(req.body.name);
  if (category && category.id) {
    throw new ApiError(errors.CATEGORY_EXISTS);
  } else {
    category = await categoryService.create(req.body);
    const payload = {
      statusCode: statusCodes.CREATED,
      message: 'Successfully Created',
      data: category,
    };
    nextWithSuccess({
      payload,
      res,
      next,
    });
  }
};

const update = async (req, res, next) => {
  const category = await categoryService.update(req.body);
  const payload = {
    statusCode: statusCodes.OK,
    message: 'Updated successfully',
    data: category,
  };
  nextWithSuccess({
    payload,
    res,
    next,
  });
};

const remove = async (req, res, next) => {
  const category = await categoryService.remove(req.params.id);
  if (!category) {
    throw new ApiError(errors.CATEGORY_NOT_FOUND);
  }
  nextWithSuccess({
    payload: {
      statusCode: statusCodes.REMOVED,
      message: 'Category Deleted Successfully',
      data: category,
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
