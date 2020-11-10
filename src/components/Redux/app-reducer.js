import {
  INITIALIZED_SUCCESS,
  DRAWER_TOGGLE,
  TOGGLE_FILTER,
} from './actions/actions';

let initialstate = {
  initialized: false,
  drawerIsOpen: false,
  filter: false,
};

const appReducer = (state = initialstate, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    case DRAWER_TOGGLE:
      return {
        ...state,
        drawerIsOpen: action.toggle,
      };
    case TOGGLE_FILTER:
      return {
        ...state,
        filter: !state.filter,
      };

    default:
      return state;
  }
};

export default appReducer;
