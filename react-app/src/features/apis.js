import axios from 'axios';

const BASE_URL = 'http://localhost:5000/apis';
const LOGIN_URL = `${BASE_URL}/login`;
const SIGNUP_URL = `${BASE_URL}/sign-up`;

const signUp = (email, username, password) => axios.post(SIGNUP_URL, {
  email: email,
  username: username,
  password: password
});

const login = (username, password) => axios.post(LOGIN_URL, {
  username: username,
  password: password
});

export default {
  login, signUp
}