import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const filterAndPrint = track => {
  const shouldAdd = track.track && track.track.id;
  if (!shouldAdd) console.log('Not adding', track);
  return shouldAdd;
};

export default ({ playlist, setUnauthorized, accessToken }) => {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      setIsLoading(true);

      if (accessToken) {
        axios
          .get(playlist.tracks.href, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then(res => {
            console.log(res.data);
            setTracks(res.data.items);
          })
          .catch(e => {
            if (e.response.status === 401) {
              setUnauthorized(true);
            }
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
  }, [playlist, setUnauthorized, accessToken]);

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
