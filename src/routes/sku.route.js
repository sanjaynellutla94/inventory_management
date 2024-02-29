const { getRouter } = require('../libraries/appBuilder');
const urls = require('../config/urls');
const skuValidationSchema = require('../validations/sku'); // Corrected variable name
const { requestValidationHandler } = require('../middlewares');
const { withTryCatch, withValidationSchema } = require('../wrappers');
const skuController = require('../controllers/sku.controller');

const router = getRouter();

router.get(urls.sku.byMetadata, withTryCatch(skuController.getByMetadata));

router.route('/')
  .post(
    withValidationSchema(
      requestValidationHandler,
      skuValidationSchema.create, // Corrected variable name
    ),
    withTryCatch(skuController.create),
  );

module.exports = router;
