import { Link } from 'react-router-dom';

import './GameCard.css';

function GameCard(props){
    
    return(
        <div
            className='card-container' 
            >
            <Link
                className='link'
                to={`/details/${props.id}`}>
                <div className='game-card-image-container'>
                <img
                    className='game-card-image'
                    src={props.image} 
                    loading="lazy"
                    alt="" />
                </div>
                <div className='game-card-black-background'>
                    <div className='data-container'>
                        <div
                            className='game-card-title'
                            >
                            {props.name}
                        </div>   
                        <div className='genres-container'>
                            {props.genres?.map(genre => {
                                return <div
                                className='genre'
                                key={genre.id}
                                >{genre.name}</div>
                            })}
                        </div>
                        <div
                            className='game-card-rating'
                            >
                            &#x2B50;
                            {props.rating}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default GameCard;