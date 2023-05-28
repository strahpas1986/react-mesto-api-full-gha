require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const validationErrors = require('celebrate').errors;

const rootRouter = require('./routes/index');

const limiter = require('./middlewares/limiter');
const errors = require('./middlewares/error');
const { requestLogger, errorLogger } = require('./middlewares/logger');
// const cors = require('./middlewares/cors');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const DATABASE = process.env.DATABASE || 'mongodb://localhost:27017/mestodb';

const app = express();

mongoose.connect(DATABASE);

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(limiter);
app.use(cors({
  origin: [
    '//mesto-sp.nomoredomains.monster',
    '//mesto-sp.nomoredomains.monster',
    '//api.mesto-sp.nomoredomains.monster',
    '//api.mesto-sp.nomoredomains.monster',
    '//84.201.142.51',
    '//84.201.142.51',
    '//localhost:3000',
    '//localhost:3001',
  ],
  method: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: true,
}));
// app.use(cors);

app.use(requestLogger);

app.use('/', rootRouter);

app.use(errorLogger);

app.use(validationErrors());
app.use(errors);

app.listen(PORT);
// app.listen(3002);
