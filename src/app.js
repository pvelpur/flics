const express = require('express')
const morgan = require('morgan')
require('./db/mongoose')

const app = express()

//bring in routes
const authRouter = require('./routes/auth')

//Middleware
app.use(morgan("dev"))
app.use(express.json())

app.use('/', authRouter)

module.exports = app

