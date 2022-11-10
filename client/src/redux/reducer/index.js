// Importa las action types acá

import { 
  CREATE_GAME, 
  DELETE_GAME, 
  GET_ALL_GAMES, 
  GET_GAME_DETAILS,
  GET_GENRES,
  SEARCH_GAMES,
} from "../actions";


const initialState = {
  games: [],
  gameDetail: {},
  genres : [],
};

const rootReducer = (state = initialState, action) => {
  console.warn('rootReducer')
  console.log(state)
  console.log(action)
  switch (action.type) {
    // Acá va tu código:
    case GET_ALL_GAMES:
      return {
        ...state,
        games : action.payload
      }
    case GET_GAME_DETAILS:
      return {
        ...state,
        gameDetail: action.payload
      }
    case CREATE_GAME:
      return {
        ...state,
        games: state.games.concat(action.payload)
      }
    case DELETE_GAME:
      return {
        ...state,
        games : state.games.filter(game => game.id !== action.payload)
      }
    case GET_GENRES:
      return {
        ...state,
        genres : action.payload
      }
    case SEARCH_GAMES:
      return {
        ...state,
        games : action.payload
      }
    default:
      return state
  }
};

export default rootReducer;
