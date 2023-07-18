import axios from 'axios';
import {
    GET_VIDEOGAMES, 
    GET_GENRES, 
    FILTER_BY_GENRE, 
    GET_PLATFORMS, 
    GET_DETAILS,
    FILTER_CREATED, 
    ORDER_BY_NAME, 
    ORDER_BY_RATING, 
    GET_VIDEOGAME_NAME,
    DELETE_VIDEOGAME,
    PUT_VIDEOGAME, 
    // INIT_FILTERS,
} from "../Action-Types/ActionTypes.js";

// Obtengo los videogames desde la API y desde la BD:
export const getVideogames = () => {
    return async function (dispatch) {
        const json = await axios.get('http://localhost:3001/videogames');
        return dispatch({
            type: GET_VIDEOGAMES,
            payload: json.data
        })
    }
};

// Filtro para obtener los géneros de la API:
export function getGenres() {
    return async function (dispatch) {
        const json = await axios.get('http://localhost:3001/genres');
        return dispatch({
            type: GET_GENRES,
            payload: json.data
        })
    }
};

// Filtro para seleccionar videogames por género:
export function filterVideogamesByGenre(payload) { // payload es el value del input (Accion, terror, etc)
    return {
        type: FILTER_BY_GENRE,
        payload
    }
};

// Filtro para seleccionar si fue creado en la BD o viene de la API:
export function filterCreated(payload) { //BD
    return {
        type: FILTER_CREATED,
        payload
    }
};

export function orderByName(payload) { //asc y desc 
    return {
        type: ORDER_BY_NAME,
        payload
    }
};

export function orderByRating(payload) {
    return {
        type: ORDER_BY_RATING,
        payload
    }
};

//Busco los videogames por nombre
export function getVideogameName(name) {
    return async function (dispatch) {
        try {
            const json = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            return dispatch({
                type: GET_VIDEOGAME_NAME,
                payload: json.data
            })
        } catch (error) {
            alert('Game not found');
        }
    }
};

export function postVideogame(payload) {
    return async function (dispatch) {
        const response = await axios.post('http://localhost:3001/videogames', payload);
        return response;
    }
}; 

export function getPlatforms() {
    return async function (dispatch) {
        const json = await axios.get('http://localhost:3001/platforms');
        return dispatch({
            type: GET_PLATFORMS,
            payload: json.data
        })
    }
};

export function getDetails(id) {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/videogames/${id}`)
        .then((response) => { 
            dispatch({
                type: GET_DETAILS,
                payload: response.data
            });
        })
        .catch((err) => {
            console.log(`ERROR: ${err.message}`);
        });
    }
};

export function putVideogame (id, game) {
    return async function () {
        const putGame = await axios.put(`http://localhost:3001/videogames/${id}`, game)
        return putGame.data
    }
};
  
export function deleteVideogame (id) {
    return async function (dispatch) {
        await axios.delete(`http://localhost:3001/videogames/${id}`)
        return dispatch({
            type: DELETE_VIDEOGAME,
            payload: id,
        })
    }
};


  /*
export function initFilters(payload) {
    return {
        type: INIT_FILTERS,
        payload
    }
}
*/