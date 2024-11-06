import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginPageimg from "./assets/LoginPage img.jpg";
import Setimg from "./assets/healthy_img.jpg";
import { useNavigate } from "react-router-dom";
export let Telugu = () => {
    const nav = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const validateLogin = () => {
        if (username === '' || password === '') {
            alert('దయచేసి అవసరమైన అన్ని ఫీల్డ్‌లను పూరించండి.');

        } else {
          nav('/Success Interface');
        }
      };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="set">
            <img src ={Setimg}  style={{  width: "400px", height: "380px",borderRadius:"210px" }}></img>
        <div className="ip_container">
            <img src ={LoginPageimg}></img>
            <div className="input_group">
                <label htmlFor="ip_u" style ={{marginLeft:"-100px"}}>వినియోగదారు పేరు*</label>
                <input type="text" placeholder="వినియోగదారు పేరును నమోదు చేయండి" id="ip_u" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                aria-label="వినియోగదారు పేరును నమోదు చేయండి" />
            </div>

            <div className="input_group">
                <label htmlFor="ip_p" style ={{marginLeft:"-170px"}}>పాస్వర్డ్*</label>
                <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="పాస్వర్డ్ను నమోదు చేయండి" 
                    id="ip_p"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                    aria-label="పాస్వర్డ్ను నమోదు చేయండి"
                />
                <div className="show_password">
                    <input 
                        type="checkbox" 
                        id="cbox" 
                        onChange={togglePasswordVisibility} 
                        aria-label="పాస్వర్డ్ చూపించు"
                    />
                    <label htmlFor="cbox">పాస్వర్డ్ చూపించు</label>
                </div>
            </div>

            <button type="submit"  onClick={validateLogin} id="Login_btn">లాగిన్ చేయండి</button>

            <div className="Login_footer">
                <p>మర్చిపోయాను <a href="#">పాస్వర్డ్ ?</a></p>
                <p>ఖాతా లేదా ?<a href="#"> సైన్ అప్ చేయి</a></p>

                <div className="Login_lang">
                    <Link to="/Login">English</Link>
                    <Link to="/Hindi">हिन्दी</Link>
                    <Link to="/Tamil">தமிழ்</Link>
                    <Link to="/Malayalam">മലയാളം</Link>
                </div>
            </div>
        </div>
        </div>
        
    );
};
