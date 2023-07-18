require('dotenv').config();
const { API_KEY } = process.env;

const axios = require('axios');
const express = require('express');
const router = express.Router();
const getGenres = require('../controllers/genres_controller');

// me trae los géneros de la Api y si no existen en la DB los guarda
router.get('/', async (req, res) => {
    try {
        const genres = await getGenres();
		res.status(200).json(genres);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
}
);

module.exports = router;