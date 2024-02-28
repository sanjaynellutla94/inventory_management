const Sequelize = require('sequelize');
const { Op } = require('sequelize');

const getDBInstance = (options) => {
  const sequelize = new Sequelize(options.database, options.username, options.password, {
    host: options.host,
    port: options.port,
    dialect: options.dialect,
    logging: false,
    pool: options.connectionPool || {},
  });
  return sequelize;
};

const getDataTypes = () => Sequelize.DataTypes;

const sync = (sequelize) => sequelize.sync();

module.exports = {
  getDBInstance,
  getDataTypes,
  getOperators: () => Op,
  sync,
  connect: (sequelize) => sequelize.authenticate(),
};
