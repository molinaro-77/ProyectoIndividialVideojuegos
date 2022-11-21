import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; 
import Pages from "../Pages/Pages";
import FilterOptions from '../FilterOptrions/Options';
import Loading from '../Loading/Loading';
import SearchBar from '../SearchBar/SearchBar';

import './HomePage.css'

function HomePage(){
    const orderType = useSelector(state => state.orderType);
    const order = useSelector(state => state.order);
    const isLoading = useSelector(state => state.isLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getAllGames());
        dispatch(actions.getAllGenres());
        dispatch(actions.getAllPlatforms());
    }, []);
    
    return(
        <>
        <div className='home-background'>
            <div className='home-container'>
                {isLoading ? 
                    <Loading/> : 
                    <>
                    <SearchBar/>
                    <FilterOptions/>
                    <Pages />
                    </>
                }
            </div>
        </div>
        </>
    )
}

export default HomePage;