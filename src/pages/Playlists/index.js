import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Playlist from '../../components/Playlist';
import Pagination from '../../components/Pagination';
import './style.css';

const { REACT_APP_SPOTIFY_API_URL } = process.env;

const Playlists = ({
  filters,
  activePlaylist,
  setActivePlaylist,
  setUnauthorized,
}) => {
  const [playlistMessage, setPlaylistMessage] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [totalPlaylists, setTotalPlaylists] = useState(0);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      setIsLoading(true);

      if (localStorage.getItem('access_token')) {
        axios
          .get(REACT_APP_SPOTIFY_API_URL, {
            params: { ...filters, offset, limit },
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('access_token'),
            },
          })
          .then(res => {
            setPlaylistMessage(res.data.message);
            setPlaylists(res.data.playlists.items);
            setTotalPlaylists(res.data.playlists.total);
          })
          .catch(e => {
            setUnauthorized(true);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    };

    fetchPlaylistData();
    const interval = setInterval(() => {
      fetchPlaylistData();
    }, 30000);

    return () => clearInterval(interval);
  }, [filters, limit, offset, setUnauthorized]);

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
      {playlists.map(playlist => (
        <Playlist
          key={playlist.id}
          playlist={playlist}
          onClick={setActivePlaylist}
          active={activePlaylist && playlist.id === activePlaylist.id}
        />
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
