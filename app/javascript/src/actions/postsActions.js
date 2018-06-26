import { GET_POSTS } from './actionTypes';
import { fetchPosts } from '../utils/CallApiUtil';

const getPosts = (posts) => {
  return {
    type: GET_POSTS,
    payload: {
      previews: posts,
    },
  };
};

export const fetchPostsData = () => (dispatch) => {
  fetchPosts()
    .then(json => dispatch(getPosts(json)));
};

