require('./libraries/dotenv')();
const initApp = require('./app');
const logger = require('./utils/logger');
const config = require('./config/config');
const connectToDatabase = require('./models');

const app = initApp();

const initProcessEvents = () => {
  process.on('unhandledRejection', (error) => {
    logger.error('Something went wrong', error);
    process.exit(1);
  });
};

const startServer = async () => {
  try {
    await app.listen(config.port);
    logger.info(`Web server listening to: ${config.port}`);
    const db = await connectToDatabase(config.db);
    await db.connect();
    logger.info('Successfully connected to all tenants');
  } catch (err) {
    logger.error('Something went wrong', err);
    process.exit(1);
  }
};

initProcessEvents();
startServer();
