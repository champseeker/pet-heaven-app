import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Adoption = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                setLoading(true);

                // Fetch cats and dogs simultaneously
                const [catsResponse, dogsResponse] = await Promise.all([
                    axios.get('https://api.thecatapi.com/v1/images/search?limit=10'),
                    axios.get('https://dog.ceo/api/breeds/image/random/10')
                ]);

                // Format cats
                const cats = catsResponse.data.map(cat => ({
                    url: cat.url,
                    id: cat.id,
                    type: 'cat'
                }));

                // Format dogs
                const dogs = dogsResponse.data.message.map((dogUrl, index) => ({
                    url: dogUrl,
                    id: `dog-${index}`,
                    type: 'dog'
                }));

                // Combine and shuffle
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

    if (loading) {
        return (
            <div className="gallery-page">
                <h1>🐾 Pet Gallery</h1>
                <p>Loading adorable pets...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="gallery-page">
                <h1>🐾 Pet Gallery</h1>
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="gallery-page">
            <h1>🐾 Pet Gallery</h1>
            <p className="gallery-subtitle">Cats and Dogs Available for Adoption</p>
            
            <div className="gallery-grid">
                {pets.map(pet => (
                    <div key={pet.id} className="pet-card">
                        <img 
                            className='petImage' 
                            alt={`${pet.type}`} 
                            src={pet.url} 
                        />
                        <div className="pet-info">
                            <span className="pet-type-badge">
                                {pet.type === 'cat' ? '🐱 Cat' : '🐶 Dog'}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Adoption;