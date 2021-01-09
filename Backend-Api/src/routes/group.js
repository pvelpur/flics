const express = require('express'); 
const {createGroup, getGroups, getReviews} = require('../controllers/group');
const { RequireAuth } = require('../middleware/auth')
const { getUserById } = require('../controllers/user');


// use express router
const router = express.Router()
//CREATE -> POST
//READ -> GET
//UPDATE -> PATCH/PUT
//DELTE -> DELETE
router.post('/group', RequireAuth, createGroup) //need to be authenticated to create a review
//When it performs authentications, it will add userID to 'req' (check middleware/auth.js)
router.get('/groups', RequireAuth, getGroups) //need to be authenticated to see groups

// Any route containing :userId, the app will first execute getUserById() method
router.param("userId", getUserById)

module.exports = router