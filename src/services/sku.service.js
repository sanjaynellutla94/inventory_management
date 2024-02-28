const models = require('../models');

const { Op } = models;

const getSkuKey = (payload) => `sku-${payload.locationId}-${payload.departmentId}-${payload.categoryId}-${payload.subCategoryId}-${payload.productName}-${payload.productColor}`;

// const createWithSubCategory = async ({ id }) => {
//   const subCategory = await models.SubCategory.findOne({
//     where: { id },
//     include: [
//       {
//         model: models.Category,
//         as: 'category',
//         attributes: ['id', 'department'],
//         include: [
//           {
//             model: models.Department,
//             as: 'department',
//             attributes: ['id', 'location'],
//             include: [
//               {
//                 model: models.Location,
//                 as: 'location',
//                 attributes: ['id'],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   });
//   if (!subCategory) {
//     return null;
//   }
//   const { category } = subCategory || {};
//   const { department } = category || {};
//   const { location } = department || {};
//   // const locationId =
//   const sku = await models.Sku.create({
//     name: getSkuKey({
//       subCategory, category, department, location,
//     }),
//     locationId: location.id,
//     departmentId: department.id,
//     categoryId: category.id,
//     subCategoryId: subCategory.id,
//   });
//   if (!sku || !sku.id) return null;
//   return sku.dataValues;
// };

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
}) => models.Sku.find({
  include: [
    {
      model: models.Location,
      as: 'locationId',
      attributes: ['id'],
      where: { name: locationName },
    },
    {
      model: models.Department,
      as: 'departmentId',
      attributes: ['id'],
      where: { name: departmentName },
    },
    {
      model: models.Category,
      as: 'categoryId',
      attributes: ['id'],
      where: { name: categoryName },
    },
    {
      model: models.SubCategory,
      as: 'subCategoryId',
      attributes: ['id'],
      where: { name: subCategoryName },
    },
  ],
  where: {
    locationId: {
      [Op.not]: null,
    },
    departmentId: {
      [Op.not]: null,
    },
    categoryId: {
      [Op.not]: null,
    },
    subCategoryId: {
      [Op.not]: null,
    },
  },
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
  // createWithSubCategory,
};
