import React from 'react';
import '../styles/TitleBarStyles.css'; 

const TitleBar = () => {
    return (
        <div className="title-bar">
            <h1>
                <span>Song</span>
                <span className="chef-title">Chef</span>   
            </h1>
        </div>
    );
};

export default TitleBar;