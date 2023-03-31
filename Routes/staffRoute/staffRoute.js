const { postStaff, getAllStaff, removeStaff } = require('../../Controller/staffController');

const staffRoute = require('express').Router();

//Reseler Post 
staffRoute.post('/postStaff', postStaff);

//Get ALl Reseler  
staffRoute.get('/getAllStaff', getAllStaff);

//Delete Single Reseler  
staffRoute.delete('/removeStaff/:id', removeStaff);

module.exports = staffRoute;
