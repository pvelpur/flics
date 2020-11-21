const express = require('express'); 
const userController = require('../controllers/user')

// use express router
const router = express.Router()

router.get('/', userController.getUsers)

module.exports = router

