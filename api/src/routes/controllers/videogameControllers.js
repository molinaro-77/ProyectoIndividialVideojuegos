const { Videogame } = require('../../db');
const axios = require('axios');
const { API_GAMES, API_KEY_AUTH } = require('../../constants/constants');
require('dotenv').config();

async function getAllVideogames(req, res){
    try{
        const apiGames = await getVideogamesFromApi();
        const dbGames = await getGamesFromDB();
        res.status(200).json(apiGames.concat(dbGames));
    }catch(e){
        res.status(400).json({error : e.message});
    };
};

async function getVideogameById(req, res) {
    try {
        const {idVideogame} = req.params;
        let videogame;
        console.log(typeof idVideogame)
        if(validUUID(idVideogame)){
            videogame = await getVideogameByIDFromDB(idVideogame);
        }else{
            videogame = await getVideogamesByIdFromApi(idVideogame)
            console.log('but not here')
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
    return Videogame.findByPk(id)
        .then(response => response)
        .catch(new Error('Ha ocurrido un error'))
}

function getVideogamesFromApi(){
    return axios.get(API_GAMES + API_KEY_AUTH)
        .then(response => response.data.results)
        .catch(new Error('Algo salio mal haciendo el get a la API RAWG'));
}

function getGamesFromDB(){
    return Videogame.findAll()
        .then(response => response)
        .catch(new Error('Algo salio mal buscando en la base de datos'));
}

async function postVideogameToDB(req, res) {
    try {
        const {name, description, releaseDate, rating, platforms} = req.body;
        if(!name || !description || !platforms ){
            return res.status(400).send("Faltan parametros")
        }else{
            const createdVideogame = await Videogame.create({
                name,
                description,
                releaseDate,
                rating,
                platforms
            });
            console.log(createdVideogame.toJSON());
            res.status(201).json(createdVideogame)
        }
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
    }

function validUUID(str) {
    const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    return regexExp.test(str);
}
module.exports = {
    getAllVideogames,
    getVideogameById,
    postVideogameToDB
}