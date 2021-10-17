import { Link } from 'react-router-dom';
 
export default function Navbar() {
    return (
        <nav>
            <Link to="/portfolio" className="nav-link">
                <h3>About</h3>
            </Link>
            <Link to="/work" className="nav-link">
                <h3>Work</h3>
            </Link>
            <Link to="/contact" className="nav-link">
                <h3>Contact</h3>
            </Link>
        </nav>
    )
};