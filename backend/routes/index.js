const rootRouter = require('express').Router();

// подключение логирования
const { requestLogger, errorLogger } = require('./middlewares/logger');

const users = require('./users');
const cards = require('./cards');
const signin = require('./singin');
const signup = require('./singup');
const notFound = require('./notFound');
const auth = require('../middlewares/auth');

rootRouter.use(requestLogger);
rootRouter.use('/signin', signin);
rootRouter.use('/signup', signup);
rootRouter.use('/users', auth, users);
rootRouter.use('/cards', auth, cards);
rootRouter.use('*', notFound);

app.use(errorLogger); // подключаем логгер ошибок

app.use(errors()); // обработчик ошибок celebrate переподключить

module.exports = rootRouter;
