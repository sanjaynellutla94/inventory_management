const { getRouter } = require('../libraries/appBuilder');
const urls = require('../config/urls');
const departmentValidationSchema = require('../validations/department');
const { requestValidationHandler } = require('../middlewares');
const { withTryCatch, withValidationSchema } = require('../wrappers');
const departmentController = require('../controllers/department.controller');

const router = getRouter();

router.route('/')
  .get(
    withTryCatch(departmentController.getAll),
  )
  .post(
    withValidationSchema(
      requestValidationHandler,
      departmentValidationSchema.create,
    ),
    withTryCatch(departmentController.create),
  )
  .put(
    withValidationSchema(
      requestValidationHandler,
      departmentValidationSchema.update,
    ),
    withTryCatch(departmentController.update),
  );

router.get(urls.location.byLocationId, withTryCatch(departmentController.getById))
  .delete(
    withTryCatch(departmentController.remove),
  );

module.exports = router;
