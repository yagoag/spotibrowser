import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePlaylist } from '../../store/actions';
import './style.css';

const Playlist = ({ playlist }) => {
  const dispatch = useDispatch();
  const activePlaylist = useSelector(state => state.activePlaylist);

  return (
    <div
      className={`playlist${activePlaylist ? ' playlist-small' : ''}${
        activePlaylist && playlist.id === activePlaylist.id ? ' active' : ''
      }`}
      onClick={() => dispatch(setActivePlaylist(playlist))}
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
