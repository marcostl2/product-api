const express=require('express')
const routes=express.Router()

const ProductController =require('./controllers/ProductController')

routes.post('/product',ProductController.create)
routes.get('/product',ProductController.read)
routes.put('/product/:id',ProductController.update)
routes.delete('/product/:id',ProductController.delete)

module.exports=routes