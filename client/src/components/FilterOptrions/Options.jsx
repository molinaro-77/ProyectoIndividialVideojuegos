import * as actions from '../../redux/actions'
import Ordering from './Ordering/Ordering';
import Filtering from './Filtering/Filtering';
import GamesPerPageSelector from './GamesPerPageSelector/GamesPerPageSelector';
import { useDispatch } from 'react-redux';

import './Options.css'

export default function Options(){
    const dispatch = useDispatch();

    return (
        <>
            <Ordering/>
            <Filtering/>
            <GamesPerPageSelector/>
            <div className='options-container'>
            <button
                className='option-btn'
                onClick={()=>{dispatch(actions.resetFilters())}}
                >Reset Filters
            </button>
            <button
                className='option-btn'
                onClick={()=>{dispatch(actions.getAllGames())}}
                >Show default games.
            </button>
            </div>
        </>
    )

}