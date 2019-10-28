import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../components/Pagination';
import { setActivePlaylist } from '../../store/actions';
import Track from '../../components/Track';
import './style.css';

const Tracks = ({ setUnauthorized, accessToken }) => {
  const [tracks, setTracks] = useState([]);
  const [totalTracks, setTotalTracks] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const playlist = useSelector(state => state.activePlaylist);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPlaylistData = async () => {
      setIsLoading(true);

      if (playlist && accessToken) {
        axios
          .get(playlist.tracks.href, {
            params: { offset, limit },
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then(res => {
            setTracks(res.data.items);
            setTotalTracks(res.data.total);
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
  }, [playlist, setUnauthorized, accessToken, limit, offset]);

  useEffect(() => {
    setOffset(0);
  }, [playlist]);

  const mockTracks = [];
  if (isLoading) {
    for (let i = 0; i < limit; i++) {
      mockTracks.push(i);
    }
  }

  if (!playlist) {
    return <></>;
  }

  return (
    <div className={`track-container`}>
      <div className="playlist-info">
        <img
          src={playlist.images[0].url}
          width={'152px'}
          height={'152px'}
          alt={playlist.name}
        />
        <div className="playlist-details">
          <div className="list-type">
            Playlist ·{' '}
            <a
              className="spotify-link"
              href={playlist.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open on Spotify
            </a>
          </div>
          <div className="playlist-name">{playlist.name}</div>
          <div className="track-count">
            Created by{' '}
            <a
              className="playlist-owner spotify-link white"
              href={playlist.owner.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              {playlist.owner.display_name}
            </a>{' '}
            · {playlist.tracks.total} songs
          </div>
        </div>
        <IoMdClose
          className="close-button"
          onClick={() => dispatch(setActivePlaylist(null))}
        />
      </div>
      <div className="track-list">
        {!isLoading
          ? tracks
              .filter(t => t.track && t.track.id)
              .map(t => (
                <Track
                  key={t.track.id}
                  track={t.track}
                  accessToken={accessToken}
                  setUnauthorized={setUnauthorized}
                />
              ))
          : mockTracks.map(n => <Track key={n} />)}
      </div>
      <Pagination
        offset={offset}
        limit={limit}
        total={totalTracks}
        setOffset={setOffset}
        setLimit={setLimit}
      />
    </div>
  );
};

export default Tracks;
