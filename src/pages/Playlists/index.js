import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Playlist from '../../components/Playlist';
import Pagination from '../../components/Pagination';
import './style.css';

const { REACT_APP_SPOTIFY_API_URL, REACT_APP_AUTH_API_URL } = process.env;

const Playlists = ({ filters }) => {
  const [playlistMessage, setPlaylistMessage] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [totalPlaylists, setTotalPlaylists] = useState(0);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      setIsLoading(true);
      console.log('filters', filters);
      const tokenResponse = await axios.get(REACT_APP_AUTH_API_URL);
      const playlistResponse = await axios.get(REACT_APP_SPOTIFY_API_URL, {
        params: { ...filters, offset: offset, limit: limit },
        headers: { Authorization: 'Bearer ' + tokenResponse.data.access_token },
      });
      setPlaylistMessage(playlistResponse.data.message);
      setPlaylists(playlistResponse.data.playlists.items);
      setTotalPlaylists(playlistResponse.data.playlists.total);
      setIsLoading(false);
    };

    fetchPlaylistData();
    const interval = setInterval(() => {
      fetchPlaylistData();
    }, 30000);

    return () => clearInterval(interval);
  }, [filters, limit, offset]);

  return (
    <div className="playlist-container">
      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <div className="title">{playlistMessage}</div>
      <Pagination
        offset={offset}
        limit={limit}
        total={totalPlaylists}
        setOffset={setOffset}
        setLimit={setLimit}
      />
      {playlists.map((playlist, index) => (
        <Playlist key={index} playlist={playlist} />
      ))}
      <Pagination
        offset={offset}
        limit={limit}
        total={totalPlaylists}
        setOffset={setOffset}
        setLimit={setLimit}
      />
    </div>
  );
};

export default Playlists;
