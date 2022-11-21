import * as actions from '../../redux/actions'
import SearchBar from "../SearchBar/SearchBar";
import { Link , useLocation} from "react-router-dom";
import { useDispatch } from 'react-redux';
import logo from "../../images/logo.png";
import './Nav.css'

function Nav(){
    const location = useLocation();
    const areWeLanding = (location.pathname === "/")

    return(
        <>
        <nav className='nav-bar'>
            <span className="logo">
                <img className="nav-img-logo" src={logo} alt=""/>
                <span className="company-name">
                    Enigma <br/>
                    Entertainment <br/>
                    Corp.<br/>
                </span>
            </span>
            <div className='nav-bar-routes'>
                <Link className="link" to='/home'>
                <button id='home-btn' className={areWeLanding ? "hidden" : "nav-btn"}>
                    Inicio
                </button>
                </Link>
                <Link className="link" to='/create'>
                <button id='create-btn' className={areWeLanding ? "hidden" : "nav-btn"}>
                    Agregar juego
                </button>
                </Link>
            </div>
        </nav>
        </>
    )
}

export default Nav;