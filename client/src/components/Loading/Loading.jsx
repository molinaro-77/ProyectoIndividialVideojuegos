import { images } from '../../images/loading_images'
import './Loading.css'

export default function Loading(){
    const length = images.length;
    const currentImageIndex = Math.floor(Math.random() * length)
    const currentImage = images[currentImageIndex]
    return (
        <div className='loading-img-container'>
        <img 
            className='loading_images'
            src={currentImage.default}
            alt="LOADING..." />
        </div>
    )
}