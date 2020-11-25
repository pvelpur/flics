const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
require('./db/mongoose')

const app = express()

//bring in routes
const authRouter = require('./routes/auth')

//Middleware
app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())

app.use('/', authRouter)

module.exports = app

