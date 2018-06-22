import fetch from 'isomorphic-fetch';
import { LOG_IN_ERROR, LOG_IN_SUCCESS, LOG_OUT } from './actionTypes';

export const loginSuccess = (token, username) => {
  return {
    type: LOG_IN_SUCCESS,
    payload: {
      token,
      username
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
  fetch("/auth",
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
      dispatch(loginSuccess(json.auth_token, email));
      localStorage['auth_token_redux'] = json.auth_token;
    })
    .catch((error) => dispatch(loginError(error.message)));
};

