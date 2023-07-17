const express = require('express');
const { API_KEY } = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../db');

// Obtiene  los videogames por id:
const getVideogamesByID = async (id) => {

    if (!isNaN(id)) {
        //Busca videogame en la Api:
        const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=5351b7ef557e428aba0f110861278f9c`)
        console.log(response)

        if (response.data.id) {
            let genrestr = [];
            for (i = 0; i < response.data.genres.length; i++) {
                genrestr.push(response.data.genres[i].name)
            }

            // let platformstr = [];
            // for (i = 0; i < response.data.platforms.length; i++) {
            //     platformstr.push(response.data.platforms[i].platform.name)
            // }

            // if (response.data.id) {
            //     let genres = response.data.genres.map((g) => g.name);
            //     let platforms = response.data.platforms.map((p) => p.platform.name);

            const apiResult = {
              id: result.data.id,
              name: result.data.name,
              platforms: platformstr.toString(),
              released: result.data.released,
              background_image: result.data.background_image,
              description: result.data.description.replace(/<[^>]+>/g, ''), // elimina etiquetas html como <p></p>
              rating: result.data.rating,
              genres: genrestr.toString()
          }
          return apiResult;
      }
          }
        
          // Busca en la base de datos:
          let dataDb = await Videogame.findOne({
            where: { id },
            include: [Genre],
          });
        
          if (dataDb) {
            let genrestr = []
              for (let i = 0; i < dataDb.genres.length; i++) {
                genrestr.push(dataDb.genres[i].name)
        }
            // let genres = dataDb.genres.map((g) => g.name).join(",");
            const DbResult = {
              id: dataDb.id,
              name: dataDb.name,
              platforms: dataDb.platforms,
              released: dataDb.released,
              background_image: dataDb.background_image ? dataDb.background_image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCsgPISuO1XFJO3fxKhWGx7l9DEvGeQ2BMtQ&usqp=CAU",
              description: dataDb.description,
              rating: dataDb.rating,
              genres: genrestr.toString()
          }
  
          return DbResult;
      }
        
          throw new Error('Videogame not found');
        };

        
module.exports = getVideogamesByID;