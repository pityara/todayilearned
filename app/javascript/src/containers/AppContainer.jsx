import React from 'react';
import { connect } from 'react-redux';

import { initAuth } from '../actions/sessionActions';
import { fetchPostsData } from '../actions/postsActions';
import { App } from '../components/App';

const AppContainer = props =>
  <App {...props} />

export default connect(null, {
  initAuth,
  fetchPostsData,
})(AppContainer);
