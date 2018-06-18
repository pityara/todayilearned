import fetch from 'isomorphic-fetch';
import {GET_TOKEN, LOG_IN_SUCCESS, LOG_OUT} from './actionTypes';

export const loginSuccess = () => {
  return {
    type: LOG_IN_SUCCESS,
    payload: {},
    error: false,
  };
};

export const logoutSuccess = () => {
  return {
    type: LOG_OUT,
    payload: {},
    error: false,
  };
};

export const takeToken = (token) => (
  {
    type: GET_TOKEN,
    payload: {
      token,
    },
    error: false,
  }
);

export const getToken = (email, password) => (dispatch) => {
  let data = new FormData();
  data.append("email", email);
  data.append("password", password);
  fetch("/auth",
    {
      method: "POST",
      body: data
    })
    .then((res) =>  res.json())
    .then((json) => dispatch(takeToken(json["auth_token"])))
};

