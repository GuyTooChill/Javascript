const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Author name is required'],
        minLength: [3, 'Author name needs to be 3 characters long']
    }
}, {timestamps: true})

const Authors = mongoose.model("Authors", AuthorSchema)

module.exports = Authors