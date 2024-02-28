module.exports = (instance, DataTypes) => {
  const Sku = instance.define(
    'skus',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      locationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      departmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // Considering the requirement, i am not creating a seperate entity for products,
      // instead adding fields in SKU table itself for assignment purpose
      productName: {
        type: DataTypes.String,
        allowNull: false,
      },
      productColor: {
        type: DataTypes.String,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
      uniqueKeys: {
        unique_product: {
          fields: ['productName', 'productColor'],
        },
      },
    },
  );
  return Sku;
};
