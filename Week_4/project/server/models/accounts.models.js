const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        minLength: [3, 'Username name needs to be 3 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is rewuired'],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid Email"
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],

    }
}, {timestamps: true})

const Accounts = mongoose.model("Accounts", AccountSchema)

module.exports = Accounts