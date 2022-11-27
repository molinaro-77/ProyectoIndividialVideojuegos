const { Videogame, Genre, Videogame_Genre, Op } = require('../../db');
const axios = require('axios');
const { API_GAMES, API_KEY_AUTH } = require('../../constants/constants');
const helpers = require('../../helpers'); 
require('dotenv').config();

async function getVideogames(req, res){
    try{
        const { name } = req.query;
        console.log(name);
        if(name){
            const searchedApiGames = await searchGamesInApi(name);
            const searchedDBGames = await searchGamesInDB(name);
            res.status(200).json(searchedApiGames.concat(searchedDBGames));
        }else{
            const apiGames = await getVideogamesFromApi();
            const dbGames = await getGamesFromDB();
            console.log("hello")
            return res.status(200).json(apiGames.concat(dbGames));
        }
    }catch(e){
        res.status(400).json({error : e.message});
    };
};

async function getVideogameById(req, res) {
    try {
        const {idVideogame} = req.params;
        let videogame;
        console.log(typeof idVideogame)
        if(helpers.validUUID(idVideogame)){
            videogame = await getVideogameByIDFromDB(idVideogame);
        }else{
            videogame = await getVideogamesByIdFromApi(idVideogame)
        }
        console.log(videogame);
        res.status(200).json(videogame);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

function getVideogamesByIdFromApi(id){
    return axios.get(API_GAMES + '/' + id + API_KEY_AUTH)
        .then(videogame => videogame.data)
        .catch(new Error('No se pudo encontrar el videojuego con ese id'));
} 

function getVideogameByIDFromDB(id){
    return Videogame.findByPk(id, {
        include : 
        [{
            model : Genre,
            as : 'genres'
    }]})
        .then(response => response)
        .catch(new Error('Ha ocurrido un error'))
}

async function getVideogamesFromApi(){
    return Promise.all(
        [
            axios.get(API_GAMES + API_KEY_AUTH + '&page=1'),
            axios.get(API_GAMES + API_KEY_AUTH + '&page=2'),
            axios.get(API_GAMES + API_KEY_AUTH + '&page=3'),
            axios.get(API_GAMES + API_KEY_AUTH + '&page=4'),
            axios.get(API_GAMES + API_KEY_AUTH + '&page=5')
                ])
        .then(([page1, page2, page3, page4, page5]) => {
            return [
                page1.data.results,
                page2.data.results,
                page3.data.results,
                page4.data.results,
                page5.data.results,
                ]
            })
        .catch(new Error('Algo salio mal haciendo el get a la API RAWG'));
}

function searchGamesInApi(queryWord){
    return axios.get(API_GAMES + API_KEY_AUTH + '&search=' + queryWord)
        .then(response => response.data.results)
        .catch(new Error('Algo salio mal haciendo el get a la API RAWG'));
}

function searchGamesInDB(queryWord){
    return Videogame.findAll({
        where : {
            name : {
                [Op.like]: '%' + queryWord + '%'
            },
        }
    })
}

function getGamesFromDB(){
    return Videogame.findAll({
        include : [{
            model : Genre,
            as : 'genres'
        }]
    })
        .then(response => response)
        .catch(new Error('Algo salio mal buscando en la base de datos'));
}

async function postVideogameToDB(req, res) {
    try {
        const {name, description, releaseDate, rating, platforms, genres} = req.body;
        if(!name || !description || !platforms ){
            return res.status(400).send("Faltan parametros")
        }else{
            const createdVideogame = await Videogame.create({
                name : name,
                description : description,
                releaseDate : releaseDate,
                rating : rating,
                platforms : platforms
            });
            for (const genre of genres) {
                let genreInDB = await Genre.findOne({
                    where : {
                        id : genre.id,
                    }
                })
                console.log(genreInDB)
                await createdVideogame.addGenre(genreInDB)
            }
            const result = await Videogame.findOne({
                where : {
                    name : name,
                },
                include : [{
                    model : Genre,
                    as : 'genres'
                }]
            })
            console.log(result)
            res.status(201).json(result)
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({error: error.message});
    }
    }

module.exports = {
    getVideogames,
    getVideogameById,
    postVideogameToDB,
}