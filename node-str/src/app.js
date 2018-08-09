'user strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // all content became json
app.use(bodyParser.urlencoded({extended: false})); //codify the urls

// Load Routes
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use('/', indexRoute);
app.use('/products', productRoute); // Load the put, create and delete from routes 

module.exports = app;
