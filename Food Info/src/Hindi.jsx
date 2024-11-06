import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginPageimg from "./assets/LoginPage img.jpg";
import Setimg from "./assets/healthy_img.jpg";
import { useNavigate } from "react-router-dom";
export let Hindi = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const validateLogin = () => {
        if (username === '' || password === '') {
            alert('सभी आवश्यक क्षेत्र मे भरें।');

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
                    <label htmlFor="ip_u" style={{ marginLeft: "-125px" }}>उपयोगकर्ता नाम*</label>
                    <input 
                        type="text" 
                        placeholder="उपयोगकर्ता नाम दर्ज करें" 
                        id="ip_u" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                        aria-label="उपयोगकर्ता नाम दर्ज करें" 
                    />
                </div>

                <div className="input_group">
                    <label htmlFor="ip_p" style={{ marginLeft: "-170px" }}>पासवर्ड*</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="पासवर्ड दर्ज करें"
                        id="ip_p"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        aria-label="पासवर्ड दर्ज करें"
                    />
                    <div className="show_password">
                        <input
                            type="checkbox"
                            id="cbox"
                            onChange={togglePasswordVisibility}
                            aria-label="पासवर्ड दिखाएं"
                        />
                        <label htmlFor="cbox">पासवर्ड दिखाएं</label>
                    </div>
                </div>

                <button type="submit" onClick={validateLogin} id="Login_btn">लॉगिन करें</button>

                <div className="Login_footer">
                    <p>पासवर्ड भूल गए? <a href="#">पासवर्ड ?</a></p>
                    <p>खाता नहीं है?<a href="#"> साइन अप करें</a></p>

                    <div className="Login_lang">
                        <Link to="/Login">English</Link>
                        <Link to="/Telugu">తెలుగు</Link>
                        <Link to="/Tamil">தமிழ்</Link>
                        <Link to="/Malayalam">മലയാളം</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
