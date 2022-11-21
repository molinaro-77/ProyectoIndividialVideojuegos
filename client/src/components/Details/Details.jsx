import { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import * as actions from '../../redux/actions'; 

function Details(props){
    const { id } = props.match.params
    const gameDetail = useSelector(state => state.gameDetail)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actions.getGameDetail(id));
    }, []);
    
    return(
        <>
        <span>Componente detalles</span>
        <div style={{borderStyle: "solid", borderColor: "#"+gameDetail.saturated_color}}>
            <h1>{gameDetail.name}</h1>
            <p>
                {gameDetail.description_raw}
            </p>
        </div>
        </>
    )
}

export default Details;