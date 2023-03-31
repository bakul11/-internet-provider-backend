const { postReseler, getAllReseler, removeReseler } = require('../../Controller/reselerController');

const reselerRoute = require('express').Router();

//Reseler Post 
reselerRoute.post('/postReseler', postReseler);

//Get ALl Reseler  
reselerRoute.get('/getAllReseler', getAllReseler);

//Delete Single Reseler  
reselerRoute.delete('/removeReseler/:id', removeReseler);

module.exports = reselerRoute;
