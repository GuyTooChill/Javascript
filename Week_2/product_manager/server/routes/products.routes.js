const ProductsController = require('../controllers/products.controller')

module.exports = (app) => {
    app.post('/api/products/new', ProductsController.createProduct)

    app.get('/api/products', ProductsController.allProducts)

    app.get('/api/products/:id', ProductsController.readOne)

    app.put('/api/products/:id', ProductsController.update)

    app.delete('/api/products/:id', ProductsController.delete)
}