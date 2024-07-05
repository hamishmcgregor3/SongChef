import React from 'react';
import TitleBar from './TitleBar';
import NavBar from './Navbar';
import SongRecsDisplay from './SongRecsDisplay';
import '../styles/HomeStyles.css'; 

const Home = () => {
    return (
        <div className="app">
            <TitleBar />
            <div className="app-body">
                <NavBar />
                <SongRecsDisplay />
            </div>
        </div>
    );
};

export default Home;