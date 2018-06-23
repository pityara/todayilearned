import { GET_TOKEN, LOG_IN_SUCCESS, LOG_OUT, LOG_IN_ERROR } from '../actions/actionTypes';

const initialState = {
  user_id: null,
  username: '',
  token: '',
};

const session = (state = initialState, { type, payload, error }) =>  {
  switch (type) {
    case LOG_IN_SUCCESS:
      return {
        ...state,
        user_id: payload.user_id,
        username: payload.username,
        token: payload.token,
      };
    // case LOG_IN_ERROR:
    //   return {
    //     ...state,
    //     error: {
    //       status: true,
    //       message: error.message,
    //     },
    //   };
    case LOG_OUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default session;
