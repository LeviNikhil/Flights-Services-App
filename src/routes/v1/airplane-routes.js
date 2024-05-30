const express = require('express');

const {AirplaneController} = require('../../controllers');
const router = express.Router();
console.log("Inside AIRPLANE Routes")

//  /api/v1/airplanes  POST Request
router.post('/',AirplaneController.createAirplane);

module.exports = router;