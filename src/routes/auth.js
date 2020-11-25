const express = require('express'); 
const { signup, login, signout } = require('../controllers/auth')

// use express router
const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/signout', signout)

module.exports = router

