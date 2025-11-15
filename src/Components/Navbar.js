import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <h2>🐾 Pet Heaven</h2>
                </Link>
                
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/gallery" className="nav-link">Pet Gallery</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/adoption" className="nav-link">Adopt</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/release" className="nav-link">Release Pet</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/aboutus" className="nav-link">About Us</Link>
                    </li>
                    
                    {!isLoggedIn ? (
                        <>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link nav-link-btn">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link nav-link-btn signup">Sign Up</Link>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item">
                            <button onClick={onLogout} className="logout-button">
                                Logout
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;