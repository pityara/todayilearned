import React from 'react';
import { connect } from 'react-redux';
import LoginStatus from '../components/LoginStatus';

const LoginStatusContainer = ({ loggedIn, username }) =>
  <LoginStatus loggedIn={loggedIn} username={username} />

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: session.logged_in,
    username: session.username,
  };
}

export default connect(
  mapStateToProps,
)(LoginStatusContainer);
