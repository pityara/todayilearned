import React from 'react';
import { Text } from '@blueprintjs/core';

export default ({ loggedIn, username }) =>
  <span className="logged_in">
    {(loggedIn) ?
      <Text>You are logged in as {username}</Text> :
      <Text>Log In please!</Text>}
  </span>