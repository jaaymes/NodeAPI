const express = require('express');

const routes = express.Router();

const ProductController = require('./Controllers/ProductController');

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);
// routes.get('/', (req, res) => res.send('Hello Jaymes'));

module.exports = routes;
