const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const path = require('path')
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
    //serve static files
    app.use(express.static(path.join(__dirname, '..', 'Front-end/build')))

    //handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '..', 'Front-end/build', 'index.html'));
    })
}

app.use('/', authRouter)
app.use('/', reviewRouter)
app.use('/', groupRouter)

module.exports = app

