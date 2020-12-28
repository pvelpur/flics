const express = require('express'); 
const {createGroup, getGroups} = require('../controllers/group');
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
router.get('/groups', RequireAuth, getGroups) //need to be authenticated to see reviews

//used when adding a user/admin to the group db
router.update('/groups', RequireAuth, changeGroup) 
//used when deleting a user/admin to the group db
router.delete('/groups', RequireAuth, deleteGroup)

// Any route containing :userId, the app will first execute getUserById() method
router.param("userId", getUserById )

module.exports = router
