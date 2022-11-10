const { Router } = require('express');
const controllers = require('../controllers/genreControllers')
const router = Router();

router.get('/', controllers.getGenres);

module.exports = router;