const express = require('express');
const { API_KEY } = process.env;
const axios = require('axios');

const getPlatforms = async () => {
    // try {
        let apiPlatforms = await axios.get(
            `https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`);
        let resAllPlatforms = apiPlatforms.data.results.map(p => p.name);
            return resAllPlatforms;
    }
//     catch(err){
//         throw new Error(err)
//     }
// };

module.exports = getPlatforms;