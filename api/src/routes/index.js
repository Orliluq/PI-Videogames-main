const { Router } = require('express');
const router = Router();

// Importar todos los routers;
const videogameRouter = require('./videogames');
const genreRouter = require('./genres');
const platformRouter = require('./platforms');

// Configurar los routers
router.use('/videogames', videogameRouter);
router.use('/genres', genreRouter);
router.use('/platforms', platformRouter);

module.exports = router;