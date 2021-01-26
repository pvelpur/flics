const express = require('express'); 
const {createReview} = require('../controllers/review');
const { RequireAuth } = require('../middleware/auth')
const { getUserById } = require('../controllers/user');
const {getReviews} = require('../controllers/group')


// use express router
const router = express.Router()
//CREATE -> POST
//READ -> GET
//UPDATE -> PATCH/PUT
//DELTE -> DELETE
router.post('/api/review', RequireAuth, createReview) //need to be authenticated to create a review
//When it performs authentications, it will add userID to 'req' (check middleware/auth.js)
//router.get('/reviews', RequireAuth, getReviews) //need to be authenticated to see reviews
router.get('/api/reviews/:groupId', RequireAuth, getReviews) //groupID is a param

// Any route containing :userId, the app will first execute getUserById() method
router.param("userId", getUserById)

module.exports = router

