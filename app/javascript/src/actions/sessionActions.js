import fetch from 'isomorphic-fetch';
import { LOG_IN_ERROR, LOG_IN_SUCCESS, LOG_OUT } from './actionTypes';

export const loginSuccess = (username, user_id, token) => {
  return {
    type: LOG_IN_SUCCESS,
    payload: {
      username,
      user_id,
      token,
    },
    error: {
      status: false,
    },
  };
};

export const loginError = (message) => {
  return {
    type: LOG_IN_ERROR,
    payload: {},
    error: {
      status: true,
      message,
    },
  };
};

const fetchSessionData = (token) => (dispatch) => {
  const options = {headers: { 'Authorization': token } };
  fetch('/api/auth', options)
    .then((response) => response.json())
    .then((json) => dispatch(loginSuccess(json.email, json.id, token)));
};

export const initAuth = () => (dispatch) => {
  const token = localStorage['auth_token_redux'];
  if (token) {
    dispatch(fetchSessionData(token));
  }
}

export const logOutSuccess = () => {
  return {
    type: LOG_OUT,
    payload: {},
    error: {
      status: false,
    },
  };
};

export const logOut = () => (dispatch) => {
  localStorage['auth_token_redux'] = '';
  dispatch(logOutSuccess());
};

export const getToken = (email, password) => (dispatch) => {
  let data = new FormData();
  data.append("email", email);
  data.append("password", password);
  fetch("/api/auth",
    {
      method: "POST",
      body: data
    })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      } else {
        const error = new Error(response.statusText || response.status);
        error.message = response.statusText;
        return Promise.reject(error);
      }
    })
    .then((res) => res.json())
    .then((json) => {
      dispatch(fetchSessionData(json.auth_token));
      localStorage['auth_token_redux'] = json.auth_token;
    })
    .catch((error) => dispatch(loginError(error.message)));
};

