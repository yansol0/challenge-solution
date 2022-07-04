const express = require('express');
const http = require('http');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cart = require('./routes/cart');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');

//  Load env vars
dotenv.config({ path: './config/config.env' });

//  Server init
const app = express();

// Body parser
app.use(express.json());

// Http param pollution middleware
app.use(hpp());

// Sanitiser
app.use(xss());

// Helmet security headers
app.use(helmet());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//  Mount routes
app.use('/api/v1/cart', cart);

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
