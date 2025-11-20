import React, { useState } from 'react';

const Release = () => {
    const [releaseData, setReleaseData] = useState({
        ownerName: '',
        email: '',
        phone: '',
        petName: '',
        petType: '',
        petAge: '',
        petBreed: '',
        reason: '',
        medicalHistory: ''
    });

    const handleChange = (e) => {
        setReleaseData({
            ...releaseData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Release Form Data:', releaseData);
        alert('Thank you for your submission. We will contact you within 24-48 hours to arrange the pet transfer.');
        
        // Reset form
        setReleaseData({
            ownerName: '',
            email: '',
            phone: '',
            petName: '',
            petType: '',
            petAge: '',
            petBreed: '',
            reason: '',
            medicalHistory: ''
        });
    };

    return (
        <div className="form-page">
            <div className="form-container-page">
                <h1>🐾 Release Pet Form</h1>
                <p className="form-description">
                    We understand that circumstances change. Fill out this form and we'll provide your pet 
                    with a loving temporary home while we search for their perfect forever family.
                </p>
                
                <form id="releaseForm" onSubmit={handleSubmit} className="release-form">
                    <h3>Owner Information</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="ownerName">Your Name *</label>
                            <input
                                type="text"
                                id="ownerName"
                                name="ownerName"
                                value={releaseData.ownerName}
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
                                value={releaseData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Contact Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={releaseData.phone}
                            onChange={handleChange}
                            placeholder="+65 1234 5678"
                            required
                        />
                    </div>

                    <h3>Pet Information</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="petName">Pet's Name *</label>
                            <input
                                type="text"
                                id="petName"
                                name="petName"
                                value={releaseData.petName}
                                onChange={handleChange}
                                placeholder="Enter pet's name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="petType">Pet Type *</label>
                            <select
                                id="petType"
                                name="petType"
                                value={releaseData.petType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select type</option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="petAge">Pet's Age *</label>
                            <input
                                type="text"
                                id="petAge"
                                name="petAge"
                                value={releaseData.petAge}
                                onChange={handleChange}
                                placeholder="e.g., 2 years"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="petBreed">Breed</label>
                            <input
                                type="text"
                                id="petBreed"
                                name="petBreed"
                                value={releaseData.petBreed}
                                onChange={handleChange}
                                placeholder="e.g., Golden Retriever"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="medicalHistory">Medical History</label>
                        <textarea
                            id="medicalHistory"
                            name="medicalHistory"
                            value={releaseData.medicalHistory}
                            onChange={handleChange}
                            placeholder="Please share any medical conditions, vaccinations, or special needs"
                            rows="4"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="reason">Reason for Release *</label>
                        <textarea
                            id="reason"
                            name="reason"
                            value={releaseData.reason}
                            onChange={handleChange}
                            placeholder="Help us understand your situation so we can better care for your pet"
                            rows="5"
                            required
                        />
                    </div>

                    <button type="submit" className="btn-submit">Submit Release Form</button>
                </form>
            </div>
        </div>
    );
};

export default Release;