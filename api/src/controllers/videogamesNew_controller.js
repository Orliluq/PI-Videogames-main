const express = require('express');
const { API_KEY } = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../db');

// Obtengo  los videogames por id:
const getVideogamesNew = async ({
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
    genres,
}) => {

    platforms = platforms.toString();

    let newVideoGame = await Videogame.create({
        name,
        description,
        platforms,
        background_image,
        released,
        rating,
    });

    let genreDb = await Genre.findAll({
        where: { name: genres }
    });

    newVideoGame.addGenres(genreDb);
    return newVideoGame;
};

module.exports = getVideogamesNew;