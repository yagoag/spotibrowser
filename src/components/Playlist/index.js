import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { setActivePlaylist } from '../../store/actions';
import './style.css';

const Playlist = ({ playlist }) => {
  const dispatch = useDispatch();
  const activePlaylist = useSelector(state => state.activePlaylist);

  return (
    <div
      className={`playlist${activePlaylist ? ' playlist-small' : ''}${
        activePlaylist && playlist && playlist.id === activePlaylist.id
          ? ' active'
          : ''
      }`}
      onClick={() => dispatch(setActivePlaylist(playlist))}
    >
      {playlist ? (
        <img
          src={playlist.images[0].url}
          width="64px"
          height="64px"
          alt={playlist.name}
        />
      ) : (
        <Skeleton width="64px" height="64px" />
      )}
      <div className="info">
        <div className="name">
          {playlist ? (
            playlist.name
          ) : (
            <Skeleton width={Math.floor(Math.random() * 60 + 61) + 'px'} />
          )}
        </div>
        {playlist ? (
          <div>
            By <span className="owner">{playlist.owner.display_name}</span>
          </div>
        ) : (
          <Skeleton width="60px" />
        )}
        <div>
          {playlist ? (
            `${playlist.tracks.total} song${
              playlist.tracks.total > 1 ? 's' : ''
            }`
          ) : (
            <Skeleton width="55px" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
