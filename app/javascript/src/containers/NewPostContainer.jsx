import React from 'react';
import { connect } from 'react-redux';
import NewPostForm from '../components/NewPostForm';
import { createNewPost } from '../actions/postsActions';

const NewPostContainer = ({ submitAction, token, history }) =>
  <NewPostForm submitAction={submitAction} token={token} history={history} />

const mapStateToProps = ({ session }) => {
  return {
    token: session.token,
  }
}

const mapDispatchTopProps = (dispatch) => {
  return {
    submitAction: (token, title, text) => dispatch(createNewPost(token, title, text)),
  }
}

export default connect(mapStateToProps, mapDispatchTopProps)(NewPostContainer);