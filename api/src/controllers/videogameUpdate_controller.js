const express = require('express');
const { API_KEY } = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../db');

// actualizo la info del videogame:
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

  //Busco el videogame en la BD:
  let videoDb = await Videogame.findOne({
    where: { id },
    include: [Genre],
  });

  // Si no lo encuentra me da error:
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
