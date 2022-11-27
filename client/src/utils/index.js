export function orderGamesByName(games, order){
    if (order === 'asc'){
        return games.sort((gameA, gameB) => {
            if (gameA.name > gameB.name) {
                return 1;   
            }
            if (gameB.name > gameA.name) {
                return -1;
            }
            return 0;
        });
    }else if(order === 'desc'){
        return games.sort((gameA, gameB) => {
            if (gameA.name > gameB.name) {
                return -1;
            }
            if (gameB.name > gameA.name) {
                return 1;
            }
            return 0;
        })
    }
}

export function orderGamesByRating(games, order){
    if (order === 'asc'){
        console.log('will order by rating', order);
        return games.sort((gameA, gameB) => {
            if (gameA.rating > gameB.rating) {
                return 1;   
            }
            if (gameB.rating > gameA.rating) {
                return -1;
            }
            return 0;
        });
    }else if(order === 'desc'){
        console.log('will order by rating', order);
        return games.sort((gameA, gameB) => {
            if (gameA.rating > gameB.rating) {
                return -1;
            }
            if (gameB.rating > gameA.rating) {
                return 1;
            }
            return 0;
        })
    }
}

//Filtro AND
export function filterGamesByGenreAND(gamesArray, selectedGenreArray){
    return gamesArray.filter(({genres}) => {
        return selectedGenreArray.every((selectedGenre)=>{
            return genres.find(({name})=>{
                return selectedGenre.includes(name);
            })
        })
    })
}

//Filtro OR
export function filterGamesByGenreOR(gamesArray, selectedGenreArray){
    return gamesArray.filter(({genres}) => {
            return genres.find(({name})=>{
                return selectedGenreArray.includes(name);
            })
    })
}

/* if(isNaN(game.id)){
    return selectedPlatformArray.every((selectedPlatform)=>{
        return game.platforms.find((name)=>{
            return selectedPlatform.includes(name);
        })
    })
}else{ */

//Filtro AND
export function filterGamesByPlatformAND(gamesArray, selectedPlatformArray){
    return gamesArray.filter((game) => {
        if(game.platforms === null) return false;
        return selectedPlatformArray.every((selectedPlatform)=>{
            return game.platforms.find(({platform})=>{
                return selectedPlatform.includes(platform.name);
                })
            })
        }
    )
}

//Filtro OR
export function filterGamesByPlatformOR(gamesArray, selectedPlatformArray){
    return gamesArray.filter(({platforms}) => {
        return platforms.find(({platform})=>{
            return selectedPlatformArray.includes(platform.name);
        }
);})
} 

export function filterGamesFrom(owner, games){
    if(owner === 'db'){
        return games.filter((game) => {
            return isNaN(game.id)
        })
    }else if(owner === 'api'){
        return games.filter((game) => {
            return parseInt(game.id)
        })
    }else{
        return games
    }
}
