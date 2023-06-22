const AuthorsController = require('../controllers/authors.controller')

module.exports = (app) => {
    app.post('/api/products/new', AuthorsController.createAuthor)

    app.get('/api/products', AuthorsController.allAuthors)

    app.get('/api/products/:id', AuthorsController.readOne)

    app.put('/api/products/:id', AuthorsController.update)

    app.delete('/api/products/:id', AuthorsController.delete)
}