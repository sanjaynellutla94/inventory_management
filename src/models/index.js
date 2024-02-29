const dbBuilder = require('../libraries/dbBuilder');
const Location = require('./Location');
const Department = require('./Department');
const Category = require('./Category');
const SubCategory = require('./SubCategory');
const Sku = require('./Sku');
const config = require('../config/config');

const db = {};

const dbInstance = dbBuilder.getDBInstance(config.db);

db.Location = Location(dbInstance, dbBuilder.getDataTypes());

db.Department = Department(dbInstance, dbBuilder.getDataTypes());

db.Category = Category(dbInstance, dbBuilder.getDataTypes());

db.SubCategory = SubCategory(dbInstance, dbBuilder.getDataTypes());

db.Sku = Sku(dbInstance, dbBuilder.getDataTypes());

db.Location.hasMany(db.Department, {
  foreignKey: 'departmentId',
  as: 'departments',
  attributes: ['id'],
  onDelete: 'CASCADE',
});

db.Department.belongsTo(db.Location, {
  as: 'location',
  attributes: ['id'],
});

db.Department.hasMany(db.Category, {
  foreignKey: 'categoryId',
  as: 'categories',
  attributes: ['id'],
  onDelete: 'CASCADE',
});

db.Category.belongsTo(db.Department, {
  as: 'department',
  attributes: ['id'],
});

db.Category.hasMany(db.SubCategory, {
  foreignKey: 'subCategoryId',
  as: 'subCategories',
  attributes: ['id'],
  onDelete: 'CASCADE',
});

db.SubCategory.belongsTo(db.Category, {
  as: 'category',
  attributes: ['id'],
});

db.Sku.belongsTo(db.Location, {
  as: 'location',
  foreignKey: 'locationId',
  attributes: ['id', 'name'],
});

db.Sku.belongsTo(db.Department, {
  as: 'department',
  foreignKey: 'departmentId',
  attributes: ['id', 'name'],
});

db.Sku.belongsTo(db.Category, {
  as: 'category',
  foreignKey: 'categoryId',
  attributes: ['id', 'name'],
});

db.Sku.belongsTo(db.SubCategory, {
  as: 'subCategory',
  foreignKey: 'subCategoryId',
  attributes: ['id', 'name'],
});

dbBuilder.sync(dbInstance);

db.instance = dbInstance;

db.connect = () => dbBuilder.connect(dbInstance);

db.Op = dbBuilder.getOperators();

module.exports = db;
