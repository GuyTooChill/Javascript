const mongoose = require('mongoose')

const WorkoutsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    muscle: {
        type: String,
        required: [true, 'Muscle group is required'],
    },
    reps: {
        type: Number
    },
    time: {
        type: Number
    }
}, {timestamps: true})

const Workouts = mongoose.model("Workouts", WorkoutsSchema)

module.exports = Workouts