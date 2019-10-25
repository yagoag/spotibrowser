import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import './style.css';
import Playlists from '../Playlists';
import FilterPanel from '../FilterPanel';
import Tracks from '../Tracks';
import store from '../../store';

const {
  REACT_APP_AUTH_API_URL,
  REACT_APP_CLIENT_ID,
  REACT_APP_URL,
  PUBLIC_URL,
} = process.env;

const sendToAuth = () => {
  window.location = `${REACT_APP_AUTH_API_URL}?client_id=${REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=${
    PUBLIC_URL !== '' ? PUBLIC_URL : REACT_APP_URL
  }`;
};

const App = () => {
  console.log(process.env);
  const [showFilters, setShowFilters] = useState(false);
  const [unauthorized, setUnauthorized] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      const hash = window.location.hash.substr(1);
      const hashParams = hash.split('&').reduce((result, item) => {
        var parts = item.split('=');
        result[parts[0]] = parts[1];
        return result;
      }, {});

      if (hashParams.access_token) {
        localStorage.setItem('access_token', hashParams.access_token);
        setAccessToken(hashParams.access_token);
      } else {
        sendToAuth();
      }
    } else {
      setAccessToken(localStorage.getItem('access_token'));
    }
  }, []);

  useEffect(() => {
    if (unauthorized) {
      localStorage.removeItem('access_token');
      sendToAuth();
    }
  }, [unauthorized]);

  return (
    <Provider store={store}>
      <div className="App">
        <div id="header">
          <div className="app-title">SpotiBrowser</div>
          <button
            className="show-filters"
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters
            <span className="arrow">
              {showFilters ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </span>
          </button>
        </div>
        <FilterPanel visible={showFilters} />
        <div id="contents">
          <Playlists
            setUnauthorized={setUnauthorized}
            accessToken={accessToken}
          />
          <Tracks setUnauthorized={setUnauthorized} accessToken={accessToken} />
        </div>
      </div>
    </Provider>
  );
};

export default App;
