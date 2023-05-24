const jwt = require('jsonwebtoken');
const ErrorAuthorization = require('../errors/ErrorAutorization');

const { NODE_ENV, SECRET_KEY = 'SECRET_KEY' } = process.env;

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return next(new ErrorAuthorization('Необходима авторизация'));
  }
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? SECRET_KEY : 'dev-secret-key');
  } catch (err) {
    return next(new ErrorAuthorization('Необходима авторизация'));
  }
  req.user = payload;
  return next();

  // if (req.headers.authorization === undefined) {
  //   return next(new ErrorAuthorization('Необходима авторизация'));
  // }
  // const token = req.cookies.jwt || req.headers.authorization.replace('Bearer ', '');
  // if (!token) {
  //   return next(new ErrorAuthorization('Необходима авторизация'));
  // }
  // let payload;
  // try {
  //   payload = jwt.verify(token, NODE_ENV === 'production' ? SECRET_KEY : 'dev-secret-key');
  //   // payload = jwt.verify(token, SECRET_KEY);
  // } catch (err) {
  //   return next(new ErrorAuthorization('Необходима авторизация'));
  // }
  // req.user = payload;
  // return next();
};
