import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = ({onSubmit}) => {
    const [signUpData, setSignUpData] = useState({
        username:'',
        password:'',
        cPassword:''
    });

    const handleChange = (e) => {
        setSignUpData({
            ...signUpData, [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const pass = signUpData.password;
        const cPass = signUpData.cPassword;
        if(pass == cPass){
            onSubmit(signUpData);
            setSignUpData({username:'', password:'', cPassword:''});
        }else{
            alert("Password mismatch");
            setSignUpData({username:'', password:'', cPassword:''});
        }
    };

    return(
        <div className="login-box">
            <h2>Sign Up</h2>
            <form id="signupForm">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" id="username" 
                        value={signUpData.username}
                        onChange={handleChange}
                        placeholder="Choose username" 
                        required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" id="password" 
                        value={signUpData.password}
                        onChange={handleChange}
                        placeholder="Choose password" 
                        required/>
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input 
                        type="password" id="cpassword" 
                        value={signUpData.cPassword}
                        onChange={handleChange}
                        placeholder="Confirm password" 
                        required/>
                </div>
                <button type="submit" className="btn-primary">Sign Up</button>
                <div className="form-footer">
                    Already have an account?
                    <Link to="/login">Login here</Link>
                </div>
            </form>
        </div>
    );
}

export default SignUp;