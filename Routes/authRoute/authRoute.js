const { registerUser, loginUser, activeUser, getAllUsers, updateProfile } = require('../../Controller/authController');
const authGround = require('../../Middleware/authGroud');


const authRoute = require('express').Router();

//Register User
authRoute.post('/register', registerUser);

//Login User
authRoute.post('/login', loginUser);

//get all User
authRoute.get('/allUsers', authGround, getAllUsers);

//active User
authRoute.get('/loginUser', authGround, activeUser);

//update profile
authRoute.put('/updateProfile/:id', authGround, updateProfile);

module.exports = authRoute;