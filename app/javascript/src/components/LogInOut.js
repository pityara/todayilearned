import React from 'react';
import { Button } from '@blueprintjs/core';

const LogInOut = ({ loggedIn, loginOut }) =>
  (loggedIn) ?
    <Button onClick={loginOut}>Log out</Button> :
    //<Button>Log In</Button>
    ""

export default LogInOut;
