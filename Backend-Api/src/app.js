const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors');
require('./db/mongoose')

const app = express()

//bring in routes
const authRouter = require('./routes/auth')
const reviewRouter = require('./routes/review')
const groupRouter = require('./routes/group')

//Middleware
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())
app.use(cookieParser())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../../Front-end/build'))
}

app.use('/', authRouter)
app.use('/', reviewRouter)
app.use('/', groupRouter)

module.exports = app

