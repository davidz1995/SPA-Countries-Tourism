const { Router } = require('express');
const countriesRoute = require('./countries')
const activitiesRoute = require('./activities')
const router = Router();

router.use('/countries', countriesRoute)
router.use('/activities', activitiesRoute)

module.exports = router;
