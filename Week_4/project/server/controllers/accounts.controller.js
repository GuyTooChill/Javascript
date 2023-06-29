const Account = require('../models/accounts.models')

module.exports.createAccount = (req, res) => {
    Account.create(req.body)
    .then((newAccount) => {res.json({results: newAccount})})
    .catch((error) => {res.status(400).json({error: error})})
}

module.exports.allAccounts = (req, res) => {
    Account.find()
    .then((allAccounts) => {res.json({results: allAccounts})})
    .catch((error) => {res.json({error: error})})
}

module.exports.readOne = (req, res) => {
    Account.findOne({_id: req.params.id})
    .then((oneAccount) => {res.json({results: oneAccount})})
    .catch((error) => {res.json({error: error})})
}

module.exports.update = (req, res) => {
    Account.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
    .then((updateAccount) => {res.json({results: updateAccount})})
    .catch((error) => {res.json({error: error})})
}

module.exports.delete = (req, res) => {
    Account.deleteOne({_id: req.params.id})
    .then((deleteAccount) => {res.json({results: deleteAccount})})
    .catch((error) => {res.json({error: error})})
}