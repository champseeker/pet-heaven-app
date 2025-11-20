import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = ({ onSignUp }) => {
    const navigate = useNavigate();
    const [signUpData, setSignUpData] = useState({
        username: '',
        password: '',
        cPassword: ''
    });

    const handleChange = (e) => {
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const pass = signUpData.password;
        const cPass = signUpData.cPassword;
        
        if (pass === cPass) {
            if (onSignUp) onSignUp(signUpData);
            alert('🎉 Account created successfully! Welcome to Pet Heaven family!');
            setSignUpData({ username: '', password: '', cPassword: '' });
            navigate('/login');
        } else {
            alert("❌ Passwords do not match! Please try again.");
            setSignUpData({ ...signUpData, password: '', cPassword: '' });
        }
    };

    return (
        <div className="login-box">
            <h2>🐾 Sign Up</h2>
            <p style={{textAlign: 'center', color: '#8B5A3C', marginBottom: '2rem'}}>
                Join Pet Heaven and help save lives! 💕
            </p>
            <form id="signupForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        name="username"
                        type="text" 
                        id="username" 
                        value={signUpData.username}
                        onChange={handleChange}
                        placeholder="Choose username" 
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        name="password"
                        type="password" 
                        id="password" 
                        value={signUpData.password}
                        onChange={handleChange}
                        placeholder="Choose password" 
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cPassword">Confirm Password</label>
                    <input 
                        name="cPassword"
                        type="password" 
                        id="cPassword" 
                        value={signUpData.cPassword}
                        onChange={handleChange}
                        placeholder="Confirm password" 
                        required
                    />
                </div>
                <button type="submit" className="btn-primary">Sign Up</button>
                <div className="form-footer">
                    Already have an account?
                    <Link to="/login"> Login here</Link>
                </div>
            </form>
        </div>
    );
}

export default SignUp;