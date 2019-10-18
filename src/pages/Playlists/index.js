import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Playlist from '../../components/Playlist';
import Pagination from '../../components/Pagination';
import './style.css';

const {
  REACT_APP_SPOTIFY_API_URL,
  REACT_APP_AUTH_API_URL,
  REACT_APP_CLIENT_ID,
  REACT_APP_URL,
} = process.env;

const sendToAuth = () => {
  window.location = `${REACT_APP_AUTH_API_URL}?client_id=${REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=${REACT_APP_URL}`;
};

const Playlists = ({ filters, activePlaylist, setActivePlaylist }) => {
  const [playlistMessage, setPlaylistMessage] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [totalPlaylists, setTotalPlaylists] = useState(0);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      setIsLoading(true);

      if (!localStorage.getItem('access_token')) {
        const hash = window.location.hash.substr(1);
        const hashParams = hash.split('&').reduce((result, item) => {
          var parts = item.split('=');
          result[parts[0]] = parts[1];
          return result;
        }, {});

        if (hashParams.access_token) {
          localStorage.setItem('access_token', hashParams.access_token);
        } else {
          sendToAuth();
        }
      }

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
          if (e.response.status === 401) {
            localStorage.removeItem('access_token');
            sendToAuth();
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
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
        <Playlist key={index} playlist={playlist} onClick={setActivePlaylist} />
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
