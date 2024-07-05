import React from 'react';
import '../styles/NavBarStyles.css'; 
import AddSongRecModal from './AddSongRecModal';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/my-songs">My Songs</a></li>
                    {/*<li><button className="add-song-btn">Add Song Rec</button></li>*/}
                    {/*<li><AddSongRecModal /></li>*/}
                    <li><a href="/logout" className="logout">Logout</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;