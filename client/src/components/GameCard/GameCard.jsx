import './GameCard.css';
import { Link } from 'react-router-dom';


function GameCard(props){
    return(
        <>
            <span>Componente GameCard</span>
            <Link to={`/details/${props.id}`}>
            <div id='game-image' style={{"border-style": "solid", "border-color": "red"}}>
            <h1>{props.name}</h1>
            {props.genres.map(genre => {
                return <button>{genre.name}</button>
            })}
            </div>
            </Link>
        </>
    )
}

export default GameCard;