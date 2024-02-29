const models = require('../models');

const create = async (payload) => {
  const department = await models.Department.create(payload);
  if (!department || !department.id) return null;
  return department.dataValues;
};

const getAll = () => models.Department.findAll({
  include: [
    {
      model: models.Category,
      as: 'categories',
      attributes: ['id', 'name'],
    },
  ],
});

const getById = (id) => models.Department.findOne({
  where: { id },
});

const getByName = (name) => models.Department.findOne({
  where: { name },
});

const getByLocationId = (locationId) => models.Department.findOne({
  where: { locationId },
});

const update = async (data) => {
  const [count] = await models.Department.update(data, {
    where: {
      id: data.id,
    },
  });
  if (!count) return null;
  const department = await models.Department.findOne({
    where: {
      id: data.id,
    },
  });
  return department.dataValues;
};

const remove = async (id) => {
  const count = await models.Department.destroy({
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
};
