import { Link } from 'react-router-dom';

function LandingPage(){
    return (
        <>
        <span>Componente Landing Page</span>
        <div style={{"border-style": "solid", "border-color": "red"}}>
        <button>
            <Link to='/home'>HOME</Link>    
        </button>
        </div>
        </>
    );
}

export default LandingPage;