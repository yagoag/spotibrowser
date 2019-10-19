import React from 'react';
import './style.css';

const Playlist = ({ playlist, onClick, active }) => {
  return (
    <div
      className={'playlist' + (active ? ' active' : '')}
      onClick={() => onClick(playlist)}
    >
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
        <div>{playlist.tracks.total} songs</div>
      </div>
    </div>
  );
};

export default Playlist;
