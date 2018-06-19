import React from 'react';
import { Button } from '@blueprintjs/core';

const LogInForm = ({ submitAction }) => {
  let _name, _password;
  const submitForm = (event) => {
    event.preventDefault();
    submitAction(_name.value, _password.value);
  };
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        ref={(input) => _name = input}
        placeholder="Введите имя"
        className="pt-input"/>
      <input
        type="password"
        ref={(input) => _password = input}
        placeholder="Вводите пароль"
        className="pt-input"/>
      <Button type="submit">Log In</Button>
    </form>
  );
}

export default LogInForm

