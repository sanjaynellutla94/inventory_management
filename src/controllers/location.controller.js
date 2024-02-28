const {
  ApiError, errors, statusCodes, nextWithSuccess,
} = require('../utils');
const locationService = require('../services/location.service');

const getAll = async (req, res, next) => {
  const locations = await locationService.getAll();
  const payload = {
    success: true,
    statusCode: statusCodes.OK,
    message: 'Successfully fetched locations data',
    data: locations || [],
  };
  nextWithSuccess({
    payload,
    res,
    next,
  });
};

const getById = async (req, res, next) => {
  const location = await locationService.getById(req.params.id);
  if (location && location.id) {
    const payload = {
      success: true,
      statusCode: statusCodes.OK,
      message: 'Successfully fetched address data',
      data: location,
    };
    nextWithSuccess({
      payload,
      res,
      next,
    });
  } else {
    throw new ApiError(errors.LOCATION_NOT_FOUND);
  }
};

const create = async (req, res, next) => {
  let location = null;
  location = await locationService.getByName(req.body.name);
  if (location && location.id) {
    throw new ApiError(errors.LOCATION_EXISTS);
  } else {
    location = await locationService.create(req.body);
    const payload = {
      statusCode: statusCodes.CREATED,
      message: 'Successfully Created',
      data: location,
    };
    nextWithSuccess({
      payload,
      res,
      next,
    });
  }
};

const update = async (req, res, next) => {
  const location = await locationService.update(req.body);
  const payload = {
    statusCode: statusCodes.OK,
    message: 'Updated successfully',
    data: location,
  };
  nextWithSuccess({
    payload,
    res,
    next,
  });
};

const remove = async (req, res, next) => {
  const location = await locationService.remove(req.params.id);
  if (!location) {
    throw new ApiError(errors.LOCATION_NOT_FOUND);
  }
  nextWithSuccess({
    payload: {
      statusCode: statusCodes.REMOVED,
      message: 'Location Deleted Successfully',
      data: location,
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
