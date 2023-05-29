require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const validationErrors = require('celebrate').errors;

const rootRouter = require('./routes/index');

const errors = require('./middlewares/error');
const { requestLogger, errorLogger } = require('./middlewares/logger');
// const cors = require('./middlewares/cors');
const cors = require('cors');

const PORT = process.env.PORT || 3002;
const DATABASE = process.env.DATABASE || 'mongodb://localhost:27017/mestodb';

const app = express();

mongoose.connect(DATABASE);

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors({
  origin: [
    'http://mesto-sp.nomoredomains.monster',
    'https://mesto-sp.nomoredomains.monster',
    'http://api.mesto-sp.nomoredomains.monster',
    'https://api.mesto-sp.nomoredomains.monster',
    'http://84.201.142.51',
    'https://84.201.142.51',
    'http://localhost:3000',
    'http://localhost:3001',
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
