import {
  SEND_MESSAGE,
  ADD_FOLLOWED_USER_TO_DIALOGS,
  DELETE_UNFOLLOWED_USER_FROM_DIALOGS,
} from './actions/actions';
import { cloneDeep } from 'lodash';

let initialstate = {
  dialogs: [],
};

const dialogsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let copyState = cloneDeep(state);
      copyState.dialogs
        .find((d) => d.id === Number(action.dialogNumber))
        .messages.push(action.message);
      return copyState;

    case ADD_FOLLOWED_USER_TO_DIALOGS:
      let copyDialogs = [...state.dialogs];
      if (!copyDialogs.find((dialog) => dialog.id === action.user.id)) {
        copyDialogs.push(action.user);
        return {
          ...state,
          dialogs: [...copyDialogs],
        };
      } else {
        return {
          ...state,
          dialogs: [...copyDialogs],
        };
      }

    case DELETE_UNFOLLOWED_USER_FROM_DIALOGS:
      let copyDialogs2 = [...state.dialogs];
      let filteredDialogs = copyDialogs2.filter(
        (dialog) => dialog.id !== action.userId
      );

      return {
        ...state,
        dialogs: [...filteredDialogs],
      };
    default:
      return state;
  }
};

export default dialogsReducer;
