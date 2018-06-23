import React from 'react';
import { Text } from '@blueprintjs/core';

export default ({ username }) =>
  <span className="logged_in">
    {(username) ?
      <Text>You are logged in as {username}</Text> :
      <Text>Log In please!</Text>}
  </span>