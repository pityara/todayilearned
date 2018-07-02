import React from 'react';

const Post = ({ title, text }) =>
  <div className="post">
    <h1>{title}</h1>
    <article>{text}</article>
  </div>

export default Post;
