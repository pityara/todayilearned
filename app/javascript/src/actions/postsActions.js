import { normalize, schema } from 'normalizr';
import {ADD_POSTS, GET_POSTS} from './actionTypes';
import {createPost, fetchPosts} from '../utils/CallApiUtil';
import {normalizePost, normilizeArrayOfPosts} from '../schemas/postSchema';


const getPosts = (posts) => {
  return {
    type: GET_POSTS,
    payload: {
      posts,
    },
  };
};

const addPost = (post) => {
  const { entities } = post;
  console.log(entities);
  const { users, posts } = entities;
  return {
    type: ADD_POSTS,
    payload: {
      posts,
      users,
    },
  };
};

export const createNewPost = (token, title, text) => (dispatch) => {
  createPost(token, title, text)
    .then((post) => normalizePost(post))
    .then((normalizedPost) => dispatch(addPost(normalizedPost)))
    .catch((error) => console.log(error));
}

export const fetchPostsData = () => (dispatch) => {
  fetchPosts()
    .then(json => normilizeArrayOfPosts(json))
    .then(normalizedData => {
      const { result, entities } = normalizedData;
      const { posts } = entities;
      dispatch(getPosts(posts));
    });
};

