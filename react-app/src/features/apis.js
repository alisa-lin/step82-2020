import axios from 'axios';

const BASE_URL = 'http://localhost:5000/apis';	
const SIGNUP_URL = `${BASE_URL}/sign-up`;
const LOGIN_URL = `${BASE_URL}/login`;	
const LOGOUT_URL = `${BASE_URL}/logout`;
const GET_CURR_USER_URL = `${BASE_URL}/get-curr-user`;
const ADD_CLINK_URL = `${BASE_URL}/add-clink`;
const ADD_BOOKMARK_URL = `${BASE_URL}/add-bookmark`;
const FETCH_CLINKS_URL = `${BASE_URL}/fetch-clinks`;
const FETCH_WRITE_CLINKS_URL = `${BASE_URL}/fetch-write-clinks`;
const FETCH_BOOKMARKS_URL = `${BASE_URL}/fetch-bookmarks`;
const FETCH_USERS_URL = `${BASE_URL}/fetch-users`;

const signUp = (email, username, password) => axios.post(SIGNUP_URL, {
  email: email,
  username: username,
  password: password
});

const login = (username, password, remember) => axios.post(LOGIN_URL, {
  username: username,
  password: password,
  remember: remember
});

const logout = (token) => axios.post(LOGOUT_URL, {
  Authorization: token
});

const checkUser = (token) => axios.get(GET_CURR_USER_URL, {
  headers: {'Authorization': token}
});

const addClink = (title, token) => axios.post(ADD_CLINK_URL, {
  title: title,
  Authorization: token
});

const addBookmark = (link, title, description, clink, token) => axios.post(ADD_BOOKMARK_URL, {
  link: link,
  title: title,
  description: description,
  clink: clink,
  Authorization: token
});

const fetchClinks = (token) => axios.get(FETCH_CLINKS_URL, {
  headers: {'Authorization': token}
});

const fetchWriteClinks = (token) => axios.get(FETCH_WRITE_CLINKS_URL, {
  headers: {'Authorization': token}
});

const fetchBookmarks = (token, clinkId) => axios.get(FETCH_BOOKMARKS_URL, {
  headers: {
    'Authorization': token,
    'id': clinkId
  }
});

const fetchUsers = (token) => axios.get(FETCH_USERS_URL, {
  headers: {
    'Authorization': token
  }
})

export default {
  signUp, login, logout, 
  checkUser, addClink, addBookmark, 
  fetchClinks, fetchWriteClinks, fetchBookmarks,
  fetchUsers
} 	
