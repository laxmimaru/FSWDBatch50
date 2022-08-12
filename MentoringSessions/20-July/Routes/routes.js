const express = require('express')

var cityController = require('../controllers/City');

const router = express.Router();

router.get('/cityList',cityController.getCityList)

module.exports = router;

