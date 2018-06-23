import React from 'react';
import { connect } from 'react-redux';

import { initAuth } from '../actions/sessionActions';
import { App } from '../components/App';

const AppContainer = props =>
  <App {...props} />

export default connect(null, {
  initAuth,
})(AppContainer);
