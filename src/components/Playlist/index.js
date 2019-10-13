import React from 'react';
import './style.css';

const Playlist = ({ playlist }) => {
  return (
    <a className="playlist" href={playlist.uri}>
      <img
        src={playlist.images[0].url}
        width={'64px'}
        height={'64px'}
        alt={playlist.name}
      />
      <div className="info">
        <div className="name">{playlist.name}</div>
        <div>
          By <span className="owner">{playlist.owner.display_name}</span>
        </div>
        <div>{playlist.tracks.total} tracks</div>
      </div>
    </a>
  );
};

export default Playlist;
