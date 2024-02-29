const models = require('../models');

const getSkuKey = (payload) => `sku-${payload.locationId}-${payload.departmentId}-${payload.categoryId}-${payload.subCategoryId}-${payload.productName}-${payload.productColor}`;

const create = async (payload) => {
  const sku = await models.Sku.create({
    name: getSkuKey(payload),
    ...payload,
  });
  if (!sku || !sku.id) return null;
  return sku.dataValues;
};

const getAll = () => models.Sku.findAll();

const getById = (id) => models.Sku.findOne({
  where: { id },
});

const getByName = (id) => models.Sku.findOne({
  where: { id },
});

const getByMetadata = ({
  locationName, departmentName, categoryName, subCategoryName,
}) => models.Sku.findAll({
  include: [
    {
      model: models.Location,
      as: 'location',
      attributes: ['id', 'name'],
      where: locationName && {
        name: locationName,
      },
    },
    {
      model: models.Department,
      as: 'department',
      attributes: ['id', 'name'],
      where: departmentName && {
        name: departmentName,
      },
    },
    {
      model: models.Category,
      as: 'category',
      attributes: ['id', 'name'],
      where: categoryName && {
        name: categoryName,
      },
    },
    {
      model: models.SubCategory,
      as: 'subCategory',
      attributes: ['id', 'name'],
      where: subCategoryName && {
        name: subCategoryName,
      },
    },
  ],
});

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
  getByName,
  getByMetadata,
};
