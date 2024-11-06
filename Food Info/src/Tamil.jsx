import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginPageimg from "./assets/LoginPage img.jpg";
import Setimg from "./assets/healthy_img.jpg";
import { useNavigate } from "react-router-dom";
export let Tamil = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const validateLogin = () => {
        if (username === '' || password === '') {
            alert('தேவையான அனைத்து புலங்களையும் நிரப்பவும்.');

        } else {
          navigate('/Success Interface');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="set">
            <img src={Setimg} style={{  width: "400px", height: "380px",borderRadius:"210px" }} alt="Set Image" />
            <div className="ip_container">
                <img src={LoginPageimg} alt="Login Page" />
                <div className="input_group">
                    <label htmlFor="ip_u" style={{ marginLeft: "-120px" }}>பயனர் பெயர்*</label>
                    <input 
                        type="text" 
                        placeholder="பயனர் பெயரை உள்ளிடவும்" 
                        id="ip_u" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                        aria-label="பயனர் பெயரை உள்ளிடவும்" 
                    />
                </div>

                <div className="input_group">
                    <label htmlFor="ip_p" style={{ marginLeft: "-130px" }}>கடவுச்சொல்*</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="கடவுச்சொல்லை உள்ளிடவும்"
                        id="ip_p"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        aria-label="கடவுச்சொல்லை உள்ளிடவும்"
                    />
                    <div className="show_password">
                        <input
                            type="checkbox"
                            id="cbox"
                            onChange={togglePasswordVisibility}
                            aria-label="கடவுச்சொல் காண்பிக்க"
                        />
                        <label htmlFor="cbox">கடவுச்சொல் காண்பிக்க</label>
                    </div>
                </div>

                <button type="submit" onClick={validateLogin} id="Login_btn">உள்நுழையவும்</button>

                <div className="Login_footer">
                    <p>கடவுச்சொல்லை மறந்துவிட்டீர்களா? <a href="#">கடவுச்சொல் ?</a></p>
                    <p>கணக்கு இல்லையா?<a href="#"> பதிவு செய்யவும்</a></p>

                    <div className="Login_lang">
                        <Link to="/Login">English</Link>
                        <Link to="/Hindi">हिन्दी</Link>
                        <Link to="/Telugu">తెలుగు</Link>
                        <Link to="/Malayalam">മലയാളം</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
