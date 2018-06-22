import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bar from '../components/LoginStatus';
import { logOut }  from '../actions/sessionActions';
import LogInOut from '../components/LogInOut';

const LoginToolBar = ({ loggedIn, loginOut }) =>
  <span className="login-tool-bar">
    <LogInOut loggedIn={loggedIn} loginOut={loginOut}/>
  </span>


const mapStateToProps = ({ session }) => {
  return { loggedIn: session.logged_in };
}

const mapDispatchToProps = (dispatch) => {
  return { loginOut: () => dispatch(logOut()) }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginToolBar);

