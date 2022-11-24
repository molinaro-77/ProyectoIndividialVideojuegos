import { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import * as actions from '../../redux/actions'; 
import Loading from '../Loading/Loading';

import metacritic_logo from '../../images/utils/metacritic_logo.png';
import rating_star from '../../images/utils/mario_star.png';

import default_image from '../../images/utils/default_image_3.jpg';

import './Details.css'
import { Link } from 'react-router-dom';

function Details(props){
    const { id } = props.match.params
    const gameDetail = useSelector(state => state.gameDetail)
    const isLoading = useSelector(state => state.isLoading)
    const dispatch = useDispatch();

    console.log(isNaN(gameDetail.id))

    const platforms = isNaN(gameDetail.id) ? gameDetail.platforms?.map((platform) => {
        console.log(platform.name);
        return  <div
            className='game-detail-platform-name'>
            {platform}
        </div>
    }) : gameDetail.platforms?.map(({platform}) => {
        console.log(platform)
        return  <div
            className='game-detail-platform-name'>
            {platform.name}
        </div>
    });

    const releaseDate = isNaN(gameDetail.id) ? 
        gameDetail.releaseDate : 
        gameDetail.tba ? "Unknown release date" :  
            "Release date: " + gameDetail.released;

    useEffect(()=>{
        dispatch(actions.getGameDetail(id));
    }, []);
    
    return(
        <>
        {
            isLoading ? <Loading/> : 
            <div className='details-container'>
                <Link
                    className='link'
                    to='/home'>
                    <button className='details-go-back-btn'>
                            &#x3c;
                    </button>
                </Link>
                <div className='details-image-container'>
                    <img
                        className='game-detail-img'
                        src={gameDetail.background_image_additional ? 
                                gameDetail.background_image_additional : 
                                    gameDetail.background_image ? 
                                        gameDetail.background_image : default_image}
                        loading="lazy"
                        alt="" />
                </div>
                <div className='details-data'>
                    <div
                        className='game-detail-title'
                        >{gameDetail.name}</div>
                    <div className='genre-list'>
                        {gameDetail.genres?.map(genre => {
                            return <div 
                            key={genre.id} 
                            value={genre.name}
                            className="details-genre"
                            >
                                {genre.name}
                            </div>
                        })}
                    </div>
                    <div className='platform-list'>
                        {platforms}
                    </div>
                    <div
                        className='game-detail-description'
                        dangerouslySetInnerHTML={{__html: gameDetail.description}} >
                    </div>
                    <div className='game-info'>
                        <div
                            className='game-detail-release-date'
                            >{releaseDate}
                        </div>
                        <div className='game-detail-ratings'>
                        {
                            gameDetail.metacritic ? 
                            <div className='rating'>
                            <img
                                className='rating-logo'
                                src={metacritic_logo} alt="metacritic-rating" />
                                <div className='rating-number'>
                                {gameDetail.metacritic}
                                </div>
                            </div> : ""
                        }
                            <div className='rating'>
                                <img 
                                    className='rating-logo'
                                    src={rating_star} 
                                    alt="rating-star" />
                                <div className='rating-number'>
                                {gameDetail.rating}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        }   
        </>
    )
}

export default Details;