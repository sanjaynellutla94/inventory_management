const { getRouter } = require('../libraries/appBuilder');
const urls = require('../config/urls');
const subCategoryValidationSchema = require('../validations/subCategory');
const { requestValidationHandler } = require('../middlewares');
const { withTryCatch, withValidationSchema } = require('../wrappers');
const subCategoryController = require('../controllers/subCategory.controller');

const router = getRouter();

router.route('/')
  .get(
    withTryCatch(subCategoryController.getAll),
  )
  .post(
    withValidationSchema(
      requestValidationHandler,
      subCategoryValidationSchema.create,
    ),
    withTryCatch(subCategoryController.create),
  )
  .put(
    withValidationSchema(
      requestValidationHandler,
      subCategoryValidationSchema.update,
    ),
    withTryCatch(subCategoryController.update),
  );

router.get(urls.location.byLocationId, withTryCatch(subCategoryController.getById))
  .delete(
    withTryCatch(subCategoryController.remove),
  );

module.exports = router;
