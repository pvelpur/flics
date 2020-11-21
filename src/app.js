const express = require('express')
const morgan = require('morgan')
//require('./db/mongoose')

const app = express()

//bring in routes
const userRouter = require('./routes/user')

//Middleware
app.use(morgan("dev"))
app.use(express.json())

app.use('/', userRouter)

module.exports = app

