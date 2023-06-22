const Author = require('../models/authors.models')

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then((newAuthor) => {res.json({results: newAuthor})})
    .catch((error) => {res.status(400).json({error: error})})
}

module.exports.allAuthors = (req, res) => {
    Author.find()
    .then((allAuthors) => {res.json({results: allAuthors})})
    .catch((error) => {res.json({error: error})})
}

module.exports.readOne = (req, res) => {
    Author.findOne({_id: req.params.id})
    .then((oneAuthor) => {res.json({results: oneAuthor})})
    .catch((error) => {res.json({error: error})})
}

module.exports.update = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
    .then((updateAuthor) => {res.json({results: updateAuthor})})
    .catch((error) => {res.json({error: error})})
}

module.exports.delete = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then((deleteAuthor) => {res.json({results: deleteAuthor})})
    .catch((error) => {res.json({error: error})})
}