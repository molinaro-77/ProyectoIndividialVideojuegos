const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogame = require('./middlewares/videogames.js')
const genres = require('./middlewares/genres.js')

const router = express.Router();
router.use(express.json());
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogame);
router.use('/genres', genres);

module.exports = router;
