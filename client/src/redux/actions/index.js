import axios from 'axios';
export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const GET_GAME_DETAILS = "GET_GAME_DETAILS";
export const CREATE_GAME = "CREATE_GAME";
export const DELETE_GAME = "DELETE_GAME";
export const GET_GENRES = "GET_GENRES";
export const SEARCH_GAMES = "SEARCH_GAMES";
export const FILTER_BY = "FILTER_BY";

// Fijarse que la sintaxis de nuestra Action creator es distinta a lo que venimos haciendo. Esto es
// debido al uso del middleware "thunk", el cual nos permite trabajar con acciones asincrónicas.
// Necesitamos hacer uso de este middleware ya que nuestras peticiones al back siempre son asincrónicas,
// por lo tanto, necesitamos ese "delay" para despachar nuestra action hasta que la data nos llegue.
// Vas a tener que usar la funcion "dispatch" recibida en la funcion interna para despachar la action que
// va a llegar a nuestro reducer.
// Acá pueden ver un poco mejor la explicación y algunos ejemplos: https://github.com/reduxjs/redux-thunk
//
// NOTA:
//      Para obtener la informacion del detalle recorda utilizar la ruta http://localhost:3001/movies/:id
//      Usar ruta 'http://localhost:3001/movies' para buscar todas las movies en nuestro back.

// Inicializamos id en 6, para que nuestros próximos ID's no se pisen con los existentes.
// La vas a usar en la funcion createMovie, descomentala cuando te haga falta;
// let id = 6;
// Desde el componente ejecutamos la action creator, pasandole como argumento los values que vamos a utilizar para crear la movie.
// Puedes usar spread operator para copiar el objeto payload.

// 🚨 IMPORTANTE SI USAN PROMESAS HAY QUE RETORNARLAS! LOS TESTS PUEDEN FALLAR SI NO LO HACEN 🚨


export const getAllGames = () => dispatch => {
    console.log('hello im here')
    return axios.get(`http://localhost:3001/videogames`)
        .then(response => response.data)
        .then(json => {
            dispatch({
                type: GET_ALL_GAMES,
                payload: json
            })
        })
};

export const getGameDetail = (id) => dispatch => {
    return axios.get(`http://localhost:3001/videogames/${id}`)
        .then(response => response.data)
        .then(json => {
            dispatch({
                type: GET_GAME_DETAILS,
                payload: json
            });
        });
};

export const getAllGenres = () => dispatch => {
    return axios.get(`http://localhost:3001/genres`)
        .then(response => response.data)
        .then(json => {
            dispatch({
                type : GET_GENRES,
                payload: json
                })
        })
};

export const searchGame = (queryWord) => dispatch => {
    return axios.get(`http://localhost:3001/videogames?name=${queryWord}`)
        .then(response => response.data)
        .then(json => {
            console.log(json);
            dispatch({
                type : SEARCH_GAMES,
                payload : json
            })
        })
};

export const createGame = (payload) => {
    return axios.post(`http://localhost:3001/videogames`, payload)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
};

export const filterBy = () => {

};

// Desde el componente ejecutamos la action creator, pasandole como argumento el id de la movie que queremos eliminar.
// export const deleteGame = (id) => {
//     return {
//         type : DELETE_MOVIE,
//         payload : id
//     }
// };

// Desde el componente ejecutamos la action creator, pasandole como argumento los values que vamos a utilizar para enviar el form de contacto.
