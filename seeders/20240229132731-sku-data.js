/* eslint-disable no-await-in-loop */
const skuData = require('../sku.json');

const getSkuKey = (payload) => `sku-${payload.location_id}-${payload.department_id}-${payload.category_id}-${payload.sub_category_idc}-${payload.product_name}-${payload.product_color}`;

module.exports = {
  async up(queryInterface) {
    try {
      const getLocationId = async (name) => {
        const query = `SELECT id FROM locations WHERE name = '${name}'`;
        const result = await queryInterface.sequelize.query(query, {
          type: queryInterface.sequelize.QueryTypes.SELECT,
        });
        return result[0]?.id;
      };

      const getDepartmentId = async (name, locationId) => {
        const query = `SELECT id FROM departments WHERE name = '${name}' AND location_id = '${locationId}'`;
        const result = await queryInterface.sequelize.query(
          query,
          {
            type: queryInterface.sequelize.QueryTypes.SELECT,
          },
        );
        return result[0]?.id;
      };

      const getCategoryId = async (name, departmentId) => {
        const result = await queryInterface.sequelize.query(
          `SELECT id FROM categories WHERE name = '${name}' AND department_id = '${departmentId}'`,
          {
            type: queryInterface.sequelize.QueryTypes.SELECT,
          },
        );
        return result[0]?.id;
      };

      const getSubCategoryId = async (name, categoryId) => {
        const query = `SELECT id FROM sub_categories WHERE name = '${name}' AND category_id = '${categoryId}'`;
        const result = await queryInterface.sequelize.query(
          query,
          {
            type: queryInterface.sequelize.QueryTypes.SELECT,
          },
        );
        return result[0]?.id;
      };

      // Insert data into SKU table
      // eslint-disable-next-line no-restricted-syntax
      for (const data of skuData) {
        const locationId = await getLocationId(data.LOCATION);
        const departmentId = locationId && await getDepartmentId(data.DEPARTMENT, locationId);
        const categoryId = departmentId && await getCategoryId(data.CATEGORY, departmentId);
        const subCategoryId = categoryId && await getSubCategoryId(data.SUBCATEGORY, categoryId);

        if (locationId && departmentId && categoryId && subCategoryId) {
          const payload = {
            location_id: locationId,
            department_id: departmentId,
            category_id: categoryId,
            sub_category_id: subCategoryId,
            created_at: new Date(),
            updated_at: new Date(),
            product_name: 'Sample',
            product_color: `Sample+${new Date().getTime()}`,
          };

          await queryInterface.bulkInsert('skus', [
            {
              name: getSkuKey(payload),
              ...payload,
            },
          ]);
        }
      }
    } catch (error) {
      console.error('Error', error);
    }
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
