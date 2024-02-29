const models = require('../models');

const create = async (payload) => {
  const category = await models.Category.create(payload);
  if (!category || !category.id) return null;
  return category.dataValues;
};

const getAll = () => models.Category.findAll({
  include: [
    {
      model: models.SubCategory,
      as: 'subCategories',
      attributes: ['id', 'name'],
    },
  ],
});

const getById = (id) => models.Category.findOne({
  where: { id },
});

const getByName = (name) => models.Category.findOne({
  where: { name },
});

const getByDepartmentId = (departmentId) => models.Category.findAll({
  where: { departmentId },
});

const getByLocationId = async (locationId) => {
  const categories = await models.Category.findAll({
    include: [
      {
        model: models.Department,
        as: 'department',
        include: [
          {
            model: models.Location,
            as: 'location',
            where: { id: locationId },
          },
        ],
      },
    ],
  });
  return categories;
};

const update = async (data) => {
  const [count] = await models.Category.update(data, {
    where: {
      id: data.id,
    },
  });
  if (!count) return null;
  const category = await models.Category.findOne({
    where: {
      id: data.id,
    },
  });
  return category.dataValues;
};

const remove = async (id) => {
  const count = await models.Category.destroy({
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
  getByName,
  getAll,
  update,
  remove,
  getByLocationId,
  getByDepartmentId,
};
