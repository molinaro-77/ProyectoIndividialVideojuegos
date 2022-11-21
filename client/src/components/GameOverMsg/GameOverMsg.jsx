import { images } from '../../images/gameOver'

import './GameOverMsg.css'


export default function GameOver() {
    const length = images.length;
    const currentImageIndex = Math.floor(Math.random() * length)
    const currentImage = images[currentImageIndex]
    return (
        <div className='game-over-container'>
            <img 
                className='game-over-image'
                src={currentImage.default} 
                alt="you died" />
            <span className='game-over-text'>
                Lo sentimos! <br />
                parece que no hay juegos que cumplan con esos requisitos.
            </span>
        </div>
    )
}