import {
    GET_VIDEOGAMES, 
    GET_GENRES, 
    FILTER_BY_GENRE, 
    FILTER_CREATED, 
    GET_DETAILS,
    ORDER_BY_NAME, 
    GET_VIDEOGAME_NAME, 
    ORDER_BY_RATING, 
    POST_VIDEOGAME, 
    GET_PLATFORMS, 
    DELETE_VIDEOGAME,
    PUT_VIDEOGAME,
    // INIT_FILTERS
} from "../Action-Types/ActionTypes.js";

const initialState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    platforms: [],
    videodetails: [],
    detail: {},
    filter_created: [],
    filter_genre: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload, //esto es para que los filtros siempre empiecen sobre todos y no sobre el filtro aplicado
            }

        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }

        case FILTER_BY_GENRE:
            const allGames = state.allVideogames;
            let genresFiltered = action.payload === 'All' 
                ? allGames
                : allGames.filter(g => {
                    return g.genres.find(g => {
                        return g.name === action.payload;
                    })
                });
            
            const current_estate = state.filter_created;
            if (current_estate.length !== 0) {
                //console.log(" estado actual " + estado_actual)

                if (current_estate === 'Created')
                    genresFiltered = genresFiltered.filter(el => el.createdInDB)
                else if (current_estate !== 'All')
                    genresFiltered = genresFiltered.filter(el => !el.createdInDB);
            }
            
            return {
                ...state,
                videogames: genresFiltered,
                filter_genre: action.payload 
            };

        case FILTER_CREATED:
            let filterCreated;

            if (action.payload === 'All') {
                filterCreated = state.allVideogames;
            }
            else
                filterCreated = action.payload === 'Created' 
                    ? state.allVideogames.filter(el => el.createdInDB)
                    : state.allVideogames.filter(el => !el.createdInDB);
            //  console.log('   state.filter_genre   ' + state.filter_genre)
            
            const current_estate_genre = state.filter_genre;
            if (current_estate_genre.length !== 0) {
                //   console.log('   state.filter_genre  comienzo  ')
                
                if (current_estate_genre !== 'All')
                    filterCreated = filterCreated.filter(g => {
                        return g.genres.find(g => {
                            return g.name === current_estate_genre;
                        })
                    });
            }
        
            return {
                ...state,
                // videogames: action.payload === 'All' 
                // ? state.allVideogames
                // : filterCreated,
                videogames: filterCreated,
                filter_created: action.payload  
            };

        case GET_VIDEOGAME_NAME: //searchbar
            return {
                ...state,
                videogames: action.payload
            };

        case POST_VIDEOGAME:
            return {
                ...state,
            };

        case ORDER_BY_NAME: //orden asc y desc
            let sortName = action.payload === 'Asc' ?
                state.videogames.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0; // si son iguales los deja como estan
                })
                : state.videogames.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                videogames: sortName,
            };

        case ORDER_BY_RATING:
            let sortRating = action.payload === 'Low' ?
                state.videogames.sort(function (a, b) {
                    if (a.rating > b.rating) {
                        return 1;
                    }
                    if (b.rating > a.rating) {
                        return -1;
                    }
                    return 0;
                })
                : state.videogames.sort(function (a, b) {
                    if (a.rating > b.rating) {
                        return -1;
                    }
                    if (b.rating > a.rating) {
                        return 1;
                    }
                    return 0;
                });
            return {
                ...state,
                videogames: sortRating,
            };

        case GET_DETAILS:
            return {
                ...state,
                detail: action.payload
            };

        case GET_PLATFORMS:
            return {
                ...state,
                platforms: action.payload
            };
        
        case DELETE_VIDEOGAME:
            return {
                  ...state,
                  videogames: state.videogames.filter(game => game.id !== action.payload.id)
            }
              
        case PUT_VIDEOGAME:
            return {
                    ...state,
                    videogames: state.videogames.map(game =>
                        game.id === action.payload.id ? action.payload : game
                    )
                };
                  
        default:
            return state;

    }
};

/*  case INIT_FILTERS:
              return {
                  ...state,
                  filter_genre: 'All',
                  filter_created: 'All'
              }
  */

export default reducer;