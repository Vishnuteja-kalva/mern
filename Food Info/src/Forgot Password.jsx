import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const showMessage = (msg, error) => {
        setMessage(msg);
        setIsError(error);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('');
        setIsError(false);

        if (!validateEmail(email)) {
            showMessage('Please enter a valid email address.', true);
            return;
        }

        showMessage('Sending reset code...', false);
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password 🤔</h2>
            <p>Enter your email address, and we will send you a password reset code.</p>
            <form onSubmit={handleSubmit} id="forgot-password-form">
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input type="submit" value="Send Reset Code" />
            </form>
            <div className="forgot-password-footer">
                <p>Remember your password? <Link to="/Login">Login</Link></p>
            </div>
            {message && (
                <div className={`message ${isError ? 'error' : ''}`}>
                    {message}
                </div>
            )}
        </div>
    );
};


