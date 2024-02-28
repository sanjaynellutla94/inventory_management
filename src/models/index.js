const dbBuilder = require('../libraries/dbBuilder');
const Location = require('./Location');
const Department = require('./Department');
const Category = require('./Category');
const SubCategory = require('./SubCategory');
const Sku = require('./Sku');

module.exports = (config) => {
  const db = {};

  const dbInstance = dbBuilder.getDBInstance(config);

  db.Location = Location(dbInstance, dbBuilder.getDataTypes());

  db.Department = Department(dbInstance, dbBuilder.getDataTypes());

  db.Category = Category(dbInstance, dbBuilder.getDataTypes());

  db.SubCategory = SubCategory(dbInstance, dbBuilder.getDataTypes());

  db.Sku = Sku(dbInstance, dbBuilder.getDataTypes());

  db.Location.hasMany(db.Department, {
    foreignKey: 'departmentId',
    as: 'departments',
    attributes: ['id'],
  });

  db.Department.hasMany(db.Category, {
    foreignKey: 'categoryId',
    as: 'categories',
    attributes: ['id'],
  });

  db.Category.hasMany(db.SubCategory, {
    foreignKey: 'subCategoryId',
    as: 'subCategories',
    attributes: ['id'],
  });

  db.Sku.hasOne(db.Location, {
    as: 'locationId',
    foreignKey: 'locationId',
    attributes: ['id', 'name'],
  });

  db.Sku.hasOne(db.Department, {
    as: 'departmentId',
    foreignKey: 'departmentId',
    attributes: ['id', 'name'],
  });

  db.Sku.hasOne(db.Category, {
    as: 'categoryId',
    foreignKey: 'categoryId',
    attributes: ['id', 'name'],
  });

  db.Sku.hasOne(db.SubCategory, {
    as: 'subCategoryId',
    foreignKey: 'subCategoryId',
    attributes: ['id', 'name'],
  });

  dbBuilder.sync(dbInstance);

  db.instance = dbInstance;

  db.connect = () => dbBuilder.connect(dbInstance);

  db.Op = dbBuilder.getOperators();

  return db;
};
