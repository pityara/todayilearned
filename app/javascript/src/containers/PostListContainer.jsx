import React from 'react';
import { connect } from 'react-redux';
import PostList from '../components/PostList';

const PostListContainer = ({ posts }) =>
  <PostList posts={posts} />

const mapStateToProps = ({ posts }) => {
  return { posts: posts.previews };
};

export default connect(
  mapStateToProps,
)(PostListContainer);
