const winston = require('winston');
const expressWinston = require('express-winston');

// создадим логгер запросов
const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({
      filename: 'logs/request.log',
      maxsize: '10000000',
      maxFiles: '10',
    }),
  ],
  format: winston.format.json(),
});

// логгер ошибок
const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({
      filename: 'logs/request.log',
      maxsize: '10000000',
      maxFiles: '10',
    }),
  ],
  format: winston.format.json(),
});

// экспорт логгеров
module.exports = {
  requestLogger,
  errorLogger,
};
