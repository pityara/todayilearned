import React from 'react';
import { connect } from 'react-redux';

import HomePage from '../components/HomePage';

const HomePageContainer = () =>
  <HomePage />

export default connect()(HomePageContainer);
