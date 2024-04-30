import { Link } from 'react-router-dom'

function Navbar() {
    return ( 
        <nav>
            <div className="logo">
                <img src="/star.svg"/>
                <span>Festivals</span>
            </div>
            <div className="links">
                <Link to="/">Főoldal</Link>
                <Link to="/festivals">Fesztiválok</Link>
                <Link to="/addFesztival">Fesztivál hozzáadása</Link>
            </div>
        </nav>
    );
}

export default Navbar;