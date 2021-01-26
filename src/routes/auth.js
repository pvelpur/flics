const express = require('express'); 
const { signup, login, signout } = require('../controllers/auth')
const { getUserById } = require('../controllers/user');
const { RequireAuth } = require('../middleware/auth')
const { getFavoritesByUser } = require('../controllers/user')
const { appendToList } = require('../controllers/user')

// use express router
const router = express.Router()

router.post('/api/signup', signup)
router.post('/api/login', login)
router.get('/api/signout', signout)
router.get('/api/favorites', RequireAuth, getFavoritesByUser)
router.post('/api/updateList', RequireAuth, appendToList)

// Any route containing :userId, the app will first execute getUserById() method
// localhost:3000/user/userid=23545794
router.param("userId", getUserById)

module.exports = router

