import React from 'react';
import Tooltip from 'rc-tooltip';
import Skeleton from 'react-loading-skeleton';
import ArtistTooltip from '../../components/ArtistTooltip';
import './style.css';

const MAX_TITLE_LENGTH = 35;

const Track = ({ track, accessToken, setUnauthorized }) => {
  if (!track) {
    return (
      <div className="track">
        <Skeleton width={Math.floor(Math.random() * 60 + 31) + '%'} />
      </div>
    );
  }

  return (
    <div className="track">
      <a
        className="spotify-link white"
        title={track.name}
        href={track.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        {`${track.name.substring(0, MAX_TITLE_LENGTH)}${
          track.name.length > MAX_TITLE_LENGTH ? '...' : ''
        }`}
      </a>
      {` · `}
      <span className="artist-list">
        {track.artists.map((artist, index) => (
          <>
            <Tooltip
              placement="top"
              trigger={['click']}
              overlay={
                <ArtistTooltip
                  name={artist.name}
                  url={artist.href}
                  accessToken={accessToken}
                  setUnauthorized={setUnauthorized}
                />
              }
            >
              <span key={artist.id} className="artist">
                {artist.name}
              </span>
            </Tooltip>
            {index < track.artists.length - 1 ? ', ' : ''}
          </>
        ))}
      </span>
    </div>
  );
};

export default Track;
