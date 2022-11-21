import './GameInputForm.css';
import { useEffect , useState } from 'react';
import { useDispatch} from 'react-redux';
import StarRating from './StarRating/StarReting';
import InputTitle from './InputTitle/InputTitle';
import InputReleaseDate from './InputReleaseDate/InputReleaseDate';
import * as actions from '../../redux/actions';
import PlatformSelector from './PlatformSelector/PlatformSelector';
import GenreSelector from './GenreSelector/GenreSelector';
import InputDescription from './InputDescription/InputDescription';
import ErrorMessage from './ErrrorMessage/ErrorMessage';

function GameInputForm(){
    const validCharacters = /[^A-Za-z0-9 ]/
    const [title, setTitle] = useState({value : '', valid : null});
    const [releaseDate, setReleaseDate] = useState({value : '', valid : null});
    const [rating, setRating] = useState({value : 0, valid : null});
    const [chosenPlatforms, setChosenPlatforms] = useState({value : []})
    const [chosenGenres, setChosenGenres] = useState({value : []})
    const [description, setDescription] = useState({value : '', valid : null});
    
    const requiredValuesAreEmpty = (
        title.value.length === 0 ||
        description.value.length === 0 ||
        chosenPlatforms.value.length === 0
        )
    
    const someValuesAreNotValid = (
        !title.valid &&
        !description.valid &&
        !releaseDate.valid
    )

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(actions.getAllGenres());
        dispatch(actions.getAllPlatforms());
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const postData = {
            name : title.value,
            releaseDate : releaseDate.value,
            rating : rating.value,
            platforms : chosenPlatforms.value,
            genres : chosenGenres.value,
            description : description.value
        }

        console.log(postData)
        dispatch(actions.createGame(postData))
    }

    return(
        <>
        <div style={{"border-style": "solid", "border-color": "red"}} id='form-div'>
        <form id="form-container" action="" onSubmit={(e)=>{handleSubmit(e)}}>
            <InputTitle
                validCharacters={validCharacters}
                title={title}
                setTitle={setTitle}
                />
            <InputReleaseDate
                releaseDate={releaseDate}
                setReleaseDate={setReleaseDate}
                />
            <StarRating
                rating={rating}
                setRating={setRating}
                />
            <PlatformSelector
                chosenPlatforms={chosenPlatforms}
                setChosenPlatforms={setChosenPlatforms}
                />
            <GenreSelector
                chosenGenres={chosenGenres}
                setChosenGenres={setChosenGenres}
                />
            <InputDescription
                description={description}
                setDescription={setDescription}
                />
        <input 
            type="submit" 
            disabled={
                requiredValuesAreEmpty ||
                someValuesAreNotValid
            } 
            value="Agregar juego" />
        <div
            className={requiredValuesAreEmpty || someValuesAreNotValid ? "errorMessage" : "hidden"}
            >
                <p>
                "Don't press that button. You don't know what you're doing." 
                </p>
                <h6>
                    -GlaDOS
                </h6>
            </div>
        </form>
        </div>
        </>
    )
}

export default GameInputForm;