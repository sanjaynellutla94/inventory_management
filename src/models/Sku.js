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
        unique: true,
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      productColor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
    },
  );
  return Sku;
};
