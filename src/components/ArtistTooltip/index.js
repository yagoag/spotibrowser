import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import './style.css';

const ArtistTooltip = ({ name, url, accessToken, setUnauthorized }) => {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtistData = async () => {
      if (url) {
        axios
          .get(url, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then(res => {
            setArtist(res.data);
          })
          .catch(e => {
            if (e.response.status === 401) {
              setUnauthorized(true);
            }
          });
      }
    };

    fetchArtistData();
  }, [url, accessToken, setUnauthorized]);

  return (
    <div className="artist-container">
      {artist ? (
        <img
          className="artist-picture"
          src={artist.images[0].url}
          alt={artist.name}
        />
      ) : (
        <div className="artist-picture">
          <Skeleton width="64px" height="64px" />
        </div>
      )}
      <div className="artist-details">
        <div className="artist-name">{name || artist.name}</div>
        <div className="artist-followers">
          {artist ? (
            `${calculateFollowers(artist.followers.total)} followers`
          ) : (
            <Skeleton width="88px" />
          )}
        </div>
        {artist ? (
          <a
            className="artist-link spotify-link"
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open on Spotify
          </a>
        ) : (
          <Skeleton width="113px" />
        )}
      </div>
    </div>
  );
};

const calculateFollowers = number => {
  return number < 1000
    ? number
    : number < 1000000
    ? Math.round(number / 1000) + 'K'
    : Math.round(number / 1000000) + 'M';
};

export default ArtistTooltip;
