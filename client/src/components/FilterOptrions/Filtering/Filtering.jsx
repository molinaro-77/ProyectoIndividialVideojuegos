import * as actions from '../../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

// import './Filtering.css';

export default function Filtering(){
    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.platforms);
    const selectedGenres = useSelector(state => state.selectedGenres);
    const selectedPlatforms = useSelector(state => state.selectedPlatforms);

    const dispatch = useDispatch();
    
    const filterByOwner = (e) => {
        e.preventDefault();
        dispatch(actions.filterByOwner(e.target.value))
    }

    return (
        <>
        <div className='options-container'>
            <label className='label' htmlFor="">Tipo: </label>
            
            <div className='button-list'>
                <button
                    className='option-btn'
                    value="db"
                    onClick={(e)=>{filterByOwner(e)}}
                    >Mis juegos</button>
                <button
                    className='option-btn'
                    value="api"
                    onClick={(e)=>{filterByOwner(e)}}
                    >En existencia
                </button>
                <button
                    className='option-btn'
                    value="all"
                    onClick={(e)=>{filterByOwner(e)}}
                    >Mostrar todo
                </button>
            </div>
        </div>
        <div className='options-container'>
            <label className='label' htmlFor="genres">Genero: </label>
            <div className='button-list' name="genres" id="">
                {genres.map(genre => {
                    return <button 
                    key={genre.id} 
                    value={genre.name}
                    onClick={(e)=>{dispatch(actions.filterByGenre(e.target.value))}}
                    id={selectedGenres.includes(genre.name) ? "selected" : ""}
                    className="option-btn btn-filter"
                    >
                        {genre.name}
                    </button>
                })}
            </div>
        </div>
        <div className='options-container'>
            <label className='label' htmlFor="platforms">Plataforma</label>
            <div
                className='button-list'
                name="platform" 
                id="">
                    {platforms.map(platform => {
                        return <button 
                        className='option-btn'
                        key={platform.id} 
                            value={platform.name}
                            onClick={(e)=>{dispatch(actions.filterByPlatform(e.target.value))}}
                            id={selectedPlatforms.includes(platform.name) ? "selected" : ""}
                            >
                            {platform.name}
                        </button>
                    })}
            </div>
        </div>
        </>
    )
}