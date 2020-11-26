const express = require('express'); 
const {createReview, getReviews} = require('../controllers/review');
const { RequireAuth } = require('../middleware/auth')
const { getUserById } = require('../controllers/user');


// use express router
const router = express.Router()
//CREATE -> POST
//READ -> GET
//UPDATE -> PATCH/PUT
//DELTE -> DELETE
router.post('/review', RequireAuth, createReview) //need to be authenticated to create a review
//When it performs authentications, it will add userID to 'req' (check middleware/auth.js)
router.get('/reviews', RequireAuth, getReviews) //need to be authenticated to see reviews

// Any route containing :userId, the app will first execute getUserById() method
router.param("userId", getUserById)

module.exports = router

