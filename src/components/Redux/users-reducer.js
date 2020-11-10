import {
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_PAGE_NUMBER,
  LOADING_START,
  LOADING_END,
} from './actions/actions';

const initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isloading: true,
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.data.items],

        totalUsersCount: action.data.totalCount,
      };
    case SET_PAGE_NUMBER:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case LOADING_START:
      return {
        ...state,
        isloading: true,
      };
    case LOADING_END:
      return {
        ...state,
        isloading: false,
      };
    default:
      return state;
  }
};

export default usersReduser;
