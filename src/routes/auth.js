const express = require('express'); 
const { signup, login, signout } = require('../controllers/auth')

// use express router
const router = express.Router()

router.post('/signup', signup)
<<<<<<< HEAD
router.get('/',(req,res)=>{res.send("hello world")})
=======
router.post('/login', login)
router.get('/signout', signout)

>>>>>>> master
module.exports = router

