require('dotenv').config();

//Middlewares
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

//Routes
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');
const checkoutRouter = require('./routes/checkout');
const paymentRouter = require('./routes/payments');
const shippingRouter = require('./routes/shipping');
const newsletterRouter = require('./routes/newsletter');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 *24 * 14
    }
}));

app.use('/', indexRouter);
app.use('/api/user', userRouter);
app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);
app.use('/api/checkout', checkoutRouter);
app.use('/api/payments', paymentRouter);
app.use('/api/shipping', shippingRouter);
app.use('/api/newsletter', newsletterRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
