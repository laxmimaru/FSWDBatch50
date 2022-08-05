
const express = require('express')

var cityController  = require('../Controllers/CityController');
var usersController = require('../Controllers/UsersController')

const router = express.Router()

router.get('/getCityList',cityController.getCityList);
router.post('/addCity',cityController.addCity);
router.post('/addUser',usersController.signUp);
router.get('/login',usersController.login);

module.exports = router;