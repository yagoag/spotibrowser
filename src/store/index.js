import { createStore } from 'redux';

const INITIAL_STATE = {
  activePlaylist: null,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_ACTIVE_PLAYLIST':
      return { ...state, ACTIVE_PLAYLIST: action.playlist };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
