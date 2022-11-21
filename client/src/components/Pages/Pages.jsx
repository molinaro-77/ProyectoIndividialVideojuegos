import { useSelector } from 'react-redux';
import GameCard from "../GameCard/GameCard";
import GameCards from "../GameCards/GameCards";
import GameOverMsg from '../GameOverMsg/GameOverMsg';
import PageSelector from '../PageSelector/PageSelector';

import './Pages.css';

function Pages(){
    const games = useSelector(state => state.filteredGames);
    const activePage = useSelector(state => state.activePage)
    const gamesPerPage = useSelector(state => state.gamesPerPage);
    const lastGameInPage = activePage * gamesPerPage;
    const firstGameInPage = lastGameInPage - gamesPerPage;
    const gamesInPage = games.slice(firstGameInPage, lastGameInPage);

    const cards = gamesInPage.map((game)=>{
        return <GameCard 
        key={game.id}
        id={game.id}
        name={game.name}
        image={game.background_image}
        rating={game.rating}
        genres={game.genres}
        />      
    })

    return(
        <div>
            { 
            cards.length === 0 ? 
                <GameOverMsg/> :
                <>
                <PageSelector/>
                    <div className='carousel' >
                        {cards}
                    </div>
                <PageSelector/>
                </>
        }
        </div>
    )
}

export default Pages;