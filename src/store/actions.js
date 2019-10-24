function setActivePlaylist(playlist) {
  return {
    type: 'SET_ACTIVE_PLAYLIST',
    playlist,
  };
}

function setFilters(filters) {
  return {
    type: 'SET_FILTERS',
    filters,
  };
}

export { setActivePlaylist, setFilters };
