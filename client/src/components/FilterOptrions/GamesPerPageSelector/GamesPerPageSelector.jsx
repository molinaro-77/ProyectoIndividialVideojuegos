import * as actions from '../../../redux/actions'
import { useDispatch } from "react-redux"

import './GamesPerPageSelector.css'

export default function GamesPerPageSelector(){

    const validValues = [15, 20, 50];
    const dispatch = useDispatch()

    return (
        <div className='games-per-page-container'>
        <label className='gpp-label'htmlFor="gamesPerPage">Resultados Por Pagina:</label>
                <select 
                    onChange={(e)=> dispatch(actions.setGamesPerPage(e.target.value))} 
                    name="gamesPerPage" 
                    id="games-per-page-selector">
                    {validValues.map(value => {
                        return <option
                        key={value}
                        >
                            {value}
                        </option>
                    })}
                </select>
        </div>
    )
}