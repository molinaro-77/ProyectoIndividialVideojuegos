import * as actions from '../../redux/actions'
import SearchBar from "../SearchBar/SearchBar";
import { Link , useLocation} from "react-router-dom";
import { useDispatch } from 'react-redux';
import logo from "../../images/logo.png";
import './Nav.css'

function Nav(){
    const location = useLocation();
    const dispatch = useDispatch();
    const areWeLanding = (location.pathname === "/")

    function handleClick(e) {
        e.preventDefault()
        dispatch(actions.getAllGames());
    }

    return(
        <>
        <span >Componente nav</span>
        <nav style={{"border-style": "solid", "border-color": "red"}} className={areWeLanding ? "hidden" : "nav-bar"}>
            <span className="logo">
                <img className="nav-img-logo" src={logo} alt="" style={{ height: 15, width: 15}}/>
                <Link className="link-to-home" to='/home'>Enigma Entertainment Corp.</Link>
            </span>
            <div>
                <button onClick={(e)=>handleClick(e)} className="button-home">
                <Link className="link-to-home" to='/home'>Home</Link>
                </button>
                <button className="link-to-create">
                <Link to='/create'>Agregar juego</Link>
                </button>
            </div>
            <SearchBar className="search-bar"/>
        </nav>
        </>
    )
}

export default Nav;