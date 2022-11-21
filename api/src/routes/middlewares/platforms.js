const { Router } = require('express');
const controllers = require('../controllers/platformControllers')
const router = Router();

router.get('/', controllers.getPlatforms);

module.exports = router;