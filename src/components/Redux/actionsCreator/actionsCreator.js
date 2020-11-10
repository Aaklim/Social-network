import {
  SEND_MESSAGE,
  ADD_POST,
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_PAGE_NUMBER,
  LOADING_START,
  LOADING_END,
  SET_USER_PROFILE,
  SET_USER_DATA,
  INITIALIZED_SUCCESS,
  SET_USER_STATUS,
  SET_USER_PHOTOS_SUCCESS,
  GET_CAPTCHA_URL_SUCCESS,
  DRAWER_TOGGLE,
  ADD_FOLLOWED_USER_TO_DIALOGS,
  DELETE_UNFOLLOWED_USER_FROM_DIALOGS,
  TOGGLE_FILTER,
} from '../actions/actions';
import { Api, profileApi, securityApi, followApi } from '../../Api/Api';
import { stopSubmit, reset } from 'redux-form';

export const sendMessage = (message, dialogNumber) => {
  return {
    type: SEND_MESSAGE,
    message,
    dialogNumber,
  };
};

export const addPost = (post) => {
  return {
    type: ADD_POST,
    post: post,
  };
};

export const follow = ({ id }) => {
  return {
    type: FOLLOW,
    userId: id,
  };
};

export const addFollowedUserToDialogs = (user) => {
  return {
    type: ADD_FOLLOWED_USER_TO_DIALOGS,
    user,
  };
};

export const unfollow = ({ id }) => {
  return {
    type: UNFOLLOW,
    userId: id,
  };
};
export const deleteFollowedUserFromDialogs = (userId) => {
  return {
    type: DELETE_UNFOLLOWED_USER_FROM_DIALOGS,
    userId,
  };
};

export const toggleDrawer = (toggle) => {
  return {
    type: DRAWER_TOGGLE,
    toggle,
  };
};

export const toggleFilter = () => {
  return {
    type: TOGGLE_FILTER,
  };
};
export const setUsers = (data) => {
  return {
    type: SET_USERS,
    data,
  };
};
export const setUserPhotoSuccess = (photos) => {
  return {
    type: SET_USER_PHOTOS_SUCCESS,
    photos,
  };
};
export const setActivePage = (currentPage) => {
  return {
    type: SET_PAGE_NUMBER,
    currentPage,
  };
};
export const loadingStart = () => {
  return {
    type: LOADING_START,
  };
};
export const loadingEnd = () => {
  return {
    type: LOADING_END,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const setUserStatus = (status) => {
  return {
    type: SET_USER_STATUS,
    status,
  };
};
export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    data: { userId, email, login, isAuth },
  };
};
export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};
export const getCaptchaUrlSuccess = (captchaUrl) => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    captchaUrl,
  };
};
//////////////////Thunk part//////////////////////

export const sendMessageThunk = (message, dialogNumber) => (dispatch) => {
  dispatch(sendMessage(message, dialogNumber));
  dispatch(reset('dialogs'));
};

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(setAuthUserDataThunk());
  Promise.all([promise]).then(() => dispatch(initializedSuccess()));
};

export const setUsersThunk = (currentPage, pageSize) => (dispatch) => {
  dispatch(loadingStart());
  Api.getUsers(currentPage, pageSize).then((data) => {
    console.log('SetUsersThunkData:', data);
    if (data.error === null) {
      console.log('Data.error', data.error);
      data.items
        .filter((item) => item.followed === true)
        .forEach((item) =>
          dispatch(addFollowedUserToDialogs(createFollowedUser(item)))
        );
      dispatch(setUsers(data));
      dispatch(loadingEnd());
    }
  });
};
const createFollowedUser = (user) => {
  return {
    id: user.id,
    name: user.name,
    photo: user.photos.small,
    messages: [],
  };
};

export const setFollowedUserThunk = (user) => (dispatch) => {
  followApi
    .addFollowedUser(user.id)
    .then((response) => {
      if (response.resultCode === 0) {
        dispatch(addFollowedUserToDialogs(createFollowedUser(user)));
        dispatch(follow(user));
      } else {
        throw new Error(response.messages[0]);
      }
    })
    .catch((error) => console.log(error));
};

export const deleteFollowedUserThunk = (user) => (dispatch) => {
  followApi
    .deleteFollowedUser(user.id)
    .then((response) => {
      if (response.resultCode === 0) {
        let followedUser = {
          id: user.id,
          name: user.name,
          photo: user.photos.small,
          messages: [],
        };
        dispatch(deleteFollowedUserFromDialogs(followedUser.id));
        dispatch(unfollow(user));
      } else {
        throw new Error(response.messages[0]);
      }
    })
    .catch((error) => console.log(error));
};

export const getCurrentPageThunk = (page, pageSize) => (dispatch) => {
  dispatch(setActivePage(page));
  dispatch(loadingStart());
  Api.getCurrentPage(page, pageSize)
    .then((data) => {
      if (data.error === null) dispatch(setUsers(data));
    })
    .then(dispatch(loadingEnd()));
};

export const getProfileThunk = (userId) => (dispatch) => {
  let userID = userId;
  Api.getProfile(userID).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export const setAuthUserDataThunk = () => (dispatch) => {
  return Api.setAuthUserData().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login, isAuth = true } = data.data;
      dispatch(setAuthUserData(id, email, login, isAuth));
    }
  });
};
export const addPostThunk = (post) => (dispatch) => {
  dispatch(addPost(post));
  dispatch(reset('Mypost'));
};

export const getUserStatusThunk = (userId) => (dispatch) => {
  profileApi.getStatus(userId).then((status) => {
    dispatch(setUserStatus(status));
  });
};

export const updateUserStatusThunk = (status) => (dispatch) => {
  profileApi.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};

export const login = (email, password, rememberMe, captchaUrl) => (
  dispatch
) => {
  Api.login(email, password, rememberMe, captchaUrl).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserDataThunk());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
    }
    dispatch(stopSubmit('login', { _error: data.messages[0] }));
  });
};

export const logout = () => (dispatch) => {
  Api.logout().then((data) => {
    if (data.resultCode === 0) {
      let result = dispatch(setAuthUserData(null, null, null, false));
      console.log('LogoutResult', result);
    }
  });
};

export const setProfilePhotoThunk = (photo) => (dispatch) => {
  profileApi
    .updatePhoto(photo)
    .then((data) => dispatch(setUserPhotoSuccess(data.data.photos)));
};

export const setProfileData = (
  userId,
  fullName,
  lookingForAJob,
  github,
  mainLink,
  aboutMe
) => (dispatch) => {
  console.log(
    'Frm dispatch',
    userId,
    fullName,
    lookingForAJob,
    github,
    mainLink,
    aboutMe
  );
  return profileApi
    .updateUserProfile(
      userId,
      fullName,
      lookingForAJob,
      github,
      mainLink,
      aboutMe
    )
    .then((data) => {
      console.log('UpdateProfile', data);
      if (data.resultCode === 0) {
        dispatch(getProfileThunk(userId));
      } else {
        dispatch(stopSubmit('profile', { _error: data.messages[0] }));
        return Promise.reject(data.messages[0]);
      }
    });
};
export const getCaptchaUrl = () => (dispatch) => {
  securityApi
    .getCaptchaUrl()
    .then((url) => dispatch(getCaptchaUrlSuccess(url)));
};
