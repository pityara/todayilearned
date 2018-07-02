import React from 'react';
import { Label, Button } from '@blueprintjs/core';

const NewPostFrom = ({ submitAction, token, history }) => {
  let _title, _text;
  const submitForm = (event) => {
    event.preventDefault();
    submitAction(token, _title.value, _text.value);
    history.push('/posts');
  };
  return (
    <div className="newPostForm">
      <form onSubmit={submitForm}>
      <Label text="Title">
      <input
          type="text"
          ref={(input) => _title = input}
          placeholder="Type title"
          className="pt-input"/>
      </Label>
      <Label text="Text">
        <textarea
          cols={50}
          rows={10}
          ref={(input) => _text = input}
          placeholder="Type text"
          className="pt-input"/>
      </Label>
      <Button type="submit" icon="key">Submit</Button>
    </form>
    </div>

  );
};

export default NewPostFrom;
