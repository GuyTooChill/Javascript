const express = require('express')
const app = express()
require('dotenv').config()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('./config/mongoose.config')

// require('./routes/students.routes')(app)

app.listen(port, () => console.log('Welcome Tarnished.'))