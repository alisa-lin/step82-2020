import axios from 'axios';

const BASE_URL = 'http://localhost:5000/apis';	
const LOGIN_URL = `${BASE_URL}/login`;	
const SIGNUP_URL = `${BASE_URL}/sign-up`;
const LOGOUT_URL = `${BASE_URL}/logout`;
const GET_CURR_USER_URL = `${BASE_URL}/get-curr-user`;
const ADD_CLINK_URL = `${BASE_URL}/add-clink`;

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

const addClink = (title, id) => axios.post(ADD_CLINK_URL, {
  title: title,
  id: id
});

export default {
  signUp, login, logout, checkUser, addClink
} 	
