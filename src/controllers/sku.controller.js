const {
  ApiError, errors, statusCodes, nextWithSuccess,
} = require('../utils');
const skuService = require('../services/sku.service');

const getByMetadata = async (req, res, next) => {
  const {
    locationName, departmentName, categoryName, subCategoryName,
  } = req.query;
  if (locationName || departmentName || categoryName || subCategoryName) {
    const skus = await skuService.getByMetadata({
      locationName, departmentName, categoryName, subCategoryName,
    });
    const payload = {
      success: true,
      statusCode: statusCodes.OK,
      message: 'Successfully fetched locations data',
      data: skus || [],
    };
    nextWithSuccess({
      payload,
      res,
      next,
    });
  } else {
    throw new ApiError(errors.INVALID_REQUEST_PARAMS);
  }
};

const create = async (req, res, next) => {
  let sku = null;
  sku = await skuService.getByName(req.body.name);
  if (sku && sku.id) {
    throw new ApiError(errors.INVALID_REQUEST_PAYLOAD);
  } else {
    sku = await skuService.createWithSubCategory(req.body);
    const payload = {
      statusCode: statusCodes.CREATED,
      message: 'Successfully Created',
      data: sku,
    };
    nextWithSuccess({
      payload,
      res,
      next,
    });
  }
};

module.exports = {
  getByMetadata,
  create,
};
