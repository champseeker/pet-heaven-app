import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="homepage">
            <section className="hero">
                <h1>Pet's Life Matters</h1>
                <p>Help us save abandoned pets and give them a second chance at happiness</p>
            </section>

            <section className="card-grid">
                <div className="card services-card">
                    <h3>🐾 Adoption</h3>
                    <p>Find your best pal through adoption and give a pet a loving home</p>
                </div>
                <div className="card services-card">
                    <h3>💝 Release</h3>
                    <p>Can't afford to keep your pet? We will take them in and provide proper care</p>
                </div>
                <div className="card services-card">
                    <h3>⚕️ Health Care</h3>
                    <p>All pets deserve great health care and we provide it to our furry friends</p>
                </div>
            </section>

            {/* About Us Section - Short & Sweet */}
            <section className="about-section">
                <div className="about-image">
                    <img src="/pets-together.jpg" alt="Happy pets at Pet Heaven" />
                </div>
                <div className="about-content">
                    <span className="about-label">ABOUT US</span>
                    <h2>Pet Heaven — Care & Responsibility</h2>
                    <p>
                        Pet Heaven is equipped with the resources and space to help abandoned cats and dogs 
                        find their forever loving homes. We have clinics, volunteers and different shelters 
                        to accommodate the big number of adoptees.
                    </p>
                    <p>
                        We are dedicated to helping with all requests, adoption or release, to ensure the animals 
                        get a second chance in life. To you, it is a chapter in their lives; to them, it's their 
                        whole life. Please feel free to submit any inquiries you have to us!
                    </p>
                    <div className="about-buttons">
                        <Link to="/gallery" className="about-btn primary">View Gallery</Link>
                        <Link to="/adoption" className="about-btn secondary">View Adoption Gallery</Link>
                    </div>
                </div>
            </section>

            <section className="contact-section">
                {/* Left side */}
                <div className="contact-info">
                    <h2>We'd Love to Hear From You</h2>
                    <p>Have any questions? Contact us via this form and we will get back to you ASAP!</p>
                </div>

                {/* Right side */}
                <div className="form-container">
                    <form id="contactUsForm" onSubmit={(e) => {
                        e.preventDefault();
                        alert('Thank you for contacting us! We will get back to you soon.');
                    }}>
                        <input className="form-input"
                            type="text" placeholder="Your Name" 
                            required/>
                        
                        <input className="form-input"
                            type="email" placeholder="Your Email" 
                            required/>

                        <input className="form-input"
                            type="tel" placeholder="Contact Number" 
                            required/>

                        <textarea className="form-input"
                            placeholder="Your Enquiry" rows="5" 
                            required>
                        </textarea>

                        <button type="submit" className="submit-button">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Home;