const { Router } = require('express');
const router = Router();
const controllers = require('../controllers/videogameControllers');

router.get('/', controllers.getVideogames);

router.get('/:idVideogame', controllers.getVideogameById)

router.post('/', controllers.postVideogameToDB);


module.exports = router;