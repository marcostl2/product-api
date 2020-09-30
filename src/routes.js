const express = require('express')
const routes = express.Router()

const validator = require('./middlewares/validator')

const ProductController = require('./controllers/ProductController')

routes.post('/product', validator.createProduct, ProductController.create)


routes.get('/product', ProductController.read)
routes.get('/product/:id', ProductController.read)
routes.put('/product/:id', ProductController.update)

routes.delete('/product/:id', validator.deleteProduct, ProductController.delete)

module.exports = routes