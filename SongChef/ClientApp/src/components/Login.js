import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/LoginStyles.css';
import logo from '../assets/ramen-bowl.png'; // adjust the path according to your project structure

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = isRegister ? '/api/Auth/Register' : '/api/Auth/Login';
        const user = { username, password };

        try {
            const response = await axios.post(url, user);
            setMessage(response.data);

            if (response.status === 200) {
                sessionStorage.setItem('username', username);
                navigate('/Home');
            } else {
                // Handle registration failure
                console.error('Registration failed');
            }

        } catch (error) {
            setMessage(error.response.data);
        }
    };

    return (
        <div className="login-page-container"> 
            <div className="title-container">
                <div className="welcome-msg">WELCOME TO</div>
                <img src={logo} alt="Logo Image" className="responsive-image" />
                <div className="title-msg">
                    <span className="login-song-title">Song</span>
                    <span className="login-chef-title">Chef</span>
                </div>
                <div className="slogan-msg">Tune In to Your Friends' Music <strong>Tastes</strong>, and Share Your Own!</div>
            </div>
            <div className="login-container">
                <div className="login-form-container">
                    <h2>{isRegister ? 'Register' : 'Login'}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>{isRegister ? 'Create New Username:' : 'Username:'}</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>{isRegister ? 'Create New Password:' : 'Password:'}</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="button-container">
                        <button type="submit" className="submit-button">
                            {isRegister ? 'Register' : 'Login'}
                        </button>
                        <button className="toggle-button" onClick={() => setIsRegister(!isRegister)}>
                            {isRegister ? 'Switch to Login' : 'Switch to Register'}
                            </button>
                        </div>
                    </form>
                    <p className="message">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;