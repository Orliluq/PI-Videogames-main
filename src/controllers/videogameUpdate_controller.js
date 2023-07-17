const express = require('express');
const { API_KEY } = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../db');

// actualiza el videogame:
const updateVideogame = async ({
  id,
  name,
  description,
  platforms,
  background_image,
  released,
  rating,
  genres,
}) => {
  //Busca videogame en la DB:
  let videoDb = await Videogame.findOne({
    where: { id },
    include: [Genre],
  });

  // Si no lo encuentra da error:
  if (!videoDb) {
    throw new Error('Videogame not found');
  }

  // try {

   let videoUpd = await Videogame.update(
      {
        name,
        description,
        platforms,
        background_image,
        released,
        rating,
      },
      {
        where: { id },
      }
    );
    
    // await videoDb.setGenres(genres);
    
    return 'The videogame has been updated';
    
  // } catch (err) {
  //   return err;
  // }
};

module.exports = updateVideogame;
