﻿import React from 'react';
import '../styles/SongRecStyles.css'; 

const SongRec = ({ title, artist, genre, experience, recommendedBy, backgroundColor, textColor }) => {
    return (
        <div className="song-rec" style={{ backgroundColor, color: textColor }}>
        <div className="song-details">
                <p className="song-title">[<strong>{title}</strong>]</p>
                <p><strong>Artist:</strong> {artist}</p>
                <p><strong>Genre:</strong> {genre}</p>
                <p><strong>Listening Experience:</strong> {experience}</p>
            </div>
            <div className="recommended-by">
                <p><strong>Recommended By:</strong> {recommendedBy}</p>
            </div>
        </div>
    );
};

export default SongRec;