import {
  ADD_POST,
  SET_USER_PROFILE,
  SET_USER_STATUS,
  SET_USER_PHOTOS_SUCCESS,
} from './actions/actions';

let initialState = {
  posts: [
    { id: 1, post: 'Hello everybody', likesCount: '25' },
    { id: 2, post: 'This is my Profile page', likesCount: '15' },
  ],
  profile: null,
  status: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 3,
            post: action.post,
            likesCount: 10,
          },
        ],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_USER_PHOTOS_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };

    default:
      return state;
  }
};

export default profileReducer;
