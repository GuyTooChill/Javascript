const Student = require('../models/students.models')

module.exports.createStudent = (req, res) => {
    Student.create(req.body)
    .then((newStudent) => {res.json({results: newStudent})})
    .catch((error) => {res.json({error: error})})
}

module.exports.allStudents = () => {
    Student.find()
    .then((allStudents) => {res.json({results: allStudents})})
    .catch((error) => {res.json({error: error})})
}