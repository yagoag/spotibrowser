import { createStore } from 'redux';
import { SET_FILTERS, SET_ACTIVE_PLAYLIST, SET_AUTO_REFRESH } from './actions';

const INITIAL_STATE = {
  activePlaylist: null,
  filters: {},
  autoRefresh: true,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ACTIVE_PLAYLIST:
      return { ...state, activePlaylist: action.playlist };
    case SET_FILTERS:
      return { ...state, filters: action.filters };
    case SET_AUTO_REFRESH:
      return { ...state, autoRefresh: action.value };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
