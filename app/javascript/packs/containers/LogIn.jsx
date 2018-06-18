import React from 'react';
import { connect } from 'react-redux';
import LogInForm from '../components/LogInForm'
import {getToken} from '../actions/sessionActions';

const LogIn = ({ submitAction }) =>
  <LogInForm submitAction={submitAction} />;

const mapDispatchToProps = (dispatch) => {
  return {
    submitAction: (name, pass) => dispatch(getToken(name, pass)),
  };
};

export default connect(null, mapDispatchToProps)(LogIn)