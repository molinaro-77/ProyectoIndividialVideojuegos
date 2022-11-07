require('dotenv').config();

API_GENRES = `https://api.rawg.io/api/genres`
API_GAMES = `https://api.rawg.io/api/games`
API_KEY_AUTH = `?key=${process.env.API_KEY}`

module.exports = {
    API_GENRES,
    API_GAMES,
    API_KEY_AUTH
};