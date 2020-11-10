import Axios from 'axios';

const instanceAxios = Axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    'API-KEY': '7546d466-8b73-40c6-8b38-c029a730b93a',
  },
});

export const Api = {
  getUsers(currentPage, pageSize) {
    return instanceAxios
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getCurrentPage(page, pageSize) {
    return instanceAxios
      .get(`/users?page=${page}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getProfile(userId) {
    console.warn('Deprecated method , please use profileapi object');
    return profileApi.getProfile(userId);
  },
  setAuthUserData() {
    return instanceAxios.get(`/auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instanceAxios
      .post(`/auth/login`, { email, password, rememberMe, captcha })
      .then((response) => response.data);
  },
  logout() {
    return instanceAxios
      .delete(`/auth/login`)
      .then((response) => response.data);
  },
};

export const profileApi = {
  getProfile(userId) {
    return instanceAxios
      .get(`/profile/${userId}`)
      .then((response) => response.data);
  },
  getStatus(userId) {
    return instanceAxios
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instanceAxios
      .put(`profile/status`, {
        status: status,
      })
      .then((response) => response.data);
  },
  updatePhoto(photo) {
    let formData = new FormData();
    formData.append('image', photo);
    return instanceAxios
      .put(`/profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data);
  },
  updateUserProfile(
    userId,
    FullName,
    lookingForAJob,
    github,
    mainLink,
    aboutMe
  ) {
    return instanceAxios
      .put(`/profile`, {
        userId,
        lookingForAJob,
        LookingForAJobDescription: 'looking for a job',
        FullName,
        aboutMe,
        contacts: {
          github,
          vk: '',
          facebook: '',
          instagram: '',
          twitter: '',
          website: '',
          youtube: '',
          mainLink,
        },
      })
      .then((response) => response.data);
  },
};

export const securityApi = {
  getCaptchaUrl() {
    return instanceAxios
      .get(`/security/get-captcha-url`)
      .then((response) => response.data.url);
  },
};

export const followApi = {
  addFollowedUser(userId) {
    return instanceAxios
      .post(`/follow/${userId}`)
      .then((response) => response.data);
  },
  deleteFollowedUser(userId) {
    return instanceAxios
      .delete(`/follow/${userId}`)
      .then((response) => response.data);
  },
};
