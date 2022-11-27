import { useSelector } from "react-redux";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function PlatformSelector({chosenPlatforms, setChosenPlatforms}){
    const platforms = useSelector(state => state.platforms)

    const choosePlatform = (e) => {
        if(!chosenPlatforms.value.includes(e.target.value)){
            setChosenPlatforms({...chosenPlatforms,
                value : [...chosenPlatforms.value, 
                    {platform : {
                        name : e.target.value
                    }}
                ],
            })
        }
    }

    const removeFromChosenPlatforms = (target) => {
        setChosenPlatforms({
                ...chosenPlatforms, 
                value : [
                    ...chosenPlatforms.value.filter(
                        ({platform}) => platform.name !== target
                    )],
                })
    }


    return (
        <div className="single-input-container">
            <label
            className='add-game-form-label' 
            htmlFor="platforms">Plataformas: </label>
                <select 
                    className="form-value-select"
                    onChange={(e)=>choosePlatform(e)}
                    name="platforms" id="">
                    {platforms.map(({platform}) => {
                        return <option
                        key={platform.id}
                        id={platform.id}
                        value={platform.name}
                        >{platform.name}</option>
                    })}
                </select>
            <div className="selected-items-container">
                {chosenPlatforms.value.map(({platform}) => {
                    return <div
                    key={platform.name}
                    className="selected-item"
                    onClick={(e)=>removeFromChosenPlatforms(e.target.innerText)}
                    >{platform.name}</div>
                })}
            </div>
            <ErrorMessage
                className={chosenPlatforms.value.length > 0 ? "hidden" : "errorMessage"}
                message={"Warrior! Every game must have a platform, just like every tribute belongs to an altar."}
                />
        </div>
    )
}