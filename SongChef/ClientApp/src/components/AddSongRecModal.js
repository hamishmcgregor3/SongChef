import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddSongRecModalStyles.css'; 

const AddSongRecModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [song, setSong] = useState({
        title: '',
        artist: '',
        genre: '',
        idealListeningExperience: '',
        recommendedBy: ''
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
            await axios.post('/api/Songs', song);
            alert('Song recommendation added successfully!');
            setShowModal(false);
        } catch (error) {
            console.error('There was an error adding the song recommendation!', error);
        }
    };

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Add Song Recommendation</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <form className="form-container" onSubmit={handleSubmit}>
                            <label>
                                Title:
                                <input type="text" name="title" value={song.title} onChange={handleChange} required />
                            </label>
                            <label>
                                Artist:
                                <input type="text" name="artist" value={song.artist} onChange={handleChange} required />
                            </label>
                            <label>
                                Genre:
                                <select name="genre" value={song.genre} onChange={handleChange} required>
                                    <option value="">Select Genre</option>
                                    <option value="Pop">Pop</option>
                                    <option value="Rock">Rock</option>
                                    <option value="Hip Hop">Hip Hop</option>
                                    <option value="Jazz">Jazz</option>
                                    <option value="Classical">Classical</option>
                                    <option value="Country">Country</option>
                                    <option value="Electronic">Electronic</option>
                                    <option value="R&B">R&B</option>
                                    <option value="Reggae">Reggae</option>
                                    <option value="Alternative">Alternative</option>
                                    <option value="Disco">Disco</option>
                                    <option value="EDM">EDM</option>
                                    <option value="Folk">Folk</option>
                                    <option value="Funk">Funk</option>
                                    <option value="House">House</option>
                                    <option value="Indie">Indie</option>
                                    <option value="Instrumental">Instrumental</option>
                                    <option value="K-Pop">K-Pop</option>
                                    <option value="Latin">Latin</option>
                                    <option value="Metal">Metal</option>
                                    <option value="Punk">Punk</option>
                                    <option value="Rap">Rap</option>
                                    <option value="Soul">Soul</option>
                                    <option value="Techno">Techno</option>
                                </select>
                            </label>
                            <label>
                                Ideal Listening Experience:
                                <input type="text" name="idealListeningExperience" value={song.idealListeningExperience} onChange={handleChange} />
                            </label>
                            <label>
                                Recommended By:
                                <input type="text" name="recommendedBy" value={song.recommendedBy} onChange={handleChange} required />
                            </label>
                            <button type="submit">Submit</button>
                        </form>
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddSongRecModal;