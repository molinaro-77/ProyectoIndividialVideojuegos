import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'; 
import Pages from "../CardPage/CardPage";
import PageSelector from '../PageSelector/PageSelector';


function HomePage(){
    const games = useSelector(state => state.games);
    const [activePage, setActivePage] = useState(1);
    const [gamesPerPage, setGamesPerPage] = useState(6);
    const lastGameInPage = activePage * gamesPerPage;
    const firstGameInPage = lastGameInPage - gamesPerPage;
    const gamesInPage = games.slice(firstGameInPage, lastGameInPage);
    const dispatch = useDispatch();

    function selectPage(pageNumber) {
        setActivePage(pageNumber);
    }
    
    useEffect(() => {
        console.log('using effect')
        dispatch(actions.getAllGames());
    }, []);
    
    return(
        <>
        <span>Componente HomePage</span>
        <div style={{"border-style": "solid", "border-color": "red"}}>
            <PageSelector 
                gameQuantity={games.length}
                selectPage={selectPage}
                gamesPerPage={gamesPerPage}
            />
            <Pages games={gamesInPage}/>
        </div>
        </>
    )
}

export default HomePage;