const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    home_state: {
        type: String,
    },
    lucky_number: {
        type: Number,
    },
    birthday: {
        type: Date,
    }
})

const Students = mongoose.model("Students", StudentSchema)

module.exports = Students