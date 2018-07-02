import {ADD_POSTS, GET_POSTS} from '../actions/actionTypes';

const initialState = {
  previews: [],
};

const posts = (state = initialState, { type, payload, error} ) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        previews: {
          ...state.previews,
          ...payload.posts,
        },
      };
    case ADD_POSTS:
      return {
        ...state,
        previews: {
          ...state.previews,
          ...payload.posts,
        },
      };
    default:
      return state;
  }
};

export default posts;