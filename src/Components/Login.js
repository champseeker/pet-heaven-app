import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(loginData);
        alert('🎉 Login successful! Welcome to Pet Heaven!');
        setLoginData({ username: '', password: '' });
        navigate('/adoption'); // Redirect to adoption page
    };
    
    return (
        <div className="login-box">
            <h2>🐾 Login</h2>
            <p style={{textAlign: 'center', color: '#8B5A3C', marginBottom: '2rem'}}>
                Welcome back! Login to adopt your perfect companion.
            </p>
            <form id="loginForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        name="username"
                        type="text" 
                        id="username"
                        value={loginData.username}
                        onChange={handleChange}
                        placeholder="Enter username" 
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        name="password"
                        type="password" 
                        id="password" 
                        value={loginData.password}
                        onChange={handleChange}
                        placeholder="Enter password" 
                        required
                    />
                </div>
                <button type="submit" className="btn-primary">Login</button>
                <div className="form-footer">
                    Don't have an account? 
                    <Link to="/signup"> Sign Up here</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;