import React from 'react';

export default ({ loggedIn }) =>
  <div className="logged_in">
    {(loggedIn) ?
      <h2>You are logged in!</h2> :
      <h2>Log In please!</h2>}
  </div>