const AuthorsController = require('../controllers/authors.controller')

module.exports = (app) => {
    app.post('/api/authors/new', AuthorsController.createAuthor)

    app.get('/api/authors', AuthorsController.allAuthors)

    app.get('/api/authors/:id', AuthorsController.readOne)

    app.put('/api/authors/:id', AuthorsController.update)

    app.delete('/api/authors/:id', AuthorsController.delete)
}