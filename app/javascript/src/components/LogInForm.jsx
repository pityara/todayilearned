import React from 'react';
import { Button, Label } from '@blueprintjs/core';

const LogInForm = ({ submitAction }) => {
  let _name, _password;
  const submitForm = (event) => {
    event.preventDefault();
    submitAction(_name.value, _password.value);
  };
  return (
    <form onSubmit={submitForm}>
        <Label text="Username">
      <input
        type="text"
        ref={(input) => _name = input}
        placeholder="Type username"
        className="pt-input"/>
        </Label>
        <Label text="Password">
      <input
        type="password"
        ref={(input) => _password = input}
        placeholder="Type password"
        className="pt-input"/>
        </Label>
      <Button type="submit" icon="key">Log In</Button>
    </form>
  );
}

export default LogInForm
