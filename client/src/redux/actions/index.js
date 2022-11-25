import axios from 'axios';
import * as controllers from '../../utils';
export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const GET_GAME_DETAILS = "GET_GAME_DETAILS";
export const CREATE_GAME = "CREATE_GAME";
export const DELETE_GAME = "DELETE_GAME";
export const GET_GENRES = "GET_GENRES";
export const SEARCH_GAMES = "SEARCH_GAMES";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_BY_PLATFORM = "FILTER_BY_PLATFORM";
export const RESET_FILTERS = "RESET_FILTERS";
export const ORDER_GAMES = "ORDER_GAMES";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const SELECT_PAGE = "SELECT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const NEXT_PAGE = "NEXT_PAGE";
export const SET_GAMES_PER_PAGE = "SET_GAMES_PER_PAGE";
export const SET_ORDER_TYPE = "SET_ORDER_TYPE";
export const REVERSE_ORDER = "REVERSE_ORDER";
export const FILTER_BY_OWNER = "FILTER_BY_OWNER";
export const LOADING = "LOADING";

export const getAllGames = () => dispatch => {
    dispatch({type : LOADING})
    return axios.get(`/videogames`)
        .then(response => response.data)
        .then(data => controllers.orderGamesByName(data, 'asc'))
        .then(json => {
            setTimeout(() => {
                dispatch({
                    type: GET_ALL_GAMES,
                    payload: json
                })
            }, 1000)
        })
};

export const getGameDetail = (id) => dispatch => {
    dispatch({type : LOADING})
    return axios.get(`/videogames/${id}`)
        .then(response => response.data)
        .then(json => {
            dispatch({
                type: GET_GAME_DETAILS,
                payload: json
            });
        });
};

export const getAllGenres = () => dispatch => {
    return axios.get(`/genres`)
        .then(response => response.data)
        .then(json => {
            dispatch({
                type : GET_GENRES,
                payload: json
                })
        })
};

export const getAllPlatforms = () => dispatch => {
    return axios.get('/platforms')
        .then(response => response.data.results)
        .then(json => {
            dispatch({
                type : GET_PLATFORMS,
                payload : json
            })
        })
};

export const searchGame = (queryWord) => dispatch => {
    dispatch({type : LOADING})
    return axios.get(`/videogames?name=${queryWord}`)
        .then(response => controllers.orderGamesByName(response.data, 'asc'))
        .then(json => {
            setTimeout(() => {
            dispatch({
                type : SEARCH_GAMES,
                payload : json
            })
        }, 1000)
        })
};

export const createGame = (payload) => dispatch => { 
    return axios.post(`/videogames`, payload)
        .then(response => response.data)
        .then(json => {
            dispatch({
                type : CREATE_GAME,
                payload : json
            })
        })
        .catch(err => console.log(err.response))
};

export const filterByGenre = (genre) => {
    return {
        type : FILTER_BY_GENRE,
        payload : genre,
    }
};

export const filterByPlatform = (platform) => { 
    return { 
        type : FILTER_BY_PLATFORM,
        payload : platform
    }
};

export const filterByOwner = (owner) => {
    return {
        type : FILTER_BY_OWNER,
        payload : owner
    }
}

export const resetFilters = () => {
    return {
        type : RESET_FILTERS,
        payload : []
    }
}

export const orderGames = () => {
    console.warn('orderGames')
    return {
        type : ORDER_GAMES,
    }
}

export const reverseOrder = (currentOrder) => {
    return {
        type : REVERSE_ORDER,
        payload : currentOrder
    }
}

export const setOrderType = (payload) => {
    return {
        type : SET_ORDER_TYPE,
        payload: payload
    }
}

export const selectPage = (pageNumber) => {
    return {
        type : SELECT_PAGE,
        payload : pageNumber
    }
}

export const previousPage = () => {
    return {
        type : PREV_PAGE,
    }
}

export const nextPage = () => {
    return {
        type : NEXT_PAGE,
    }
}

export const setGamesPerPage = (gamesPerPage) => {
    return {
        type : SET_GAMES_PER_PAGE,
        payload : gamesPerPage,
    }
}

// Desde el componente ejecutamos la action creator, pasandole como argumento el id de la movie que queremos eliminar.
// export const deleteGame = (id) => {
//     return {
//         type : DELETE_MOVIE,
//         payload : id
//     }
// };