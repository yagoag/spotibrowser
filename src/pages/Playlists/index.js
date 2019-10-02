import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Playlist from '../../components/Playlist';
import './style.css';

const {REACT_APP_SPOTIFY_API_URL, REACT_APP_AUTH_API_URL} = process.env;

const Playlists = ({filters}) => {
  const [playlistMessage, setPlaylistMessage] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const [time, setTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const prevTimeRef = useRef();
  const prevFiltersRef = useRef();
  
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 30000);
    fetchPlaylistData();
    prevFiltersRef.current = filters;
    prevTimeRef.current = time;

    return () => clearInterval(interval);
  });

  const fetchPlaylistData = async () => {
    if (playlists.length === 0 || filters !== prevFiltersRef.current || time !== prevTimeRef.current) {
      setIsLoading(true);
      const tokenResponse = await axios.get(REACT_APP_AUTH_API_URL);
      setIsLoading(true); // In case of concurrent fetches, at least will let user know it's fetching data after a while
      const playlistResponse = await axios.get(REACT_APP_SPOTIFY_API_URL,
        {
          params: filters,
          headers: {Authorization: 'Bearer ' + tokenResponse.data.access_token}
        }
      );
      setPlaylistMessage(playlistResponse.data.message);
      setPlaylists(playlistResponse.data.playlists.items);
      setIsLoading(false);
    }
  };

  return (
    <div className="playlist-container">
      {isLoading && <div className="loader-container"><div className="loader"></div></div>}
      <div className="title">{playlistMessage}</div>
      {playlists.map((playlist, index) => <Playlist key={index} playlist={playlist} />)}
    </div>
  );
};

export default Playlists;