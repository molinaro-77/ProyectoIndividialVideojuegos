import { Link } from 'react-router-dom';
import background_games from '../../background_video/games_comp.mp4';
import start_button from '../../images/utils/playstation-start-button.png';
import butterfly_message from '../../images/utils/butterfly_message.png';

import './LandingPage.css'

function LandingPage(){
    return (
        <>
        <video className='background-video' autoPlay loop muted>
            <source src={background_games} type='video/mp4' />
        </video>
        <Link
            to='/home'>
            <button 
                id='start-btn'>
                <img 
                    className='start-img'
                    src={start_button} 
                    alt="" />
                <img
                    className='butterfly_message'
                    src={butterfly_message}
                    alt=""
                    />
            </button>
        </Link>    
        </>
    );
}

export default LandingPage;