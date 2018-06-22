import initialState from './initialState';
import { GET_TOKEN, LOG_IN_SUCCESS, LOG_OUT, LOG_IN_ERROR } from '../actions/actionTypes';

export default function sessionReducer(state=initialState, action) {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        session_token: action.payload.token,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logged_in: true,
        session_token: action.payload.token,
        username: action.payload.username,
      };
    case LOG_IN_ERROR:
      return {
        ...state,
        logged_in: false,
        error: {
          status: true,
          message: action.error.message,
        },
      };
    case LOG_OUT:
      return {
        ...state,
        logged_in: false,
        session_token: '',
      };
    default:
      return state;
  }
}
