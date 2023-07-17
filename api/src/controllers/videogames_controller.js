const express = require('express');
//const { API_KEY } = process.env;
const API_KEY = "5351b7ef557e428aba0f110861278f9c";
const axios = require('axios');
const { Videogame, Genre } = require('../db');

// Obtiene todos los videogames o sino los videogames por nombre: 
const getVideogames = async (name) => {
    // Obtiene los datos de videogames de la API:
    const getApiInfo = async () => {
        const url1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1`);
        const url2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`);
        const url3 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`);
        const url4 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`);
        const url5 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`);

    //     const apiUrl = [];
    //     let page = 1;
    //     let totalPages = 5;

    //    // Retrieve data from multiple pages
    // while (page <= totalPages) {
    //     try {
    //       const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`);
    //       apiUrl.push(...response.data.results);
    //       page++;
    //     } catch (error) {
    //       console.error(error);
    //       break;
    //     }
    //   } 

        const apiUrl = url1.data.results.concat(
            url2.data.results,
            url3.data.results,
            url4.data.results,
            url5.data.results,
        );

        const apiInfo = apiUrl.map(vGame => {
            const platforms = vGame.platforms.map((p) => p.platform);
            return {
                id: vGame?.id,
                name: vGame?.name,
                description: vGame?.description,
                platforms: platforms,
                genres: vGame?.genres,
                background_image: vGame?.background_image,
                released: vGame?.released,
                rating: vGame?.rating,
            }

        })
        return apiInfo;
    }
      

    // Obtiene los datos de videogames de la DB:
    const getDbInfo = async () => {
        return await Videogame.findAll({
            include: {
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            }
        })
    }

    // Une los datos de videogames de la DB y la API:
    const getAllVideogames = async () => {
        const apiInfo = await getApiInfo();
        const dbInfo = await getDbInfo();
        const videoGamesTotal = apiInfo.concat(dbInfo);
        return videoGamesTotal
    }

    // inicio del proceso principal:
    let videoGamesTotal = await getAllVideogames();

    if (name) {
        let videoGameName = await videoGamesTotal.filter(vGame => vGame.name.toLowerCase().includes(name.toLowerCase()));

        //obtengo los 15 primeros videogames:
        let videoGameName_2 = videoGameName.slice(0, 15);

        if (videoGameName.length) return videoGameName_2;
        else throw new Error('Videogame not found');
    }
    else {
        return videoGamesTotal;
    }
};

// const getApiInfo = async () => {
//     const urls = Array.from({ length: 5 }, (_, index) =>
//       axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${index + 1}`)
//     );
  
//     const apiResults = await Promise.all(urls);
  
//     const apiData = apiResults.flatMap(({ data }) => data.results);
  
//     return apiData.map(({ id, name, description, platforms, genres, background_image, released, rating }) => ({
//       id,
//       name,
//       description,
//       platforms: platforms.map(({ platform }) => platform),
//       genres,
//       background_image: background_image,
//       released,
//       rating,
//     }));
//   };
  
//   const getDbInfo = async () => {
//     return await Videogame.findAll({
//       include: [
//         {
//           model: Genre,
//           attributes: ['name'],
//           through: {
//             attributes: [],
//           },
//         },
//       ],
//     });
//   };
  
//   const getAllVideogames = async (name) => {
//     const apiData = await getApiInfo();
//     const dbData = await getDbInfo();
//     const videogames = apiData.concat(dbData);
  
//     if (name) {
//       const filteredVideogames = videogames.filter((game) => game?.name?.toLowerCase().includes(name.toLowerCase()));
  
//       if (filteredVideogames?.length > 0) {
//         return filteredVideogames.slice(0, 15);
//       } else {
//         throw new Error(`No videogame with name found ${name}`);
//       }
//     } else {
//       return videogames;
//     }
//   };
  
//   const getVideogames = async (req, res) => {
//     const { name } = req.query;
  
//     try {
//       const videogames = await getAllVideogames(name);
//       return res.json(videogames);
//     } catch (error) {
//       return res.status(404).json({ error: error.message });
//     }
//   };

module.exports = getVideogames;