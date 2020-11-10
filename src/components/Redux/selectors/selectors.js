import { createSelector } from 'reselect';

//App-selectors
export const getInitializedSelector = (state) => {
  return state.app.initialized;
};

export const getDrawerIsOpenSelector = (state) => {
  return state.app.drawerIsOpen;
};
export const getFilterSelector = (state) => {
  return state.app.filter;
};

//Header-selectors
export const getIsAuthSelector = (state) => {
  return state.auth.isAuth;
};
export const getLoginSelector = (state) => {
  return state.auth.login;
};
//Login-selectors
export const getCaptchaUrlSelector = (state) => {
  return state.auth.captchaUrl;
};
//Dialogs-selectors
export const getDialogsPageSelector = (state) => {
  return state.dialogsPage;
};
export const getAuthUserNameSelector = (state) => {
  return state.auth.login;
};
//Profile-selectors
export const getPostsSelector = (state) => {
  return state.profilePage.posts;
};
export const getProfileSelector = (state) => {
  return state.profilePage.profile;
};
export const getUserIdSelector = (state) => {
  return state.auth.userId;
};
export const getStatusSelector = (state) => {
  return state.profilePage.status;
};
// Auth Profile Selectors
export const getAuthUserIdSelector = (state) => {
  return state.auth.userId;
};
//Users Selectors

export const getUsersSelector = (state) => {
  const users = (state) => state.usersPage.users;
  const usersFiltered = (users) => {
    let usersFiltered = users.filter((user) => user.photos.small !== null);
    return usersFiltered;
  };
  switch (state.app.filter) {
    case false:
      return users(state);
    case true:
      const usersWithPhoto = createSelector(users, usersFiltered);
      return usersWithPhoto(state);
    default:
      return users;
  }
};
