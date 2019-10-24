import { createStore } from 'redux';

const INITIAL_STATE = {
  activePlaylist: null,
  filters: {},
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_ACTIVE_PLAYLIST':
      return { ...state, activePlaylist: action.playlist };
    case 'SET_FILTERS':
      return { ...state, filters: action.filters };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
