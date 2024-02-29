const models = require('../models');

const create = async (payload) => {
  const location = await models.Location.create(payload);
  if (!location || !location.id) return null;
  return location.dataValues;
};

const getAll = async () => {
  const locations = await models.Location.findAll({
    include: [
      {
        model: models.Department,
        as: 'departments',
        attributes: ['id', 'name'],
      },
    ],
  });
  return locations;
};

const getById = (id) => models.Location.findOne({
  where: { id },
});

const getByName = (name) => models.Location.findOne({
  where: { name },
});

const update = async (data) => {
  const [count] = await models.Location.update(data, {
    where: {
      id: data.id,
    },
  });
  if (!count) return null;
  const location = await models.Location.findOne({
    where: {
      id: data.id,
    },
  });
  return location.dataValues;
};

const remove = async (id) => {
  const count = await models.Location.destroy({
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
};
