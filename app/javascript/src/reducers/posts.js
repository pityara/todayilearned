import { GET_POSTS } from '../actions/actionTypes';

const initialState = {
  previews: [],
};

const posts = (state = initialState, { type, payload, error} ) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        previews: payload.previews,
      };
    default:
      return state;
  }
};

export default posts;