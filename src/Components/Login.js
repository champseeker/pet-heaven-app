import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({onSubmit}) => {
    const [loginData, setLoginData] = useState({
        username:'',
        password: ''
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData, [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(loginData);
        setLoginData({username:'', password:''});
    };
    
    return(
        <div className="login-box">
            <h2>Login</h2>
            <form id="loginForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input name="username"
                        type="text" id="username"
                        value={loginData.username}
                        onchange={handleChange}
                        placeholder="Enter username" 
                        required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" id="password" 
                        value={loginData.password}
                        onChange={handleChange}
                        placeholder="Enter password" 
                        required/>
                </div>
                <button type="submit" className="btn-primary">Login</button>
                <div className="form-footer">
                    Don't have an account? 
                    <Link to="/signup">Sign Up here</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;