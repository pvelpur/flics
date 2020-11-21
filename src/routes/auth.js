const express = require('express'); 
const { signup } = require('../controllers/auth')

// use express router
const router = express.Router()

router.post('/signup', signup)

module.exports = router

