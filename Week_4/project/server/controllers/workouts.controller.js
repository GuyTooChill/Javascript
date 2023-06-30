const Workout = require('../models/workouts.models')

module.exports.createWorkout = (req, res) => {
    Workout.create(req.body)
    .then((newWorkout) => {res.json({results: newWorkout})})
    .catch((error) => {res.status(400).json({error: error})})
}

module.exports.allWorkouts = (req, res) => {
    Workout.find()
    .then((allWorkouts) => {res.json({results: allWorkouts})})
    .catch((error) => {res.json({error: error})})
}

module.exports.readOne = (req, res) => {
    Workout.findOne({_id: req.params.id})
    .then((oneWorkout) => {res.json({results: oneWorkout})})
    .catch((error) => {res.json({error: error})})
}

module.exports.update = (req, res) => {
    Workout.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
    .then((updateWorkout) => {res.json({results: updateWorkout})})
    .catch((error) => {res.json({error: error})})
}

module.exports.delete = (req, res) => {
    Workout.deleteOne({_id: req.params.id})
    .then((deleteWorkout) => {res.json({results: deleteWorkout})})
    .catch((error) => {res.json({error: error})})
}