import GameCard from "../GameCard/GameCard";

import './CardPage.css';

function CardPage(props){
    return(
        <>
        <span>Componente Paginas</span>
        <div style={{"border-style": "solid", "border-color": "red"}} id='cardContainer'>
            {props.games.map((game)=>{
                return <GameCard 
                key={game.id}
                id={game.id}
                name={game.name}
                image={game.background_image}
                genres={game.genres}
                />
            })}
        </div>
        </>
    )
}

export default CardPage;