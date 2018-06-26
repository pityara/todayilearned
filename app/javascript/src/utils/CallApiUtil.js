import fetch from 'isomorphic-fetch';

export const fetchPosts = () =>
  fetch('/api/posts')
    .then(posts => posts.json());

export const fetchSession = (token) => {
  const options = {
    headers: {
      'Authorization': token,
    },
  };
  return (
    fetch('/api/auth', options)
      .then(response => response.json())
  );
};

