require('../libraries/dotenv')();

module.exports = {
  db: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
  authSecret: process.env.AUTH_SECRET,
  port: process.env.APP_PORT,
};
