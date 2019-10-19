import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const MAX_TITLE_LENGTH = 35;

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
          width={'152px'}
          height={'152px'}
          alt={playlist.name}
        />
        <div className="playlist-details">
          <div className="list-type">Playlist</div>
          <div className="playlist-name">{playlist.name}</div>
          <div className="track-count">
            Created by{' '}
            <span className="playlist-owner">
              {playlist.owner.display_name}
            </span>{' '}
            · {playlist.tracks.total} songs
          </div>
        </div>
      </div>
      <div className="track-list">
        {tracks.filter(filterAndPrint).map(t => (
          <div className="track" key={t.track.id}>
            <span title={t.track.name}>{`${t.track.name.substring(
              0,
              MAX_TITLE_LENGTH,
            )}${t.track.name.length > MAX_TITLE_LENGTH ? '...' : ''}`}</span>
            {` · `}
            {t.track.artists.map((artist, index) => (
              <span className="artist">{`${artist.name}${
                index < t.track.artists.length - 1 ? ', ' : ''
              }`}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
