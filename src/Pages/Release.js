import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Release = (onSubmit) => {
    const [releaseData, setReleaseData] = useState({
        // all the form data here
    });

    const handleChange = (e) => {
        setReleaseData({
            ...releaseData, [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(releaseData);
        setReleaseData(
            // all the form data here
        );
    };

    return(
        <div classname="release-box">
            <h2>Release Form</h2>
            <p>Fill up the form to release your beloved pets</p>
            <form id="releaseForm">
                {/* all the form data inputs (look at login/signup for example) */}
            </form>
        </div>
    );
};

export default Release;