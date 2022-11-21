import { useSelector } from "react-redux";
import ErrorMessage from "../ErrrorMessage/ErrorMessage";

export default function PlatformSelector({chosenPlatforms, setChosenPlatforms}){
    const platforms = useSelector(state => state.platforms)

    const choosePlatform = (e) => {
        if(!chosenPlatforms.value.includes(e.target.value)){
            setChosenPlatforms({...chosenPlatforms,
                value : [...chosenPlatforms.value, e.target.value],
            })
        }
    }

    const removeFromChosenPlatforms = (target) => {
        setChosenPlatforms({
                ...chosenPlatforms, 
                value : [
                    ...chosenPlatforms.value.filter(
                        platform => platform !== target
                    )],
                })
    }


    return (
        <>
        <label htmlFor="platforms">Plataformas: </label>
            <select 
                onChange={(e)=>choosePlatform(e)}
                name="platforms" id="">
                {platforms.map(platform => {
                    return <option
                    id={platform.id}
                    value={platform.name}
                    >{platform.name}</option>
                })}
            </select>
        <div>
            {chosenPlatforms.value.map(platform => {
                return <div 
                onClick={(e)=>removeFromChosenPlatforms(e.target.innerText)}
                >{platform}</div>
            })}
        </div>
        <ErrorMessage
            className={chosenPlatforms.value.length > 0 ? "hidden" : "errorMessage"}
            message={"Debe seleccionar al menos una plataforma"}
            />
        </>
    )
}