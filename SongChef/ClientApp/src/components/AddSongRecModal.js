import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AddSongRecModalStyles.css';

const AddSongRecModal = () => {

    const [showModal, setShowModal] = useState(false);
    const [genres, setGenres] = useState([]);

    const [song, setSong] = useState({
        title: '',
        artist: '',
        genreId: 0,
        genre: null, 
        idealListeningExperience: '',
        recommendedBy: sessionStorage.getItem('username') || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSong({
            ...song,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/Songs/AddSongRec', song);
            console.log(response.data); 
            setShowModal(false);
        } catch (error) {
            console.error('Error adding song recommendation:', error);
        }
    };

    const fetchGenres = async () => {
        try {
            const response = await axios.get('/api/Songs/GetGenres');
            setGenres(response.data);
        } catch (error) {
            console.error('Error getting genres:', error);
        }
    };

    useEffect(() => {
        fetchGenres();
    }, []);

    return (
        <div>
            <button className="add-song-rec-button" onClick={() => setShowModal(true)}>Add Song Rec</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <form className="form-container" onSubmit={handleSubmit}>
                            <label>
                                <span>Song Title:</span>
                                <input type="text" name="title" value={song.title} onChange={handleChange} required />
                            </label>
                            <label>
                                <span>Artist:</span>
                                <input type="text" name="artist" value={song.artist} onChange={handleChange} required />
                            </label>
                            <label>
                                <span>Genre:</span>
                                <select name="genreId" value={song.genreId} onChange={handleChange} required>
                                    <option value="">Select Genre</option>
                                    {genres.map((genre, index) => (
                                        <option key={index} value={genre.id}>
                                            {genre.genre}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                <span>Ideal Listening Experience:</span>
                                <input type="text" name="idealListeningExperience" value={song.idealListeningExperience} onChange={handleChange} />
                            </label>
                            <button type="submit" className="submit-song-rec-button">Submit</button>
                        </form>
                        <span className="close" onClick={() => setShowModal(false)}>Close</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddSongRecModal;