import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bar from '../components/Bar';
import { logOut }  from '../actions/sessionActions';
import LogInOut from '../components/LogInOut';

const ToolBar = ({ loggedIn, loginOut }) =>
  <div className="tool-bar">
    <Bar loggedIn={loggedIn} />
    <LogInOut loggedIn={loggedIn} loginOut={loginOut}/>
  </div>


const mapStateToProps = ({ session }) => {
  return { loggedIn: session.logged_in };
}

const mapDispatchToProps = (dispatch) => {
  return { loginOut: () => dispatch(logOut()) }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToolBar);

