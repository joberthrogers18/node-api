'user strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// conecting to database
mongoose.connect('mongodb://jobs:j23231215@ds020208.mlab.com:20208/ndstr-challenge', { useNewUrlParser: true });

app.use(bodyParser.json()); // all content became json
app.use(bodyParser.urlencoded({extended: false})); //codify the urls


//Load Models
const Product = require('./models/products');

// Load Routes
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use('/', indexRoute);
app.use('/products', productRoute); // Load the put, create and delete from routes 

module.exports = app;
