const models = require('../models');

const create = async (payload) => {
  const subCategory = await models.SubCategory.create(payload);
  if (!subCategory || !subCategory.id) return null;
  return subCategory.dataValues;
};

const getAll = () => models.SubCategory.findAll();

const getById = (id) => models.SubCategory.findOne({
  where: { id },
});

const getByCategoryId = (categoryId) => models.SubCategory.findOne({
  where: { categoryId },
});

const getByDepartmentId = async (locationId) => {
  const categories = await models.SubCategory.findAll({
    include: [
      {
        model: models.Category,
        include: [
          {
            model: models.Department,
            where: { id: locationId },
          },
        ],
      },
    ],
  });
  return categories;
};

const getByLocationId = async (locationId) => {
  const subcategories = await models.Subcategory.findAll({
    include: [
      {
        model: models.Category,
        include: [
          {
            model: models.Department,
            include: [
              {
                model: models.Location,
                where: { id: locationId },
              },
            ],
          },
        ],
      },
    ],
  });
  return subcategories;
};

const update = async (data) => {
  const [count] = await models.SubCategory.update(data, {
    where: {
      id: data.id,
    },
  });
  if (!count) return null;
  const category = await models.SubCategory.findOne({
    where: {
      id: data.id,
    },
  });
  return category.dataValues;
};

const remove = async (id) => {
  const count = await models.SubCategory.destroy({
    where: {
      id,
    },
  });
  if (!count) return null;
  return count;
};

module.exports = {
  create,
  getById,
  getAll,
  update,
  remove,
  getByLocationId,
  getByDepartmentId,
  getByCategoryId,
};
