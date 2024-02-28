const {
  ApiError, errors, statusCodes, nextWithSuccess,
} = require('../utils');
const departmentService = require('../services/department.service');

const getAll = async (req, res, next) => {
  const { locationId } = req.query;
  let departments = [];
  if (locationId) {
    departments = await departmentService.getByLocationId(locationId);
  } else {
    departments = await departmentService.getAll();
  }
  const payload = {
    success: true,
    statusCode: statusCodes.OK,
    message: 'Successfully fetched departments data',
    data: departments || [],
  };
  nextWithSuccess({
    payload,
    res,
    next,
  });
};

const getById = async (req, res, next) => {
  const department = await departmentService.getById(req.params.id);
  if (department && department.id) {
    const payload = {
      success: true,
      statusCode: statusCodes.OK,
      message: 'Successfully fetched address data',
      data: department,
    };
    nextWithSuccess({
      payload,
      res,
      next,
    });
  } else {
    throw new ApiError(errors.DEPARTMENT_NOT_FOUND);
  }
};

const create = async (req, res, next) => {
  let department = null;
  department = await departmentService.getByName(req.body.name);
  if (department && department.id) {
    throw new ApiError(errors.DEPARTMENT_EXISTS);
  } else {
    department = await departmentService.create(req.body);
    const payload = {
      statusCode: statusCodes.CREATED,
      message: 'Successfully Created',
      data: department,
    };
    nextWithSuccess({
      payload,
      res,
      next,
    });
  }
};

const update = async (req, res, next) => {
  const department = await departmentService.update(req.body);
  const payload = {
    statusCode: statusCodes.OK,
    message: 'Updated successfully',
    data: department,
  };
  nextWithSuccess({
    payload,
    res,
    next,
  });
};

const remove = async (req, res, next) => {
  const department = await departmentService.remove(req.params.id);
  if (!department) {
    throw new ApiError(errors.DEPARTMENT_NOT_FOUND);
  }
  nextWithSuccess({
    payload: {
      statusCode: statusCodes.REMOVED,
      message: 'Department Deleted Successfully',
      data: department,
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
