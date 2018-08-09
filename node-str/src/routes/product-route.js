'user strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.post('/', controller.post); // take function post and treat it

router.put('/:id', controller.put);

router.delete('/', controller.delete);

module.exports = router;
