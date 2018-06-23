import React from 'react';
import { connect } from 'react-redux';
import LoginStatus from '../components/LoginStatus';

const LoginStatusContainer = ({ username }) =>
  <LoginStatus username={username} />

const mapStateToProps = ({ session }) => {
  return {
    username: session.username,
  };
}

export default connect(
  mapStateToProps,
)(LoginStatusContainer);
