const express = require('express'); 
const { signup, login, signout } = require('../controllers/auth')
const { getUserById } = require('../controllers/user');

// use express router
const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/signout', signout)

// Any route containing :userId, the app will first execute getUserById() method
router.param("userId", getUserById)

module.exports = router

