const { getRouter } = require('../libraries/appBuilder');
const urls = require('../config/urls');
const locationValidationSchema = require('../validations/location');
const { requestValidationHandler } = require('../middlewares');
const { withTryCatch, withValidationSchema } = require('../wrappers');
const locationController = require('../controllers/location.controller');

const router = getRouter();

router.route('/')
  .get(
    withTryCatch(locationController.getAll),
  )
  .post(
    withValidationSchema(
      requestValidationHandler,
      locationValidationSchema.create,
    ),
    withTryCatch(locationController.create),
  )
  .put(
    withValidationSchema(
      requestValidationHandler,
      locationValidationSchema.update,
    ),
    withTryCatch(locationController.update),
  );

router.get(urls.location.byLocationId, withTryCatch(locationController.getById))
  .delete(
    withTryCatch(locationController.remove),
  );

module.exports = router;
