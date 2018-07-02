import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { getPostData } from '../utils/PostUtil';

const PostContainer = (props) =>
  <Post {...props} />

const mapStateToProps = ({ posts }, { match }) => getPostData(posts.previews, match.params.id);

const areStatesEqual = (next, prev) => {
  return next.posts === prev.posts;
}

export default connect(
  mapStateToProps,
  null,
  null,
  {
    areStatesEqual,
  },
)(PostContainer);