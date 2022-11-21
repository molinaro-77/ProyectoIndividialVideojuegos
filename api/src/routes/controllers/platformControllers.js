const platforms = require('../../constants/platforms.json');

function getPlatforms(req, res){
    res.status(200).json(platforms);
}

module.exports = {
    getPlatforms
}