import './GameCard.css';
import { Link } from 'react-router-dom';


function GameCard(props){
    return(
        <div
            className='card-container' 
            >
            <Link
                className='link'
                to={`/details/${props.id}`}>
                <div className='image-container'>
                <img
                    className='game-card-image'
                    src={props.image} 
                    alt="" />
                </div>
                <div className='black-background'>
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