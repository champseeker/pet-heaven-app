import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Adoption = ({ isLoggedIn }) => {
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPet, setSelectedPet] = useState(null);
    const [adoptionData, setAdoptionData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        experience: '',
        reason: ''
    });

    useEffect(() => {
        const fetchPets = async () => {
            try {
                setLoading(true);
                const [catsResponse, dogsResponse] = await Promise.all([
                    axios.get('https://api.thecatapi.com/v1/images/search?limit=10'),
                    axios.get('https://dog.ceo/api/breeds/image/random/10')
                ]);

                const cats = catsResponse.data.map(cat => ({
                    url: cat.url,
                    id: cat.id,
                    type: 'cat'
                }));

                const dogs = dogsResponse.data.message.map((dogUrl, index) => ({
                    url: dogUrl,
                    id: `dog-${index}`,
                    type: 'dog'
                }));

                const allPets = [...cats, ...dogs].sort(() => Math.random() - 0.5);
                setPets(allPets);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching pets:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchPets();
    }, []);

    const openModal = (pet) => {
        // Check if user is logged in
        if (!isLoggedIn) {
            alert('Please login to adopt a pet!');
            navigate('/login');
            return;
        }
        
        setSelectedPet(pet);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedPet(null);
        setAdoptionData({
            name: '',
            email: '',
            phone: '',
            address: '',
            experience: '',
            reason: ''
        });
    };

    const handleChange = (e) => {
        setAdoptionData({
            ...adoptionData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Adoption Data:', { ...adoptionData, pet: selectedPet });
        alert(`Thank you for your interest in adopting this adorable ${selectedPet.type}! 🐾\n\nWe will contact you within 24-48 hours to schedule a meet and greet!`);
        closeModal();
    };

    if (loading) {
        return (
            <div className="gallery-page">
                <h1>🐾 Adoption Gallery</h1>
                <p>Loading adorable pets looking for homes...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="gallery-page">
                <h1>🐾 Adoption Gallery</h1>
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="gallery-page">
            <h1>🐾 Adoption Gallery</h1>
            <p className="gallery-subtitle">Find Your Perfect Furry Companion Today!</p>
            
            {!isLoggedIn && (
                <div style={{
                    background: '#FFF3E0',
                    padding: '1.5rem',
                    borderRadius: '15px',
                    textAlign: 'center',
                    marginBottom: '2rem',
                    border: '2px solid #FFB84D',
                    color: '#8B5A3C',
                    fontWeight: '600'
                }}>
                    ⚠️ Please <span style={{color: '#FF6B35', cursor: 'pointer', textDecoration: 'underline'}} onClick={() => navigate('/login')}>login</span> to adopt a pet!
                </div>
            )}
            <div className="gallery-grid">
                {pets.map(pet => (
                    <div key={pet.id} className="pet-card" onClick={() => openModal(pet)}>
                        <img 
                            className='petImage' 
                            alt={`${pet.type}`} 
                            src={pet.url} />
                        <div className="pet-info">
                            <span className="pet-type-badge">
                                {pet.type === 'cat' ? '🐱 Cat' : '🐶 Dog'}
                            </span>
                            <button className="adopt-btn-small">Adopt Me!</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Adoption Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="adoption-modal"
                overlayClassName="modal-overlay">
                <div className="modal-content">
                    <button className="close-modal" onClick={closeModal}>✕</button>
                    
                    {selectedPet && (
                        <>
                            <div className="modal-pet-preview">
                                <img src={selectedPet.url} alt="Selected pet" />
                                <h2>Adopt this {selectedPet.type === 'cat' ? '🐱 Cat' : '🐶 Dog'}!</h2>
                                <p style={{color: '#8B5A3C', marginTop: '0.5rem'}}>
                                    Give this pet a loving forever home 💕
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="adoption-form">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={adoptionData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={adoptionData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={adoptionData.phone}
                                        onChange={handleChange}
                                        placeholder="+65 1234 5678"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="address">Home Address *</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={adoptionData.address}
                                        onChange={handleChange}
                                        placeholder="Your address"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="experience">Pet Ownership Experience</label>
                                    <textarea
                                        id="experience"
                                        name="experience"
                                        value={adoptionData.experience}
                                        onChange={handleChange}
                                        placeholder="Tell us about your experience with pets (e.g., I've had dogs for 10 years)"
                                        rows="3"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="reason">Why do you want to adopt? *</label>
                                    <textarea
                                        id="reason"
                                        name="reason"
                                        value={adoptionData.reason}
                                        onChange={handleChange}
                                        placeholder="Share your reason for adoption and how you'll care for this pet"
                                        rows="4"
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn-submit">
                                    🐾 Submit Adoption Request
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default Adoption;