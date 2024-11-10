// import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Signupimg from "./assets/Sign_Up.jpg";
import axios from 'axios';

export const SignupForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const Save = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('https://food-info-backend.onrender.com/', 
        { username, email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );

      if (response.data) {
        window.alert("Successfully registered");
        navigate("/Login");
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
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

      <form onSubmit={Save}>
        <div className="login-container">
          <div className="log-block">
            <img
              src={Signupimg}
              alt="Logo"
              style={{ width: '438px', height: '135px', border: 'solid 2px white', borderRadius: '5px' }}
            />

            {error && (
              <div style={{ color: 'red', margin: '10px 0' }}>
                {error}
              </div>
            )}

            <h3 style={{marginRight:"45px"}}>Username*</h3>
            <input
              type="text"
              placeholder="Enter Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <h3 style={{marginRight:"69px"}}>Gmail*</h3>
            <input
              type="email"
              placeholder="Enter Gmail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h3>Create Password*</h3>
            <input
              type="password"
              placeholder="Create Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button 
              type="submit" 
              disabled={isLoading}
              style={{ opacity: isLoading ? 0.7 : 1 }}
            >
              <span style={{ color: "black", fontFamily: "'Times New Roman', Times, serif" }}>
                {isLoading ? 'Signing Up...' : 'Sign Up'}
              </span>
            </button>

            <p style={{ color: "white" }}>
              Have An Account?{' '}
              <Link to="/Login" style={{ color: "Orange", fontSize: "130%", fontWeight: "bold" }}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};