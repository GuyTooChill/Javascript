const AccountsController = require('../controllers/accounts.controller')

module.exports = (app) => {
    app.post('/api/accounts/new', AccountsController.createAccount)

    app.get('/api/accounts', AccountsController.allAccounts)

    app.get('/api/accounts/:id', AccountsController.readOne)

    app.put('/api/accounts/:id', AccountsController.update)

    app.delete('/api/accounts/:id', AccountsController.delete)
}