const { postAccount, removeAccount, getAllAccount } = require('../../Controller/accountController');

const accountRoute = require('express').Router();

//Account Post 
accountRoute.post('/postAccount', postAccount);

//Get ALl Account  
accountRoute.get('/getAllAccount', getAllAccount);

//Delete Single Account  
accountRoute.delete('/removeAccount/:id', removeAccount);

module.exports = accountRoute;
