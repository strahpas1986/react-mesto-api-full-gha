const CREATE_CODE = 201;
const BAD_REQUEST_CODE = 400;
const UNAUTHORIZED_CODE = 401;
const FORBIDDEN_CODE = 403;
const NOT_FOUND_CODE = 404;
const CONFLICT_CODE = 409;
const DEFAULT_CODE = 500;

// Регулярное выражение для проверки адреса
const LINK_REGEXP = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/im;

// Переменная для CORS
const ALLOWED_CORS = [
  'http://mesto-sp.nomoredomains.monster',
  'https://mesto-sp.nomoredomains.monster',
  'http://84.201.142.51',
  'https://84.201.142.51',
  'http://localhost:3000',
  'http://localhost:3001',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = {
  CREATE_CODE,
  BAD_REQUEST_CODE,
  UNAUTHORIZED_CODE,
  FORBIDDEN_CODE,
  NOT_FOUND_CODE,
  CONFLICT_CODE,
  DEFAULT_CODE,
  LINK_REGEXP,
  ALLOWED_CORS,
  DEFAULT_ALLOWED_METHODS,
};
