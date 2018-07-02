import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';

const style = {
  //display: 'flex',
};

const PostList = ({ posts }) =>
  <div className='preview-posts' style={style}>
    {Object.keys(posts).map((key) =>
      <Card interactive={true} elevation={Elevation.TWO} key={key} className="post-preview__card">
        <h5>{posts[key].title}</h5>
        <p>{posts[key].text}</p>
        <Button>
          <Link to={'/posts/'+key}>
            Check Post!
          </Link>
        </Button>
      </Card>
    )}
  </div>

export default PostList;