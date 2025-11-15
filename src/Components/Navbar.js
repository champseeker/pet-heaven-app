import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
    return (
        <nav className="navbar">
            <Link to="/home" className="logo-link">
                <h2>Pet Heaven</h2>
            </Link>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/gallery">Pet Gallery</Link></li>
                <li><Link to="/adoption">Adoption</Link></li>
                <li><Link to="/release">Release Pet</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                
                {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
                {!isLoggedIn && <li><Link to="/signup">Sign Up</Link></li>}
                {isLoggedIn && (
                    <li>
                        <button onClick={onLogout} className="logout-button">Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;