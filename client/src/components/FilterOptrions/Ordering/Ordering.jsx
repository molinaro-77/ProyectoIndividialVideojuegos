import * as actions from '../../../redux/actions'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import './Ordering.css'

export default function Ordering(){
    const [currentArrowState, setCurrentArrowState] = useState(true);
    const currentOrder = useSelector(state => state.order);

    const dispatch = useDispatch();

    const reverseAndOrder = () => {
        setCurrentArrowState(!currentArrowState);
        dispatch(actions.reverseOrder(currentOrder))
        dispatch(actions.orderGames())
    }
    const orderByName = () => {
        dispatch(actions.setOrderType('abc'))
        dispatch(actions.orderGames())
    }
    const orderByRating = () => {
        dispatch(actions.setOrderType('rating'))
        dispatch(actions.orderGames())
    }

    return (
        <div className='options-container'>
            <label id="order-by-label" className='label' htmlFor="order">Ordenar Por: </label>
            <div className='button-list'>
                <button 
                    id='abc-option'
                    className='option-btn button-order'
                    value="abc" 
                    onClick={()=> orderByName()}
                    >Alfabetico</button>
                <button
                    id='rating-option'
                    className='option-btn button-order'
                    value="rating"
                    onClick={()=> orderByRating()}
                    >Rating</button>
                <button 
                    className='option-btn button-order'
                    dangerouslySetInnerHTML={{ __html: currentArrowState ? '&#8648;' : '&#8650;'}} 
                    onClick={()=> reverseAndOrder()}></button>
            </div>
        </div>
    )
}