import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Signupimg from "./assets/Sign_Up.jpg";
import axios from 'axios';

export const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Backend URL from environment variable or fallback
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://food-info-backend.onrender.com';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${BACKEND_URL}/`, formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true // If using credentials/cookies
      });

      if (response.data) {
        window.alert("Successfully registered");
        navigate("/Login");
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='Whole'>
      <div className='part1'>
        <div className='part11'>
          <img src="https://storage.googleapis.com/a1aa/image/70oG4jPlLPLUHNPO7UrrvBkJbxeT6jUFTcSSXLABwPROnXzJA.jpg" alt="decoration" />
          <img src="https://storage.googleapis.com/a1aa/image/ciedHGQzn4W6NqGfVSpllAQ3wmSRHkCnin6SofQrXCJUdeaOB.jpg" alt="decoration" />
          <img src="https://storage.googleapis.com/a1aa/image/PQ2n59AB2E5eTyJ0EzitCdtfjMVYVFhYd65bWEOnxJAwOvmTA.jpg" alt="decoration" />
          <img src="https://storage.googleapis.com/a1aa/image/3WgpqJbT5LJ3GRFJ0XNpguQtm69kVbZ80GNEYGPAlKctzr5E.jpg" alt="decoration" />
        </div>
        <div className='part12'>
          <img src="https://storage.googleapis.com/a1aa/image/42NT8hUfApWdbqvlYqml2Aqr9oN3tmr6IEk8xpYfzjm7ivmTA.jpg" alt="decoration" />
          <img src="https://storage.googleapis.com/a1aa/image/J7TrsPwYZMbZK9FUpLV1XFvGYHuvMgxfWVBo506qVXm2xXzJA.jpg" alt="decoration" />
          <img src="https://storage.googleapis.com/a1aa/image/CiboybiWwnYFIBeH72boVFVm3PJLZYCumsZyNTNydBNFyXzJA.jpg" alt="decoration" />
          <img src="https://storage.googleapis.com/a1aa/image/tgjP2kUR605iBtgD6z2ToiR93SdBhKhfwQk9ayyEYfOQkvmTA.jpg" alt="decoration" />
        </div>
        <div className='part13'>
          <img src="https://storage.googleapis.com/a1aa/image/hvb3Ng64ZLaXAtqWZ7ThHqx1Um39ZF13g6Ht1VsKBQuG5r5E.jpg" alt="decoration" />
          <img src="https://storage.googleapis.com/a1aa/image/GiCei5rESQXdEayothVtdJAZQirZy2Rd43LkBp9yPCflkvmTA.jpg" alt="decoration" />
          <img src="https://storage.googleapis.com/a1aa/image/vrTWf2AlvfgSlELyqeaNktBl1UoNTpy1YPINhFIWTlafSe1cC.jpg" alt="decoration" />
          <img src="https://storage.googleapis.com/a1aa/image/ODQfffFLlxFVEpdeqf31YTfyOhmi9JWriOHECoV9uq8PN5r5E.jpg" alt="decoration" />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="login-container">
          <div className="log-block">
            <img
              src={Signupimg}
              alt="Logo"
              style={{ width: '438px', height: '135px', border: 'solid 2px white', borderRadius: '5px' }}
            />
            
            {error && <div className="error-message" style={{color: 'red'}}>{error}</div>}

            <h3 style={{marginRight:"45px"}}>Username*</h3>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <h3 style={{marginRight:"69px"}}>Gmail*</h3>
            <input
              type="email"
              name="email"
              placeholder="Enter Gmail"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <h3>Create Password*</h3>
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            
            <br />
            <button 
              type="submit" 
              disabled={loading}
              style={{
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              <span style={{ color:"black", fontFamily: "'Times New Roman', Times, serif" }}>
                {loading ? 'Signing Up...' : 'Sign Up'}
              </span>
            </button>

            <p style={{ color:"white" }}>
              Have An Account? <Link to="/Login" style={{ color:"Orange", fontSize:"130%", fontWeight:"bold"}}> Login</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
