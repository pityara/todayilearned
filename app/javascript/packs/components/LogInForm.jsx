import React from 'react';

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
        placeholder="Введите имя"/>
      <input
        type="password"
        ref={(input) => _password = input}
        placeholder="Вводите пароль" />
      <input type="submit" />
    </form>
  );
}

export default LogInForm

