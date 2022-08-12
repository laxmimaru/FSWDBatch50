
const express = require('express')

var cityController  = require('../Controllers/CityController');

const router = express.Router()

router.get('/getCityList',cityController.getCityList);
router.post('/addCity',cityController.addCity);



module.exports = router;