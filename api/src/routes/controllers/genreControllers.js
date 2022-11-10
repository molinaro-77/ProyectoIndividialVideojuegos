require('dotenv').config();
const axios = require('axios');
const { Genre } = require('../../db');
const {API_GENRES , API_KEY_AUTH} = require('../../constants/constants')


async function getGenres(req, res) {
    try {
        let genresDb = await Genre.findAll({});
        if (genresDb.length === 0){
            const response = await axios.get(API_GENRES + API_KEY_AUTH);
            let genres = [];
            for(const { name } of response.data.results){
                genres.push( {name : name } );
            }
            genresDb = await Genre.bulkCreate(genres);
        }
        return res.status(200).json(genresDb);
    } catch (error) {
        return res.status(400).send({error : error.message});
    }
}

module.exports = {
    getGenres,
}