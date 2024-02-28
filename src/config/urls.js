const BASE_URL = '/api/v1';
module.exports = {
  base: BASE_URL,
  location: {
    base: '/locations',
    byLocationId: '/:id',
  },
  departments: {
    base: '/departments',
    byDepartmentId: '/:id',
  },
  categories: {
    base: '/categories',
    byCategoryId: '/:id',
  },
  subCategories: {
    base: '/sub-categories',
    bySubCategoryId: '/:id',
  },
  sku: {
    base: '/sub-categories',
    byMetadata: '/metadata',
  },
};
