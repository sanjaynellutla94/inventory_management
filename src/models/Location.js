module.exports = (instance, DataTypes) => {
  const Location = instance.define(
    'locations',
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
    },
    {
      timestamps: true,
      underscored: true,
    },
  );
  return Location;
};
