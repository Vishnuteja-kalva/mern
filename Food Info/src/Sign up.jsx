import React from 'react';
import { Link } from "react-router-dom";
import Signupimg from "./assets/Sign_Up.jpg";
import { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export const SignupForm = () => {
  const navigate = useNavigate()
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Save = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/',{username,email,password})
    .then((result)=>{
      window.alert("Successfully registered")
      navigate("/Login")

    })
    .catch(err=>console.log(err))


  };

  return (
    <div className='Whole'>
        <div className='part1'>
            <div className='part11'>
                <img src="https://storage.googleapis.com/a1aa/image/70oG4jPlLPLUHNPO7UrrvBkJbxeT6jUFTcSSXLABwPROnXzJA.jpg" alt=""></img>
                <img src="https://storage.googleapis.com/a1aa/image/ciedHGQzn4W6NqGfVSpllAQ3wmSRHkCnin6SofQrXCJUdeaOB.jpg" alt=""></img>
                <img src="https://storage.googleapis.com/a1aa/image/PQ2n59AB2E5eTyJ0EzitCdtfjMVYVFhYd65bWEOnxJAwOvmTA.jpg" alt=""></img>
                <img src="https://storage.googleapis.com/a1aa/image/3WgpqJbT5LJ3GRFJ0XNpguQtm69kVbZ80GNEYGPAlKctzr5E.jpg" alt=""></img>
                
            </div>
            <div className='part12'>
            <img src="https://storage.googleapis.com/a1aa/image/42NT8hUfApWdbqvlYqml2Aqr9oN3tmr6IEk8xpYfzjm7ivmTA.jpg" alt=""></img>
                <img src="https://storage.googleapis.com/a1aa/image/J7TrsPwYZMbZK9FUpLV1XFvGYHuvMgxfWVBo506qVXm2xXzJA.jpg" alt=""></img>
                <img src="https://storage.googleapis.com/a1aa/image/CiboybiWwnYFIBeH72boVFVm3PJLZYCumsZyNTNydBNFyXzJA.jpg" alt=""></img>
                <img src="https://storage.googleapis.com/a1aa/image/tgjP2kUR605iBtgD6z2ToiR93SdBhKhfwQk9ayyEYfOQkvmTA.jpg" alt=""></img>
               
            </div>
            <div className='part13'>
                <img src="https://storage.googleapis.com/a1aa/image/hvb3Ng64ZLaXAtqWZ7ThHqx1Um39ZF13g6Ht1VsKBQuG5r5E.jpg" alt=""></img>
                <img src="https://storage.googleapis.com/a1aa/image/GiCei5rESQXdEayothVtdJAZQirZy2Rd43LkBp9yPCflkvmTA.jpg" alt=""></img>
                <img src="https://storage.googleapis.com/a1aa/image/vrTWf2AlvfgSlELyqeaNktBl1UoNTpy1YPINhFIWTlafSe1cC.jpg" alt=""></img>
                <img src="https://storage.googleapis.com/a1aa/image/ODQfffFLlxFVEpdeqf31YTfyOhmi9JWriOHECoV9uq8PN5r5E.jpg" alt=""></img>
                
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
          <h3 style={{marginRight:"45px"}}>Username*</h3>
          <input type="text" placeholder="Enter Username" id="User" required
          onChange = {(e)=>setUsername(e.target.value)} />
          
          <h3 style={{marginRight:"69px"}}>Gmail* </h3>
          <input type="text" placeholder="Enter Gmail" required 
          onChange={(e)=>setEmail(e.target.value)}/>
          
          <h3>Create Password*</h3>
          <input type="password" placeholder="Create Password" required 
          onChange={(e)=>setPassword(e.target.value)}/>
          <br />
          <button type="submit">
            <span style={{ color:"black",fontFamily: "'Times New Roman', Times, serif" }}>Sign Up</span>
          </button>
          
          <p style={{ color:"white"}}>Have An Account? <Link to="/Login" style={{ color:"Orange",fontSize:"130%",fontWeight:"bold"}} > Login</Link></p>
          
        </div>
      </div>
    </form>
    </div>
  );
};

