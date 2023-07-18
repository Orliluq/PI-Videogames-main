const { Router } = require('express');
require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;

const router = Router();

const { Videogame, Genre } = require('../db.js');
const getVideogames = require('../controllers/videogames_controller');
const getVideogamesByID = require('../controllers/videogamesByID_controller');
const getVideogamesNew = require('../controllers/videogamesNew_controller');
const deleteVideogame = require('../controllers/videogameDelete_controller');
const updateVideogame = require('../controllers/videogameUpdate_controller');

// Ruta GET videogames (trae todos los videogames) o con query trae por nombre:
router.get('/', async (req, res) => {
    const name = req.query.name;
  
    try {
        result = await getVideogames(name);
        res.status(200).json(result);
    }
    // otra forma:
    //   if (name) {
    //     const videogames = await getVideogames(name);
    //     videogames.length
    //       ? res.status(200).send(videogames)
    //       : res.status(404).send('No videogames found');
    //   } else {
    //     const videogames = await AllVideogames();
    //     res.status(200).send(videogames);
    //   }
    //   async function AllVideogames() {
    //     const allVideogames = await Videogame.findAll({});
    //     return allVideogames;
// }
    catch (error) {
    console.log(error.message)
    res.status(400).json(error.message);
    }
});


//GET videogame por id:
router.get('/:id', async (req, res) => {
    const { id: videogamesByID } = req.params;

    //verifico si es un juego creado y me trae el detalle de la BD
    if (videogamesByID.includes('-')) {
        let videogameDb = await Videogame.findOne({
            where: {
                id: videogamesByID,
            },
            include: Genre
        })
        //Parseo el objeto
        videogameDb = JSON.stringify(videogameDb);
        videogameDb = JSON.parse(videogameDb);
        
        //dejo un array con los nombres de género solamente
        videogameDb.genres = videogameDb.genres.map(g => g.name);
        return res.status(200).json(videogameDb);
    } else {

        // si no es un juego creado, voy a buscar la info a la API
        try {
            const response = await axios.get(`https://api.rawg.io/api/games/${videogamesByID}?key=${API_KEY}`);
            let { id, name, background_image, genres, description, released: released, rating, platforms } = response.data;
            genres = genres.map(g => g.name); // de la API me trae un array de objetos, mapeo solo el nombre del género
            platforms = platforms.map(p => p.platform.name); // de la API me trae un array de objetos, mapeo solo el nombre de la plataforma
            return res.json({
                id,
                name,
                background_image,
                genres,
                description,
                released,
                rating,
                platforms
            })
        } catch (error) {
            console.log(error);
            return res.status(400).send(`Error route /videogames/:id, ${error}`);
        }
    }
});


// consigue el videogame en BD, por formulario:
router.post('/', async (req, res) => {

    let videoGameNew = {
        id,
        name,
        description,
        platforms,
        background_image,
        released,
        rating,
        createdInDb, // por defecto viene en true, se trae de la DB con valor en true
        genres,
    } = req.body;

    try {
        console.log(videoGameNew)
        result = await getVideogamesNew(videoGameNew);
        res.status(200).json(result);
        
        // otra forma:
        // const videoGameNew = await getVideogamesNew(req.body);
        // res.status(200).json(videoGameNew);
        //      console.log(videoGameNew)
    }
    catch (error) {
        res.status(400).send('Videogame not created');
    }
});

//Ruta para eliminar el videogame:
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleteVG = await deleteVideogame(id);
        return res.status(200).send(deleteVG);

    } catch (error) {
        return res.status(400).send(error.message);
    }
});

// Otra forma:
// Videogame.destroy({
//     where: {
//         id: req.params.id,
//     },
// })
//     .then(res.status(200).send('The game was successfully removed'))
//     .catch((err) => console.log(err));
// });

//Ruta para actualizar el videogame:
router.put('/videogames', (req, res) => {
    const {
        id,
        name,
        description,
        platforms,
        background_image,
        released,
        rating,
        genres,
    } = req.body;

    try {
        let result = updateVideogame({
            id,
            name,
            description,
            platforms,
            background_image,
            released,
            rating,
            genres,
        });

        return res.status(200).json(result);

    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;