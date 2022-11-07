const { Router } = require('express');
const { getGenres } = require('../controllers/genreControllers')
const router = Router();

router.get('/', getGenres);

module.exports = router;