import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginPageimg from "./assets/LoginPage img.jpg";
import Setimg from "./assets/healthy_img.jpg";
import axios from 'axios';

export let Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const validateLogin = (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            alert('Please fill in all the required fields.');
        } else {
            axios.post('https://food-info-backend.onrender.com/login', 
                { username, password },
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  withCredentials: true
                }
              )
                .then(result => {
                    const { message } = result.data;
                    if (message === "Success") {
                        window.alert("Welcome Boss");
                        navigate("/Interface");
                    } else if (message === "Incorrect password") {
                        window.alert("Incorrect password. Please check again.");
                    } else {
                        window.alert("New to this Web? Please Register First");
                        navigate("/Signup");
                    }
                })
                .catch(err => {
                    console.error(err);
                    alert("An error occurred while logging in. Please try again later.");
                });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="set">
            <img src={Setimg} style={{ width: "400px", height: "380px", borderRadius: "210px" }} alt="Decoration" />
            <div className="ip_container">
                <img src={LoginPageimg} alt="Login Page" />
                <form onSubmit={validateLogin}>
                    <div className="input_group">
                        <label htmlFor="ip_u">USERNAME*</label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            id="ip_u"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            aria-label="Enter Username"
                        />
                    </div>
                    <div className="input_group">
                        <label htmlFor="ip_p">PASSWORD*</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Password"
                            id="ip_p"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            aria-label="Enter Password"
                        />
                        <div className="show_password">
                            <input
                                type="checkbox"
                                id="cbox"
                                onChange={togglePasswordVisibility}
                                aria-label="Show Password"
                            />
                            <label htmlFor="cbox">Show Password</label>
                        </div>
                    </div>

                    <button type="submit" id="Login_btn">LOGIN</button>
                </form>

                <div className="Login_footer">
                    <p>Forgot <Link to="/Forgot">Password?</Link></p>
                    <p>Don't Have An Account? <Link to="/Signup">Sign Up</Link></p>
                    <div className="Login_lang">
                        <Link to="/Telugu">Telugu</Link>
                        <Link to="/Hindi">Hindi</Link>
                        <Link to="/Tamil">Tamil</Link>
                        <Link to="/Malayalam">Malayalam</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
