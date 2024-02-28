const { getRouter } = require('../libraries/appBuilder');
const urls = require('../config/urls');
const categoryValidationSchema = require('../validations/category');
const { requestValidationHandler } = require('../middlewares');
const { withTryCatch, withValidationSchema } = require('../wrappers');
const categoryController = require('../controllers/category.controller');

const router = getRouter();

router.route('/')
  .get(
    withTryCatch(categoryController.getAll),
  )
  .post(
    withValidationSchema(
      requestValidationHandler,
      categoryValidationSchema.create,
    ),
    withTryCatch(categoryController.create),
  )
  .put(
    withValidationSchema(
      requestValidationHandler,
      categoryValidationSchema.update,
    ),
    withTryCatch(categoryController.update),
  );

router.get(urls.location.byLocationId, withTryCatch(categoryController.getById))
  .delete(
    withTryCatch(categoryController.remove),
  );

module.exports = router;
