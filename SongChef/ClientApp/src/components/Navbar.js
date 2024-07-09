import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBarStyles.css';
import AddSongRecModal from './AddSongRecModal';

const NavBar = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            sessionStorage.removeItem('username');
            navigate('/');
        } catch (error) {
            alert(error.response.data);
        }
    };

    return (
        <div className="nav-bar">
            <AddSongRecModal />
            {/*<a href="/" className="logout">Logout</a>*/}
            <button type="submit" className="logout-button" onClick={handleSubmit}>
                Logout
            </button>
        </div>
    );
};

export default NavBar;