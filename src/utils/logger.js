const winston = require('winston');
// const LogstashTransport = require('winston-logstash/lib/winston-logstash-latest');

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};

// const logstashTransport = new LogstashTransport({
//   mode: 'tcp',
//   host: 'localhost',
//   port: 5400,
// });

const logstashTransport = new winston.transports.Console();

const logger = winston.createLogger({
  levels,
  format: winston.format.json(),
  defaultMeta: {},
  transports: [logstashTransport],
  // transports: [new winston.transports.Console()],
});

module.exports = logger;
