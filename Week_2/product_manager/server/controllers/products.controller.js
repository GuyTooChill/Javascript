const Product = require('../models/products.models')

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then((newProduct) => {res.json({results: newProduct})})
    .catch((error) => {res.json({error: error})})
}

module.exports.allProducts = (req, res) => {
    Product.find()
    .then((allProducts) => {res.json({results: allProducts})})
    .catch((error) => {res.json({error: error})})
}

module.exports.readOne = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then((oneProduct) => {res.json({results: oneProduct})})
    .catch((error) => {res.json({error: error})})
}

module.exports.update = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body)
    .then((updateProduct) => {res.json({results: updateProduct})})
    .catch((error) => {res.json({error: error})})
}

module.exports.delete = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then((deleteProduct) => {res.json({results: deleteProduct})})
    .catch((error) => {res.json({error: error})})
}