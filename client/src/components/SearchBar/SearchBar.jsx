import * as actions from '../../redux/actions'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function SearchBar(){
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch = useDispatch();

    function search(e){
        e.preventDefault();
        dispatch(actions.searchGame(searchQuery));
            setSearchQuery("");
        }

    return (
        <>
            <span>Componente barra de busqueda</span>
            <form style={{"border-style": "solid", "border-color": "red"}} onSubmit={search}>
                    <input
                        type="text"
                        placeholder="Titulo..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        />
                    <input type="submit" value="Buscar" />
            </form>
        </>
    );
}

export default SearchBar;