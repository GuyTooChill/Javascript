const Joke = require('../models/jokes.models')

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
    .then((newJoke) => {res.json({results: newJoke})})
    .catch((error) => {res.json({error: error})})
}

module.exports.allJokes = (req, res) => {
    Joke.find()
    .then((allJokes) => {res.json({results: allJokes})})
    .catch((error) => {res.json({error: error})})
}

module.exports.readOne = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then((oneJoke) => {res.json({results: oneJoke})})
    .catch((error) => {res.json({error: error})})
}

module.exports.update = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body)
    .then((updateJoke) => {res.json({results: updateJoke})})
    .catch((error) => {res.json({error: error})})
}

module.exports.delete = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then((deleteJoke) => {res.json({results: deleteJoke})})
    .catch((error) => {res.json({error: error})})
}