const { getRouter } = require('../libraries/appBuilder');
const urls = require('../config/urls');
const skuCalidationSchema = require('../validations/sku');
const { requestValidationHandler } = require('../middlewares');
const { withTryCatch, withValidationSchema } = require('../wrappers');
const skuController = require('../controllers/sku.controller');

const router = getRouter();

router.get(urls.sku.byMetadata, withTryCatch(skuController.getByMetadata));

router.route('/')
  .post(
    withValidationSchema(
      requestValidationHandler,
      skuCalidationSchema.create,
    ),
    withTryCatch(skuController.create),
  );

module.exports = router;
