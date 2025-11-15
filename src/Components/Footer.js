import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>🐾 Pet Heaven</h3>
                    <p>Caring for abandoned pets since 2020</p>
                    <p>Helping animals find their forever homes</p>
                </div>
                
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/gallery">Pet Gallery</Link></li>
                        <li><Link to="/adoption">Adopt a Pet</Link></li>
                        <li><Link to="/release">Release Pet</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>📧 Email: info@petheaven.com</p>
                    <p>📞 Phone: +65 1234 5678</p>
                    <p>📍 Location: Singapore</p>
                </div>
                
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2025 Pet Heaven Animal Welfare Society. All rights reserved.</p>
                <p>ISIT207 Frontend Web Programming - Assignment 3</p>
            </div>
        </footer>
    );
};

export default Footer;