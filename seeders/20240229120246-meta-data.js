const _ = require('lodash');
const metaData = require('../meta-data.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    try {
      const rawLocations = metaData.data.map((item) => (
        {
          id: 0, created_at: new Date(), updated_at: new Date(), name: item.Location,
        }
      ));
      const uniqueRawLocations = _.uniqBy(rawLocations, (item) => item.name);
      await queryInterface.bulkInsert('locations', uniqueRawLocations);
      const [locations] = await queryInterface.sequelize.query('SELECT * FROM locations');

      const rawDepartments = metaData.data.map((item) => {
        const { id } = locations.find((location) => location.name === item.Location);
        return {
          id: 0,
          created_at: new Date(),
          updated_at: new Date(),
          name: item.Department,
          location_id: id,
        };
      });
      const uniqueRawDepartments = _.uniqBy(rawDepartments, (item) => item.name);
      await queryInterface.bulkInsert('departments', uniqueRawDepartments);
      const [departments] = await queryInterface.sequelize.query('SELECT * FROM departments');

      const rawCategories = metaData.data.map((item) => {
        const { id } = departments.find((department) => department.name === item.Department);
        return {
          id: 0,
          created_at: new Date(),
          updated_at: new Date(),
          name: item.Category,
          department_id: id,
        };
      });
      const uniqueRawCategories = _.uniqBy(rawCategories, (item) => item.name);
      await queryInterface.bulkInsert('categories', uniqueRawCategories, { returning: true });
      const [categories] = await queryInterface.sequelize.query('SELECT * FROM categories');

      const rawSubCategories = metaData.data.map((item) => {
        const { id } = categories.find((category) => category.name === item.Category);
        return {
          id: 0,
          created_at: new Date(),
          updated_at: new Date(),
          name: item.SubCategory,
          category_id: id,
        };
      });
      const uniqueRawSubCategories = _.uniqBy(rawSubCategories, (item) => item.name);
      await queryInterface.bulkInsert('sub_categories', uniqueRawSubCategories, { returning: true });
    } catch (error) {
      console.error('Error in seed file:', error);
    }

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
