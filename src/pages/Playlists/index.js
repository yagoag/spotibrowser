import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Playlist from '../../components/Playlist';
import Pagination from '../../components/Pagination';
import './style.css';

const { REACT_APP_SPOTIFY_API_URL } = process.env;

const Playlists = ({ setUnauthorized, accessToken }) => {
  const [playlistMessage, setPlaylistMessage] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [totalPlaylists, setTotalPlaylists] = useState(0);
  const activePlaylist = useSelector(state => state.activePlaylist);
  const filters = useSelector(state => state.filters);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      setIsLoading(true);

      if (accessToken) {
        axios
          .get(REACT_APP_SPOTIFY_API_URL, {
            params: { ...filters, offset, limit },
            headers: {
              Authorization: `Bearer ${accessToken}`,
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
  }, [filters, limit, offset, setUnauthorized, accessToken]);

  return (
    <div
      className={`playlist-container${activePlaylist ? ' active-playlist' : ''}
      ${isLoading ? ' loading' : ''}`}
    >
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
        small={!!activePlaylist}
      />
      {playlists.map(playlist => (
        <Playlist
          key={playlist.id}
          playlist={playlist}
          active={activePlaylist}
        />
      ))}
      <Pagination
        offset={offset}
        limit={limit}
        total={totalPlaylists}
        setOffset={setOffset}
        setLimit={setLimit}
        small={!!activePlaylist}
      />
    </div>
  );
};

export default Playlists;
