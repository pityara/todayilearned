import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

const LogInOut = ({ loggedIn, loginOut }) =>
  (loggedIn) ?
    <Button onClick={loginOut}>Log out</Button> :
    <Link to="/login">
      <Button>Log In</Button>
    </Link>

export default LogInOut;
