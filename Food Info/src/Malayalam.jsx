import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginPageimg from "./assets/LoginPage img.jpg";
import Setimg from "./assets/healthy_img.jpg";
import { useNavigate } from 'react-router-dom';
export let Malayalam = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const validateLogin = () => {
        if (username === '' || password === '') {
            alert('ആവശ്യമായ എല്ലാ ഫീൽഡുകളും ദയവായി പൂരിപ്പിക്കുക.');

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
                    <label htmlFor="ip_u" style={{ marginLeft: "-100px" }}>ഉപയോക്തൃനാമം*</label>
                    <input 
                        type="text" 
                        placeholder="ഉപയോക്തൃനാമം നൽകുക" 
                        id="ip_u" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                        aria-label="ഉപയോക്തൃനാമം നൽകുക" 
                    />
                </div>

                <div className="input_group">
                    <label htmlFor="ip_p" style={{ marginLeft: "-150px" }}>പാസ്വേഡ്*</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="പാസ്വേഡ് നൽകുക"
                        id="ip_p"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        aria-label="പാസ്വേഡ് നൽകുക"
                    />
                    <div className="show_password">
                        <input
                            type="checkbox"
                            id="cbox"
                            onChange={togglePasswordVisibility}
                            aria-label="പാസ്വേഡ് കാണിക്കുക"
                        />
                        <label htmlFor="cbox">പാസ്വേഡ് കാണിക്കുക</label>
                    </div>
                </div>

                <button type="submit" onClick={validateLogin} id="Login_btn">ലോഗിൻ ചെയ്യുക</button>

                <div className="Login_footer">
                    <p>പാസ്വേഡ് മറന്നോ? <a href="#">പാസ്വേഡ് ?</a></p>
                    <p>ഒരു അക്കൗണ്ട് ഇല്ലേ?<a href="#"> സൈൻ അപ് ചെയ്യുക</a></p>

                    <div className="Login_lang">
                        <Link to="/Login">English</Link>
                        <Link to="/Hindi">हिन्दी</Link>
                        <Link to="/Telugu">తెలుగు</Link>
                        <Link to="/Tamil">தமிழ்</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
