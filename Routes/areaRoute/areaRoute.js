const { postArea, getAllArea, removeArea } = require('../../Controller/areaController');
const authGround = require('../../Middleware/authGroud');

const areaRoute = require('express').Router();


//Post Area 
areaRoute.post('/postArea', postArea);

//Get All Area 
areaRoute.get('/getArea', getAllArea);

//Remove Single Area 
areaRoute.delete('/removeArea/:id', removeArea);

module.exports = areaRoute;