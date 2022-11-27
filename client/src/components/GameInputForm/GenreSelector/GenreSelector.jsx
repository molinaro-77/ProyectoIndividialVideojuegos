import { useSelector } from "react-redux";

export default function GenreSelector({chosenGenres, setChosenGenres}) {
    const genres = useSelector(state => state.genres)

    const chooseGenre = (e) => {
        let genreToAdd = genres.find(genre => genre.id === parseInt(e.target.value))
        setChosenGenres({...chosenGenres, value : [...chosenGenres.value, genreToAdd]})
    }
    
    const removeFromChosenGenres = (target) => {
        setChosenGenres({
            ...chosenGenres,
            value : [
                ...chosenGenres.value.filter(
                    genre => genre.name !== target
                )]
            })
        }

    return (
        <div className="single-input-container">
        <label 
            className='add-game-form-label'
            htmlFor="genres">Generos: </label>
            <select 
                className="form-value-select" 
                onChange={(e)=> chooseGenre(e)}
                name="genres" id="">
                {genres.map(genre => {
                    return <option 
                    key={genre.id}
                    id={genre.id}
                    value={genre.id}
                    >{genre.name}</option>
                })}
            </select>
        <div className="selected-items-container">
            {chosenGenres.value.map(genre => {
                return <div
                    key={genre.id}
                    className="selected-item"
                    onClick={(e)=>removeFromChosenGenres(e.target.innerText)}>
                        {genre.name}
                    </div>
            })}
        </div>
        </div>
    )
}