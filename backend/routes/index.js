const rootRouter = require('express').Router();

const users = require('./users');
const cards = require('./cards');
const signin = require('./singin');
const signup = require('./singup');
const notFound = require('./notFound');
const auth = require('../middlewares/auth');
const crashTest = require('./crashTest')

rootRouter.use('/crash-test', crashTest);
rootRouter.use('/signin', signin);
rootRouter.use('/signup', signup);
rootRouter.use('/users', auth, users);
rootRouter.use('/cards', auth, cards);
rootRouter.use('*', auth, notFound);

module.exports = rootRouter;
