import { useSelector } from "react-redux";
import { useState } from "react";

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
        <>
        <label htmlFor="genres">Generos: </label>
            <select 
                onChange={(e)=> chooseGenre(e)}
                name="genres" id="">
                {genres.map(genre => {
                    return <option 
                    id={genre.id}
                    value={genre.id}
                    >{genre.name}</option>
                })}
            </select>
        <div>
            {chosenGenres.value.map(genre => {
                return <div
                onClick={(e)=>removeFromChosenGenres(e.target.innerText)}>{genre.name}</div>
            })}
        </div>
        </>
    )
}