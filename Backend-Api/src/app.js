const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors');
require('./db/mongoose')

const app = express()

//bring in routes
const authRouter = require('./routes/auth')
const reviewRouter = require('./routes/review')

//Middleware
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/', authRouter)
app.use('/', reviewRouter)

module.exports = app

