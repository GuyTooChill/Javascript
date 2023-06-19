const Student = require('../models/students.models')

module.exports.createStudent = (req, res) => {
    Student.create(req.body)
    .then((newStudent) => {res.json({results: newStudent})})
    .catch((error) => {res.json({error: error})})
}

module.exports.allStudents = (req, res) => {
    Student.find()
    .then((allStudents) => {res.json({results: allStudents})})
    .catch((error) => {res.json({error: error})})
}

module.exports.readOne = (req, res) => {
    Student.findOne({_id: req.params.id})
    .then((oneStudent) => {res.json({results: oneStudent})})
    .catch((error) => {res.json({error: error})})
}

module.exports.update = (req, res) => {
    Student.findOneAndUpdate({_id: req.params.id}, req.body)
    .then((updateStudent) => {res.json({results: updateStudent})})
    .catch((error) => {res.json({error: error})})
}

module.exports.delete = (req, res) => {
    Student.deleteOne({_id: req.params.id})
    .then((deleteStudent) => {res.json({results: deleteStudent})})
    .catch((error) => {res.json({error: error})})
}