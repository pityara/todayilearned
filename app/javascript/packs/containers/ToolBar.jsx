import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bar from '../components/Bar';

const ToolBar = ({ logged_in }) =>
  <Bar logged_in={logged_in} />

const mapStateToProps = ({ session }) => {
  return { logged_in: session.logged_in };
}

export default connect(
  mapStateToProps,
)(ToolBar);

