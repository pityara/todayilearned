import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '@blueprintjs/core';

const HomePage = () =>
  <div className='home-page'>
    <h1> Welcome to Today I Learned Blog </h1>
    <h2> Show my blog <Link to='/posts'> posts there </Link></h2>
  </div>


export default HomePage;