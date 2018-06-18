import React from 'react';

export default ({ logged_in }) =>
  <div className="logged_in">
    {(logged_in) ?
      <h2>You are logged in!</h2> :
      <h2>Log In please!</h2>}
  </div>