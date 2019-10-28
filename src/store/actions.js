function setActivePlaylist(playlist) {
  return {
    type: SET_ACTIVE_PLAYLIST,
    playlist,
  };
}

function setFilters(filters) {
  return {
    type: SET_FILTERS,
    filters,
  };
}

function setAutoRefresh(value) {
  return {
    type: SET_AUTO_REFRESH,
    value,
  };
}

const SET_ACTIVE_PLAYLIST = 'SET_ACTIVE_PLAYLIST';
const SET_FILTERS = 'SET_FILTERS';
const SET_AUTO_REFRESH = 'SET_AUTO_REFRESH';

export {
  SET_ACTIVE_PLAYLIST,
  SET_FILTERS,
  SET_AUTO_REFRESH,
  setActivePlaylist,
  setFilters,
  setAutoRefresh,
};
