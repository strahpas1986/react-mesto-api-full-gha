const ErrorNotFound = require('../errors/ErrorNotFound');

module.exports.notFound = (req, res, next) => {
  next(new ErrorNotFound('Указан несуществующий URL'));
};
