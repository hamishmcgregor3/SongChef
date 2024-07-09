import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/LoginStyles.css'; 

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
        <div className="login-container">
            <h2>{isRegister ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    {isRegister ? 'Register' : 'Login'}
                </button>
            </form>
            <p className="message">{message}</p>
            <button className="toggle-button" onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? 'Switch to Login' : 'Switch to Register'}
            </button>
        </div>
    );
};

export default Login;