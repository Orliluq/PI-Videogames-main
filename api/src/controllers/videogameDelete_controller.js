const express = require('express');
const { API_KEY } = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../db');

// Obtiene  los videogames por id:
const deleteVideogame = async (id) => {
    // try {
        //Busca videogame en la DB:  
        let videoDb = await Videogame.findOne({
            where: { id },
            include: [Genre],
        });

        // Si no lo encuentra da error: 
        if (!videoDb) {
            throw new Error('Videogame not found');
        }

        const game = await Videogame.destroy({
            where: { id: `${id}` }
        });

        return ('Videogame has been removed');
    }
//     catch(err){
//         throw new Error('El videogame ha sido eliminado')
//     }
// };

module.exports = deleteVideogame;