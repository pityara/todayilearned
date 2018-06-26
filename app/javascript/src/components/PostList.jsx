import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';

const style = {
  //display: 'flex',
};

const PostList = ({ posts }) =>
  <div className='preview-posts' style={style}>
    {posts.map((post) =>
      <Card interactive={true} elevation={Elevation.TWO} key={post.id} className="post-preview__card">
        <h5>{post.title}</h5>
        <p>{post.text}</p>
      </Card>
    )}
  </div>

export default PostList;