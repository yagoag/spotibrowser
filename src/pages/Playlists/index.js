import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Playlist from '../../components/Playlist';
import './style.css';

const { REACT_APP_SPOTIFY_API_URL, REACT_APP_AUTH_API_URL } = process.env;

const Playlists = ({ filters }) => {
  const [playlistMessage, setPlaylistMessage] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      setIsLoading(true);
      const tokenResponse = await axios.get(REACT_APP_AUTH_API_URL);
      setIsLoading(true); // In case of concurrent fetches, at least will let user know it's fetching data after a while
      const playlistResponse = await axios.get(REACT_APP_SPOTIFY_API_URL, {
        params: filters,
        headers: { Authorization: 'Bearer ' + tokenResponse.data.access_token },
      });
      setPlaylistMessage(playlistResponse.data.message);
      setPlaylists(playlistResponse.data.playlists.items);
      setIsLoading(false);
    };

    fetchPlaylistData();
    const interval = setInterval(() => {
      fetchPlaylistData();
    }, 30000);

    return () => clearInterval(interval);
  }, [filters]);

  return (
    <div className="playlist-container">
      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <div className="title">{playlistMessage}</div>
      {playlists.map((playlist, index) => (
        <Playlist key={index} playlist={playlist} />
      ))}
    </div>
  );
};

export default Playlists;
