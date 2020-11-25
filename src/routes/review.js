const express = require('express'); 
const {createReview, getReviews} = require('../controllers/review');
const Review = require('../models/review');

// use express router
const router = express.Router()
//CREATE -> POST
//READ -> GET
//UPDATE -> PATCH/PUT
//DELTE -> DELETE
router.post('/review', createReview)
router.get('/reviews', getReviews)

module.exports = router

