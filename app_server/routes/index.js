var express = require('express');
var router = express.Router();

var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
