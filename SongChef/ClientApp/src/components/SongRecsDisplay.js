import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/SongRecsDisplayStyles.css';
import SongRec from './SongRec';

const SongRecsDisplay = () => {

    const [songRecs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchSongs = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get('/api/Songs/GetSongs');
            setSongs(response.data);
        } catch (err) {
            setError('Error fetching song recommendations');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSongs();
    }, []);

    return (
        <div className="songrecs-display">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {songRecs.map((song, index) => (
                <SongRec
                    key={index}
                    title={song.title}
                    artist={song.artist}
                    genre={song.genre.genre}
                    experience={song.idealListeningExperience}
                    recommendedBy={song.recommendedBy}
                    backgroundColor={song.genre.backgroundColor}
                    textColor={song.genre.textColor}
                />
            ))}
        </div>
    );
};

export default SongRecsDisplay;