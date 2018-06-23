import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut }  from '../actions/sessionActions';
import LogInOut from '../components/LogInOut';

const LoginToolBar = ({ loggedIn, loginOut }) =>
  <span className="login-tool-bar">
    <LogInOut loggedIn={loggedIn} loginOut={loginOut}/>
  </span>


const mapStateToProps = ({ session }) => {
  return { loggedIn: !!session.username };
};

const mapDispatchToProps = (dispatch) => {
  return { loginOut: () => dispatch(logOut()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginToolBar);

