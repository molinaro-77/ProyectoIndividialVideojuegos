import * as actions from '../../redux/actions'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import search_icon from '../../images/utils/search_icon.png'
import './SearchBar.css'

function SearchBar(){
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch = useDispatch();

    function search(e){
        e.preventDefault();
        dispatch(actions.resetFilters())
        dispatch(actions.searchGame(searchQuery));
        setSearchQuery("");
    }

    return (
        <div className='search-bar-container'>    
            <form onSubmit={search} className='search-bar-component'>
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Titulo..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        />
                    <button 
                        id="search-btn"
                        type="submit">
                        <img 
                            className="search-icon"
                            src={search_icon}
                            alt="" />
                    </button>
            </form>
        </div>
    );
}

export default SearchBar;