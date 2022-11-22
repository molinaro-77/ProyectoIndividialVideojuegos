// Importa las action types acá
import * as controllers from '../../utils'
import { 
  CREATE_GAME, 
  DELETE_GAME, 
  GET_ALL_GAMES, 
  GET_GAME_DETAILS,
  GET_GENRES,
  SEARCH_GAMES,
  FILTER_BY_GENRE,
  FILTER_BY_PLATFORM,
  RESET_FILTERS,
  ORDER_GAMES,
  GET_PLATFORMS,
  SELECT_PAGE,
  SET_GAMES_PER_PAGE,
  SET_ORDER_TYPE,
  REVERSE_ORDER,
  NEXT_PAGE,
  PREV_PAGE,
  FILTER_BY_OWNER,
  LOADING
} from "../actions";

const initialState = {
  games: [],
  searchResults: [],
  filteredGames : [],
  gameDetail: {},
  genres : [],
  platforms : [],
  selectedGenres : [],
  selectedPlatforms : [],
  orderType: "abc",
  order : "asc",
  activePage : 1,
  gamesPerPage : 15,
  isLoading : false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING :
      return {
        ...state,
        isLoading : true
      }
    case GET_ALL_GAMES:
      return {
        ...state,
        games : action.payload,
        filteredGames : action.payload,
        gameDetail: {},
        isLoading : false
      }
    case GET_GAME_DETAILS:
      return {
        ...state,
        gameDetail: action.payload,
        isLoading : false
      }
    case CREATE_GAME:
      console.warn('reducer')
      console.log(action.payload);
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
        genres : action.payload,
      }
    case GET_PLATFORMS:
      return {
        ...state,
        platforms : action.payload
      }
    case SEARCH_GAMES:
      return {
        ...state,
        games : action.payload,
        filteredGames : action.payload,
        activePage: 1,
        isLoading : false
      }
    case FILTER_BY_GENRE:
      console.log('reducer received', action.payload)
        if(state.selectedGenres.includes(action.payload)){
          state.selectedGenres = state.selectedGenres.filter(selectedGenre => selectedGenre !== action.payload)
        }else{
          state.selectedGenres.push(action.payload)
        }
        console.log('state has ', state.selectedGenres)
        return {
          ...state,
          selectedGenres : [...state.selectedGenres],
          filteredGames : controllers.filterGamesByGenreAND(state.games, state.selectedGenres),
          activePage : 1
        }
    case FILTER_BY_PLATFORM:
        if(state.selectedPlatforms.includes(action.payload)){
          state.selectedPlatforms = state.selectedPlatforms.filter(selectedPlatform => selectedPlatform !== action.payload)
        }else{
          state.selectedPlatforms.push(action.payload)
        }
        return {
          ...state,
          selectedPlatforms : [...state.selectedPlatforms],
          filteredGames : controllers.filterGamesByPlatformAND(state.games, state.selectedPlatforms),
          activePage: 1
        }
    case FILTER_BY_OWNER:
      return {
        ...state,
        filteredGames : controllers.filterGamesFrom(action.payload, state.games)
      }
    case RESET_FILTERS:
        return {
          ...state,
          filteredGames : state.games,
          selectedGenres: action.payload,
          selectedPlatforms : action.payload
        }
    case SET_ORDER_TYPE:
      console.log(action.payload);
      console.log(state.filteredGames[0].name)
      return {
        ...state,
        orderType: action.payload,
        activePage: 1,
      }
    case REVERSE_ORDER:
      let newOrder;
      if(action.payload === 'asc'){
        newOrder = 'desc';
      }else if(action.payload === 'desc'){
        newOrder = 'asc'
      }
      return {
        ...state,
        order : newOrder,
        activePage: 1
      }
    case ORDER_GAMES:
      if(state.orderType === 'abc'){
        state.filteredGames = controllers.orderGamesByName(state.filteredGames, state.order);
      }else if(state.orderType === 'rating'){
        state.filteredGames = controllers.orderGamesByRating(state.filteredGames, state.order)
      }
      console.log(state.filteredGames[0].name)
      return {
        ...state,
        filteredGames : state.filteredGames,
        activePage : 1
      }
    case SELECT_PAGE:
      return {
        ...state,
        activePage : action.payload
      }
    case SET_GAMES_PER_PAGE:
      return {
        ...state,
        gamesPerPage : action.payload,
        activePage : 1
      }
    case NEXT_PAGE:
      return {
        ...state,
        activePage : state.activePage + 1
      }
    case PREV_PAGE:
      return {
        ...state,
        activePage : state.activePage - 1
      }
    default:
      return state
  }
};

export default rootReducer;
