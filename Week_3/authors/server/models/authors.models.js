const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    Name: {
        type: String,
    }
}, {timestamps: true})

const Authors = mongoose.model("Authors", AuthorSchema)

module.exports = Authors