import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const {
  REACT_APP_AUTH_API_URL,
  REACT_APP_CLIENT_ID,
  REACT_APP_URL,
} = process.env;

const sendToAuth = () => {
  window.location = `${REACT_APP_AUTH_API_URL}?client_id=${REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=${REACT_APP_URL}`;
};

const filterAndPrint = track => {
  const shouldAdd = track.track && track.track.id;
  if (!shouldAdd) console.log('Not adding', track);
  return shouldAdd;
};

export default ({ playlist }) => {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        .get(playlist.tracks.href, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        })
        .then(res => {
          console.log(res.data);
          setTracks(res.data.items);
        })
        .catch(e => {
          // if (e.response.status === 401) {
          //   localStorage.removeItem('access_token');
          //   sendToAuth();
          // }
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
  }, [playlist]);

  return (
    <div className="track-container">
      <div className="playlist-info">
        <img
          src={playlist.images[0].url}
          width={'196px'}
          height={'196px'}
          alt={playlist.name}
        />
        <h2>{playlist.name}</h2>
      </div>
      <div className="track-list">
        {tracks.filter(filterAndPrint).map(track => (
          <div className="track" key={track.track.id}>
            {track.track.name}
            {/* {track.track.artists.reduce((names, artist) => names + artist.name)} */}
          </div>
        ))}
      </div>
    </div>
  );
};
