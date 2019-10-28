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
  const autoRefresh = useSelector(state => state.autoRefresh);

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

    if (autoRefresh) {
      const interval = setInterval(() => {
        fetchPlaylistData();
      }, 30000);

      return () => clearInterval(interval);
    }
  }, [filters, limit, offset, setUnauthorized, accessToken, autoRefresh]);

  useEffect(() => {
    setOffset(0);
  }, [filters]);

  const mockPlaylists = [];
  if (isLoading) {
    for (let i = 0; i < limit; i++) {
      mockPlaylists.push(i);
    }
  }

  return (
    <div
      className={`playlist-container${
        activePlaylist ? ' active-playlist' : ''
      }`}
    >
      <div className="title">{playlistMessage}</div>
      <Pagination
        offset={offset}
        limit={limit}
        total={totalPlaylists}
        setOffset={setOffset}
        setLimit={setLimit}
        small={!!activePlaylist}
      />
      {!isLoading
        ? playlists.map(playlist => (
            <Playlist
              key={playlist.id}
              playlist={playlist}
              active={activePlaylist}
            />
          ))
        : mockPlaylists.map(n => <Playlist key={n} />)}
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
