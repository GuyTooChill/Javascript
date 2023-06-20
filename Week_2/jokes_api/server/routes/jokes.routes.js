const JokesController = require('../controllers/jokes.controller')

module.exports = (app) => {
    app.post('/api/jokes/new', JokesController.createJoke)

    app.get('/api/jokes', JokesController.allJokes)

    app.get('/api/jokes/:id', JokesController.readOne)

    app.put('/api/jokes/:id', JokesController.update)

    app.delete('/api/jokes/:id', JokesController.delete)
}