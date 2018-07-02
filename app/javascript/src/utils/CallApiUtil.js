import fetch from 'isomorphic-fetch';

export const createPost = (token, title, text) => {
  const data = new FormData();
  data.append('title', title);
  data.append('text', text);
  const options = {
    method: 'POST',
    body: data,
    headers: {
      'Authorization': token,
    },
  };
  console.log(token);
  return fetch('/api/posts', options)
    .then((response) => response.json());
};


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

